<template>
  <div class="questions">
    <v-container class="my-3">
      <v-layout class="d-block mx-auto" style="max-width: 900px">
        <p class="title ma-0 mb-5 text-center">{{question.title}}</p>

        <div v-html="question.detail" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Question from "../components/Question";

import { VueEditor, Quill } from "vue2-editor";
import { mapState } from "vuex";
import "highlight.js/styles/solarized-dark.css";


export default {
  data() {
    return {
      content: "",
      editorSettings: {
        modules: {
          syntax: {
            highlight: text => window.hljs.highlightAuto(text).value
          }
        },
        theme: "snow"
      },
      question: {}
    };
  },

  computed: {
    ...mapState(["questions"])
  },
  components: {
    VueEditor
  },

  created() {
    const id = this.$route.params.id;
    this.question = this.questions.find(que => que.id == id);
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  border-radius: 3px;
}
</style>
