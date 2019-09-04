<template>
  <v-card
    flat
    :to="`/question/${question.slug}`"
    :class="`border-${diffClass(question.difficulty)}`"
  >
    <v-layout justify-space-between align-center class="pa-3">
      <v-flex xs12 md6>
        <v-btn flat class="custom-btn">
          <div class="primary--text">{{ question.title }}</div>
        </v-btn>
      </v-flex>

      <v-flex xs2 sm4 md2>
        <div class="right">
          <v-chip
            small
            :class="`${diffClass(question.difficulty)} white--text my-2 caption`"
          >{{ diffClass(question.difficulty) }}</v-chip>

          <div class="user" small flat color="grey">
            <v-icon color='grey' small>person</v-icon>
            <span color='grey' class="caption text-lowercase">eserdinyo</span>
          </div>
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
.user {
  display: flex;
  position: absolute;
  right: 1%;
  color: grey;

  span {
    margin-left: 2px;
  }
}
.v-chip.easy {
  background: #3cd1c2;
}

.v-chip.medium {
  background: #ffaa2c;
}

.v-chip.hard {
  background: #f83e70;
}

.custom-btn::before {
  color: transparent;
}

.border-easy {
  border-left: 3px solid #3cd1c2;
  border-radius: 2px;
}

.border-medium {
  border-left: 3px solid #ffaa2c;
  border-radius: 2px;
}

.border-hard {
  border-radius: 2px;

  border-left: 3px solid #f83e70;
}
</style>