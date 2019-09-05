<template>
  <div class="admin">
    <div id="wrapper">
      <!-- LEFT SIDEBAR -->
      <div id="sidebar-nav" class="sidebar">
              <h2 class="admin__title">ADMIN</h2>

        <div class="sidebar-scroll">

          <nav>
            <ul class="nav">
              <li>
                <a href="index.html" class>
                  <i class="lnr lnr-home"></i>
                  <span>Questions</span>
                </a>
              </li>
              <li>
                <a href="elements.html" class>
                  <i class="lnr lnr-user"></i>
                  <span>Users</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- END LEFT SIDEBAR -->
      <!-- MAIN -->
      <div class="main">
        <!-- MAIN CONTENT -->
        <div class="main-content">
          <div class="container-fluid">
            <v-layout v-if="isLoading" row justify-center>
              <v-progress-circular :size="50" color="success" indeterminate></v-progress-circular>
            </v-layout>
            <div v-else class="row">
              <div class="col-md-12">
                <!-- BASIC TABLE -->
                <div class="panel">
                  <div class="panel-heading">
                    <h3 class="panel-title">Basic Table</h3>
                  </div>
                  <div class="panel-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Tech</th>
                          <th>Difficulty</th>
                          <th>Username</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(que,idx) in allQuestions" :key='idx'>
                          <td>{{idx+1}}</td>
                          <td>{{que.title}}</td>
                          <td>{{que.tech}}</td>
                          <td>{{que.difficulty}}</td>
                          <td>@{{que.username}}</td>
                          <td>Active</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- END BASIC TABLE -->
              </div>
            </div>
          </div>
        </div>
        <!-- END MAIN CONTENT -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapState(["allQuestions"])
  },
  methods: {
    ...mapActions(["fetchAllQuestions"])
  },
  created() {
    this.isLoading = true;
    this.fetchAllQuestions().then(res => {
      this.isLoading = false;
    });
  }
};
</script>

<style lang="scss"  scoped>
.admin {
  margin-top: 100px;

  &__title {
      text-align: center;
      color: #fff;
      position: absolute;
      top: 2%;
      left: 50%;
      transform: translateX(-50%);
  }
}

.nav li {
  margin-bottom: 10px;
}
</style>
