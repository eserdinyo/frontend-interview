<template>
  <nav>
    <v-toolbar flat app color="#1F354D">
      <v-toolbar-title class="text-uppercase white--text">
        <v-hover v-slot:default="{ hover }">
          <v-btn flat dark to="/" class="custom-btn" active-class>
            <span class="font-weight-light">Frontend</span>
            <span>Interview</span>
          </v-btn>
        </v-hover>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2 ba-2" dark outline @click="openModal(true)">Login</v-btn>
      <v-btn class="ma-2" depressed dark color="#E53935" @click="openModal(false)">Sign Up</v-btn>
    </v-toolbar>
    <v-flex class="mt-4 mb-3">
      <Popup />
    </v-flex>
  </nav>
</template>

<script>
import Popup from "./Popup";
import { Bus } from "../main";

export default {
  data() {
    return {};
  },
  methods: {
    openModal(isLogin) {
      Bus.$emit("openModal", isLogin);
    }
  },
  components: {
    Popup
  }
};
</script>

<style lang="scss" scoped>
.custom-btn::before {
  color: transparent;
}

.custom-btn::after {
  color: transparent;
}
</style>