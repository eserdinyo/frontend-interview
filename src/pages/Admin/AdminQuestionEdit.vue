<template>
  <div id="wrapper">
    <!-- LEFT SIDEBAR -->
    <Navbar />
    <v-container class="my-3">
      <v-layout class="d-block mx-auto" style="max-width: 900px">
        <v-form ref="form">
          <v-text-field v-model="question.title" label="Title of question" required></v-text-field>
          <v-select v-model="question.tech" :items="techs" required label="Select a technology"></v-select>
          <v-select
            class="mb-2"
            required
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
            @click="saveQuestion"
          >Send Question</v-btn>
        </v-form>
      </v-layout>
      <v-snackbar v-model="snackbar" top color="success">
        Question updated &#128525;
        <v-btn color="#555" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
import { mapActions } from "vuex";

import "highlight.js/styles/solarized-dark.css";
import Navbar from "./Navbar";

export default {
  data() {
    return {
      snackbar: false,
      isLoading: false,
      question: {},
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
    Navbar,
    VueEditor
  },
  methods: {
    ...mapActions(["fetchSingleQuestion", "editQuestion"]),
    saveQuestion() {
      const { title, tech, difficulty, detail, id } = this.question;
      this.isLoading = true;
      this.editQuestion({
        title,
        tech,
        difficulty,
        detail,
        id
      }).then(res => {
        this.isLoading = false;
        this.snackbar = true;
      });
    }
  },
  created() {
    const slug = this.$route.params.slug;
    const tech = this.$route.query.tech;
    this.isLoading = true;
    this.fetchSingleQuestion({ slug, tech }).then(res => {
      this.question = res;
      this.isLoading = false;
    });
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  margin-top: 100px;
}
</style>