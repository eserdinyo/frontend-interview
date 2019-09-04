<template>
  <nav>
    <v-toolbar flat :class="{ nav :  routeName != 'home'}">
      <v-toolbar-title class="text-uppercase white--text">
        <v-hover v-slot:default="{ hover }">
          <v-btn flat dark to="/" class="custom-btn title" active-class>
            <span class="font-weight-light">Frontend</span>
            <span>Interview</span>
          </v-btn>
        </v-hover>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn class="ma-2 ba-2" dark outline @click="openModal(true)">Login</v-btn> -->
      <v-btn v-if="!isLoggedIn" class="ma-2 ba-2" dark outline @click="github">Login With Github</v-btn>
      <v-btn v-else fab small style="border:none" class="ma-2 ba-2" dark outline @click="logout">
        <img style="border-radius: 50%" width="100%" :src="currentUser.photoURL" alt />
      </v-btn>
      <!-- <v-btn
        class="ma-2"
        depressed
        dark
        color="deep-orange darken-4"
        @click="openModal(false)"
      >Sign Up</v-btn>-->
    </v-toolbar>
    <v-flex class="mt-4 mb-3">
      <Popup />
    </v-flex>
  </nav>
</template>

<script>
import Popup from "./Popup";
import { Bus } from "../main";
import firebase, { firestore } from "firebase";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      routeName: "",
      currentUser: ""
    };
  },
  computed: {
    ...mapState(["isLoggedIn"])
  },
  methods: {
    ...mapMutations(["setIsLoggedIn"]),
    openModal(isLogin) {
      Bus.$emit("openModal", isLogin);
    },
    github() {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    },
    logout() {
      firebase.auth().signOut();
    }
  },
  components: {
    Popup
  },
  watch: {
    $route() {
      this.routeName = this.$route.name;
    }
  },
  created() {
    this.routeName = this.$route.name;

    firebase.auth().onAuthStateChanged(user => {
      this.setIsLoggedIn(!!user);
      console.log(firebase.auth().currentUser);
      this.currentUser = firebase.auth().currentUser;
    });
  }
};
</script>



<style lang="scss" scoped>
nav {
  background: none !important;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 20px 0;
}

.nav {
  background-color: #191919 !important;
}

.custom-btn::before {
  color: transparent;
}

.custom-btn::after {
  color: transparent;
}
</style>