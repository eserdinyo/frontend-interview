<template>
  <v-card flat>
    <v-layout justify-space-between align-center class="pa-3">
      <v-flex xs12 md6>
        <div to="/" class="primary--text">{{ question.title }}</div>
      </v-flex>

      <v-flex xs2 sm4 md2>
        <div class="right">
          <v-chip
            small
            :class="`${diffClass(question.difficulty)} white--text my-2 caption`"
          >{{ diffClass(question.difficulty) }}</v-chip>
        </div>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    diffClass(id) {
      switch (id) {
        case 1:
          return "easy";
          break;
        case 2:
          return "medium";
        case 3:
          return "hard";
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-chip.easy {
  background: #3cd1c2;
}

.v-chip.medium {
  background: #ffaa2c;
}

.v-chip.hard {
  background: #f83e70;
}
</style>