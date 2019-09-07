<template>
  <v-app class="app">
    <AppHeader />
    <v-content>
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  metaInfo: {
    meta: [
      {
        name: "description",
        content: "Get ready for next frontend interview." // eslint-disable-line
      },
      {
        name: "keywords",
        content: "frontend, interview, question, react, angular, vue"
      }
    ]
  },
  components: {
    AppHeader
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
::selection {
  background-color: rgba(244, 218, 18, 0.637);
}
.application--wrap {
  /* background-color: #191818; */
}

.ql-syntax {
  border: 1px solid #23251f;
  border-radius: 3px;
  padding: 20px;
}
.page-enter-active {
  animation: slide-in 0.2s ease-out forwards;
}
.page-leave-active {
  animation: slide-out 0.2s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}
</style>
