<template>
  <v-flex class="mt-4 mb-3">
    <v-dialog max-width="400px" v-model="dialog">
      <v-card v-if="isLogin">
        <v-card-title class="d-flex justify-content-center text-center">
          <h1 class="text-uppercase">SIGN IN</h1>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Choose a username"
              required
            ></v-text-field>

            <v-text-field
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              label="Choose password"
              hint="At least 8 characters"
              v-model="password"
              class="input-group--focused"
              @click:append="show = !show"
            ></v-text-field>

            <v-spacer></v-spacer>
            <div class="d-flex justify-content-center">
              <v-btn flat class="success mt-3">SIGN IN</v-btn>
            </div>
            <v-spacer></v-spacer>

            <div class="mt-3">
              <p>
                Don't have an account yet?
                <span
                  class="text-bold primary--text font-weight-bold join"

                  @click="isLogin=false"
                >Join the community!</span>
              </p>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
      <v-card v-else>
        <v-card-title class="d-flex justify-content-center">
          <h1 class="text-uppercase">SIGN UP</h1>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Choose a username"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="usernameRules"
              label="Enter email address"
              required
            ></v-text-field>

            <v-text-field
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              label="Choose password"
              hint="At least 8 characters"
              v-model="password"
              class="input-group--focused"
              @click:append="show = !show"
            ></v-text-field>
            <v-spacer></v-spacer>
            <div class="d-flex justify-content-center">
              <v-btn flat class="success mt-3">SIGN UP</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
import { Bus } from "../main";
export default {
  data() {
    return {
      dialog: false,
      show: false,
      username: "",
      password: "",
      isLogin: true,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
      usernameRules: [v => !!v || "Username is required"]
    };
  },
  created() {
    Bus.$on("openModal", isLogin => {
      this.dialog = true;
      if (isLogin) this.isLogin = true;
      else this.isLogin = false;
    });
  },
  watch: {
    dialog() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.join {
    cursor: pointer;
}
</style>