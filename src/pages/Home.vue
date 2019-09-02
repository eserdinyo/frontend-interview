<template>
  <div class="home">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex class="mb-5" xs12 sm6 md4 lg3 v-for="tech in techs" :key="tech.name">
          <v-card flat style="background: none" :to="`/questions${tech.route}`">
            <v-img v-if="true" height="150px" contain :src="tech.img"></v-img>

            <v-card-text
              class="d-flex justify-center font-weight-bold text-uppercase subtitle-2 mt-3 black--text"
            >{{tech.name}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
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
