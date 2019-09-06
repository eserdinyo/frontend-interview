<template>
  <div class="admin">
    <div id="wrapper">
      <!-- LEFT SIDEBAR -->
      <Navbar />
      <!-- END LEFT SIDEBAR -->
      <!-- MAIN -->
      <!-- MAIN CONTENT -->
      <div class="container">
        <v-layout v-if="isLoading" row justify-center>
          <v-progress-circular :size="50" color="success" indeterminate></v-progress-circular>
        </v-layout>
        <div v-else class="row">
          <div class="col-md-12">
            <!-- BASIC TABLE -->
            <v-container class="my-3">
              <v-layout class="d-block mx-auto" style="max-width: 900px">
                <p class="title ma-0 mb-5">{{question.title}}</p>

                <div v-html="question.detail" />
              </v-layout>
            </v-container>
            <!-- END BASIC TABLE -->
          </div>
        </div>
      </div>
      <!-- END MAIN CONTENT -->
    </div>
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
    //   question: {},
      isLoading: false
    };
  },
  components: {
    Navbar
  },
  methods: {
    ...mapActions(["fetchSingleQuestion"])
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

<style lang="scss"  scoped>
.admin {
  margin-top: 100px;
}
</style>
