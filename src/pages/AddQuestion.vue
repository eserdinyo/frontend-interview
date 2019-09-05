<template>
  <div class="questions">
    <v-container class="my-3">
      <v-layout class="d-block mx-auto" style="max-width: 900px">
        <v-form ref="form">
          <v-text-field
            :rules="titleRule"
            v-model="question.title"
            label="Title of question"
            required
          ></v-text-field>
          <v-select
            :rules="techRule"
            v-model="question.tech"
            :items="techs"
            required
            label="Select a technology"
          ></v-select>
          <v-select
            class="mb-2"
            required
            :rules="diffRule"
            v-model="question.difficulty"
            :items="items"
            label="Select difficulty"
          ></v-select>
          <v-label class="caption">Detail Of Question</v-label>
          <vue-editor
            class="mt-2"
            id="editor"
            required
            :editorOptions="editorSettings"
            v-model="question.detail"
          ></vue-editor>
          <v-btn
            :loading="isLoading"
            :disabled="isLoading"
            flat
            class="success ml-0 mt-4"
            @click="sendQuestion"
          >Send Question</v-btn>
        </v-form>
      </v-layout>
      <v-snackbar v-model="snackbar" top color="success">
        Your question succesfuly sended for review &#128525;
        <v-btn color="#555" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";
import Question from "../components/Question";
import { mapActions, mapState } from "vuex";
import "highlight.js/styles/solarized-dark.css";
import { VueEditor, Quill } from "vue2-editor";

export default {
  data() {
    return {
      snackbar: false,
      titleRule: [v => !!v || "Title is required"],
      techRule: [v => !!v || "Select a technology"],
      diffRule: [v => !!v || "Select a difficulty"],
      question: {
        difficulty: "",
        tech: "",
        title: "",
        detail: "",
        slug: "",
        username: '',
      },
      isLoading: false,
      editorSettings: {
        modules: {
          syntax: true
        },
        theme: "snow"
      },
      techs: [
        {
          text: "React",
          value: "react"
        },
        {
          text: "Vue.JS",
          value: "vuejs"
        },
        {
          text: "Angular",
          value: "angular"
        },
        {
          text: "Javascript",
          value: "javascript"
        }
      ],
      items: [
        {
          text: "Easy",
          value: 1
        },
        {
          text: "Medium",
          value: 2
        },
        {
          text: "Hard",
          value: 3
        }
      ]
    };
  },
  components: {
    VueEditor
  },
  computed: {
    ...mapState(["isLoggedIn", 'currentUser'])
  },
  methods: {
    ...mapActions(["addQuestion"]),
    slugify(text) {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
    },
    sendQuestion() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;
        this.question.slug = this.slugify(this.question.title); 
        this.question.username = this.currentUser.email.split('@')[0];

        this.addQuestion(this.question).then(res => {
          this.isLoading = false;
          this.snackbar = true;

          this.question.title = "";
          this.question.tech = "";
          this.question.detail = "";
          this.question.difficulty = "";
        });
      }
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (!this.isLoggedIn) {
        this.$router.push("/?signout");
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  border-radius: 3px;
}

.questions {
  margin-top: 100px;
}
</style>
