<template>
  <nav>
    <v-toolbar flat :class="{ navo :  routeName != 'home'}">
      <router-link class="logo" to="/">
        <span class="font-weight-light">Frontend</span>
        <span>Interview</span>
      </router-link>
      <!-- <v-btn class="ma-2 ba-2" dark outline @click="openModal(true)">Login</v-btn> -->
      <v-spacer></v-spacer>
      <div v-if="isLoggedIn">
        <v-btn
          v-if="currentUser.providerData[0].uid == '26261087'"
          class="ma-2 ba-2"
          dark
          outline
          to="/admin"
        >Admin</v-btn>
      </div>
      <!-- <v-btn v-if="false" class="ma-2 ba-2" dark outline @click="github">Login With Github</v-btn> -->

      <div class="logo" v-if="!isLoggedIn" @click="github">
        <i class="fa fa-github"></i>
      </div>
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
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      routeName: ""
    };
  },
  computed: {
    ...mapState(["isLoggedIn", "currentUser"])
  },
  methods: {
    ...mapMutations(["setIsLoggedIn", "setCurrentUser"]),
    ...mapActions(["addUser"]),
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
    },
    saveUserToDatabase() {
      this.addUser({
        uid: this.currentUser.providerData[0].uid,
        email: this.currentUser.providerData[0].email,
        name: this.currentUser.providerData[0].displayName
      });
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
      this.setCurrentUser(firebase.auth().currentUser);

      if (this.currentUser) {
        this.saveUserToDatabase();
      }
    });
  }
};
</script>



<style lang="scss" scoped>
.logo {
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

  i {
    font-size: 30px;
  }
}
nav {
  background: none !important;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 20px 0;
}

.navo {
  background-color: #191919 !important;
  box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.548) !important;
}
.custom-btn::before {
  color: transparent;
}

.custom-btn::after {
  color: transparent;
}
</style>