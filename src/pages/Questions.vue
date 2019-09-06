<template>
  <div class="questions">
    <v-container class="my-3">
      <v-layout row align-center justify-space-between :class="{'column': $vuetify.breakpoint.xs}">
        <p
          :class="{'title mb-2': $vuetify.breakpoint.xs}"
          class="display-3 ma-0"
        >{{tech.toUpperCase()}} INTERVIEW QUESTIONS</p>
        <v-btn depressed color="success" @click="sendQuestion">Send A Question</v-btn>
      </v-layout>
      <v-divider class="mb-5"></v-divider>
      <v-layout v-if="isLoading" row justify-center>
        <v-progress-circular :size="50" color="success" indeterminate></v-progress-circular>
      </v-layout>
      <v-layout v-if="!isLoading && questions.length == 0" row justify-space-between>
        <div class="no-question">
          <p>There is no question yet &#x1F614;</p>

          <p>If you have a good question please send us!</p>
        </div>
      </v-layout>
      <v-layout v-if="!isLoading && questions.length != 0" row justify-space-between>
        <p class="grey--text ml-2">Title</p>
        <v-btn small flat color="grey" @click="sort">
          <v-icon small left>sort</v-icon>
          <span class="caption text-lowercase">By Difficulty</span>
        </v-btn>
      </v-layout>
      <v-layout v-if="!isLoading" class="d-block">
        <Question v-for="(que,idx) in questions" :question="que" :key="idx" />
      </v-layout>
      <v-snackbar v-model="snackbar" top color="success">
        You have to log in to submit question &#128525;
        <v-btn color="#555" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import Question from "../components/Question";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      snackbar: false,
      sorted: false,
      isLoading: false,
      tech: ""
    };
  },
  computed: {
    ...mapState(["questions", "isLoggedIn"])
  },
  components: {
    Question
  },
  methods: {
    ...mapActions(["fetchQuestions"]),
    sendQuestion() {
      this.isLoggedIn
        ? this.$router.push("/add-question")
        : (this.snackbar = true);
    },
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

    this.fetchQuestions(this.tech).then(res => {
      this.isLoading = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.no-question {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  margin-top: 50px;
  font-size: 18px;
}
.v-btn {
  border-radius: 3px;
}

.questions {
  margin-top: 100px;
}
</style>
