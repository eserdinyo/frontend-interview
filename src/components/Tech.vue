<template>
  <v-flex class="mb-5" xs6 sm6 md4 lg3>
    <v-card class="tech" flat style="background: none" :to="`/questions/${getRoute(tech.name)}`">
      <v-img v-if="true" height="150px" contain :src="tech.img"></v-img>

      <v-card-text
        class="d-flex justify-center font-weight-bold text-uppercase subtitle-2 mt-3 black--text"
      >{{tech.name}}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    tech: {
      type: Object,
      required: true
    }
  },
  methods: {
    getRoute(route) {
      return route
        .toString()
        .toLowerCase()
        .replace(".", "");
    }
  }
};
</script>

<style lang="scss" scoped>

.tech {
  transition: all .2s;
  border: 1px solid transparent;
  padding: 20px;
}
.tech:hover {
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 1);
}
</style>