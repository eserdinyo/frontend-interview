<template>
  <div class="home">
    <app-hero />
    <v-container class="mt-5 tech">
      <v-layout row wrap>
        <Tech v-for="tech in techs" :key="tech.name" :tech="tech" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Tech from "../components/Tech";
import AppHero from "../components/AppHero";
import { enable as enableDarkMode } from "darkreader";
export default {
  components: { Tech, AppHero },
  data() {
    return {
      techs: [
        {
          name: "Vue.JS",
          img: require("../assets/img/vue.png")
        },
        {
          name: "React",
          img: require("../assets/img/react.png")
        },
        {
          name: "JavaScript",
          img: require("../assets/img/js.png")
        },
        {
          name: "CSS",
          img: require("../assets/img/css.png")
        },
        {
          name: "HTML",
          img: require("../assets/img/html.png")
        },
        {
          name: "Angular",
          img: require("../assets/img/angular.png")
        }
      ]
    };
  },
  created() {
    enableDarkMode({
      brightness: 100,
      contrast: 100,
      sepia: 10
    });
  }
};
</script>

<style lang="stylus" scoped></style>
