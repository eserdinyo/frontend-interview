<template>
  <div class="home">
    <app-hero />
    <v-container class="my-5">
      <v-layout row wrap>
        <Tech v-for="tech in techs" :key="tech.name" :tech="tech" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Tech from "../components/Tech";
import AppHero from "../components/AppHero";
export default {
  components: { Tech, AppHero },
  data() {
    return {
      techs: [
        {
          name: "Vue.JS",
          img: require("../assets/img/vue.png"),
          route: "/vuejs"
        },
        {
          name: "React",
          img: require("../assets/img/react.png"),
          route: "/vuejs"
        },
        {
          name: "JavaScript",
          img: require("../assets/img/js.png"),
          route: "/vuejs"
        },
        {
          name: "CSS",
          img: require("../assets/img/css.png"),
          route: "/vuejs"
        },
        {
          name: "HTML",
          img: require("../assets/img/html.png"),
          route: "/vuejs"
        }
      ]
    };
  }
};
</script>
