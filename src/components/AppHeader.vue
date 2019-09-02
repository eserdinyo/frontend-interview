<template>
  <nav>
    <v-toolbar flat app color="#1F354D">
      <v-toolbar-title class="text-uppercase white--text">
        <v-hover v-slot:default="{ hover }">
          <v-btn flat dark to="/" active-class>
            <span class="font-weight-light">Frontend</span>
            <span>Interview</span>
          </v-btn>
        </v-hover>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2 ba-2" dark outline>Login</v-btn>
      <v-btn class="ma-2" depressed dark color="#E53935">Sign Up</v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="scss" scoped>




</style>