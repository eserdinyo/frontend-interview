<template>
  <div class="questions">
    <v-container class="my-3">
      <v-layout v-if="isLoading" row justify-center>
        <v-progress-circular :size="50" color="success" indeterminate></v-progress-circular>
      </v-layout>
      <v-layout v-else class="d-block mx-auto" style="max-width: 900px">
        <p class="title ma-0 mb-5">{{question.title}}</p>

        <div v-html="question.detail" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
import { mapActions } from "vuex";
import "highlight.js/styles/atom-one-dark.css";

export default {
  data() {
    return {
      content: "",
      isLoading: false,
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

  computed: {},
  methods: {
    ...mapActions(["fetchSingleQuestion"])
  },
  components: {
    VueEditor
  },

  created() {
    const slug = this.$route.params.slug;
    this.isLoading = true;
    this.fetchSingleQuestion(slug).then(res => {
      this.question = res;
      this.isLoading = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  border-radius: 3px;
}

.title {
  margin-top: 30px !important;
}

.questions {
  margin-top: 100px;
}
</style>
