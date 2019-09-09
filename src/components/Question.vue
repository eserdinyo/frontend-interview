<template>
  <div class="mb-3 py-4 px-4 question" :class="`border-${diffClass(question.difficulty)}`">
    <router-link
      :to="{name: 'question', params:{slug: question.slug}, query:{tech: question.tech}}"
      class="primary--text question__title"
    >{{ question.title }}</router-link>
    <v-chip
      class="question__chip"
      small
      :class="`${diffClass(question.difficulty)} white--text my-2 caption`"
    >{{ diffClass(question.difficulty) }}</v-chip>

    <div class="user" small flat color="grey">
      <v-icon color="grey" small>person</v-icon>
      <span color="grey" class="caption text-lowercase">{{question.username}}</span>
    </div>
  </div>
  <!-- <v-card
    class="mb-3 py-2"
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
            <v-icon color="grey" small>person</v-icon>
            <span color="grey" class="caption text-lowercase">{{question.username}}</span>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-card>-->
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
.question {
  border: 1px solid #555;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.pl0 {
  padding-left: 0;
}
.user {
  display: flex;
  position: absolute;
  right: 20px;
  bottom: 5%;
  color: grey;

  span {
    margin-left: 2px;
  }

  .v-icon {
    font-size: 14px !important;
    margin-right: 2px;
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
  border: 1px solid #ccc;

  border-left: 3px solid #3cd1c2;

  border-radius: 5px;
}

.border-medium {
  border: 1px solid #ccc;
  border-left: 3px solid #ffaa2c;
  border-radius: 5px;
}

.border-hard {
  border: 1px solid #ccc;

  border-radius: 5px;

  border-left: 3px solid #f83e70;
}
</style>