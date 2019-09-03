<template>
  <div class="questions">
    <v-container class="my-3">
      <v-layout row align-center justify-space-between :class="{'column': $vuetify.breakpoint.xs}">
        <p
          :class="{'title mb-2': $vuetify.breakpoint.xs}"
          class="display-3 ma-0"
        >{{tech.toUpperCase()}} INTERVIEW QUESTIONS</p>
        <v-btn depressed color="success" to="/add-question">Send A Question</v-btn>
      </v-layout>
      <v-divider class="mb-5"></v-divider>

      <v-layout v-if="isLoading" row justify-center>
        <v-progress-circular :size="50" color="success" indeterminate></v-progress-circular>
      </v-layout>
      <v-layout v-if="!isLoading" row justify-space-between>
        <p class="grey--text ml-2">Title</p>
        <v-btn small flat color="grey" @click="sort">
          <v-icon small left>sort</v-icon>
          <span class="caption text-lowercase">By Difficulty</span>
        </v-btn>
      </v-layout>

      <v-layout v-if="!isLoading" class="d-block">
        <Question v-for="(que,idx) in questions" :question="que" :key="idx" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Question from "../components/Question";
import { mapState } from "vuex";
export default {
  data() {
    return {
      sorted: false,
      isLoading: false,
      tech: '',
    };
  },
  computed: {
    ...mapState(["questions"])
  },
  components: {
    Question
  },
  methods: {
    sort() {
      if (!this.sorted) {
        this.questions.sort((a, b) =>
          a["difficulty"] < b["difficulty"] ? -1 : 1
        );
        this.sorted = true;
      } else {
        this.questions.sort((a, b) =>
          a["difficulty"] > b["difficulty"] ? -1 : 1
        );
        this.sorted = false;
      }
    }
  },

  created() {
    this.tech = this.$route.params.id;

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  border-radius: 3px;
}
</style>
