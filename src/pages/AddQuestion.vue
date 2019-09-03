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
            @click="addQuestion"
          >Send Question</v-btn>
        </v-form>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Question from "../components/Question";
import { mapGetters } from "vuex";
import "highlight.js/styles/solarized-dark.css";
import { VueEditor, Quill } from "vue2-editor";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      titleRule: [v => !!v || "Title is required"],
      techRule: [v => !!v || "Select a technology"],
      diffRule: [v => !!v || "Select a difficulty"],
      question: {
        difficulty: "",
        tech: "",
        title: "",
        detail: "",
        id: ""
      },
      isLoading: false,
      content: "",
      editorSettings: {
        modules: {
          syntax: true
        },
        theme: "snow"
      },
      techs: [
        {
          text: "React",
          value: 1
        },
        {
          text: "Vue",
          value: 2
        },
        {
          text: "Angular",
          value: 3
        },
        {
          text: "Javascript",
          value: 4
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
  computed: {
    ...mapGetters(["questionsLength"])
  },
  components: {
    VueEditor
  },
  methods: {
    addQuestion() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;

        setTimeout(() => {
          this.$store.dispatch("addQuestion", this.question);
          this.isLoading = false;
          this.$router.push("/questions/vue");
        }, 2000);
      }
    }
  },
  created() {
    this.question.id = this.questionsLength + 1;
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  border-radius: 3px;
}
</style>
