<template>
  <div class="admin">
    <div id="wrapper">
      <!-- LEFT SIDEBAR -->
      <Navbar />
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
                          <th>Show</th>
                          <th>Edit</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(que,idx) in allQuestions" :key="idx">
                          <td>{{idx+1}}</td>
                          <td>{{que.title}}</td>
                          <td>{{que.tech}}</td>
                          <td>{{que.difficulty}}</td>
                          <td>@{{que.username}}</td>
                          <td>
                            <router-link :to="{name: 'AdminQuestion', params:{slug: que.slug}, query:{tech: que.tech}}">
                              <i class="lnr lnr-eye"></i>
                            </router-link>
                          </td>
                          <td>
      
                            <router-link :to="{name: 'AdminQuestionEdit', params:{slug: que.slug}, query:{tech: que.tech}}">
                              <span class="lnr lnr-pencil"></span>
                            </router-link>
                          </td>
                          <td>
                            <div
                              v-if="que.status"
                              class="active"
                              @click="changeStatus(false,que.id)"
                            ></div>
                            <div v-else class="passive" @click="changeStatus(true,que.id)"></div>
                          </td>
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
import Navbar from "./Navbar";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapState(["allQuestions"])
  },
  components: {
    Navbar
  },
  methods: {
    ...mapActions(["fetchAllQuestions", "changeQuestionStatus"]),
    changeStatus(status, id) {
      this.changeQuestionStatus({
        status,
        id
      }).then(res => {
        this.isLoading = true;
        this.fetchAllQuestions().then(res => {
          this.isLoading = false;
        });
      });
    }
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
}

.active,
.passive {
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.active {
  background-color: green;
}

.passive {
  background-color: red;
}
</style>
