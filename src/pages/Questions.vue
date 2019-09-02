<template>
  <div class="questions">
    <v-container class="my-3">
      <v-layout row align-center justify-space-between>
        <p class="display-3 ma-0">VUEJS INTERVIEW QUESTIONS</p>
        <v-btn depressed color="success">Send A Question</v-btn>
      </v-layout>
      <v-divider class="mb-5"></v-divider>

      <v-layout row justify-space-between>
        <p class="grey--text ml-2">Title</p>
        <v-btn small flat color="grey" @click="sort">
          <v-icon small left>sort</v-icon>
          <span class="caption text-lowercase">By Difficulty</span>
        </v-btn>
      </v-layout>
      <Question v-for="(que,idx) in questions" :question="que" :key="idx" />
    </v-container>
  </div>
</template>

<script>
import Question from "../components/Question";
export default {
  data() {
    return {
      sorted: false,
      questions: [
        {
          id: 1,
          title: "Describe event bubbling",
          difficulty: 1
        },
        {
          id: 2,
          title: "What is the difference between == and ===?",

          difficulty: 2
        },
        {
          id: 3,
          title: "What's the difference between .call and .apply?",
          difficulty: 3
        },
        {
          id: 4,
          title: "When would you use document.write()",
          difficulty: 2
        }
      ]
    };
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
    const id = this.$route.params.id;
    console.log(id);
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  border-radius: 3px;
}
</style>
