<template>
  <v-flex class="mb-5" xs12 sm6 md4 lg3>
    <v-card flat style="background: none" :to="`/questions${tech.route}`">
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
  }
};
</script>

<style lang="scss" scoped>
</style>