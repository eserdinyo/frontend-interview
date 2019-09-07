<template>
  <div class="hero">
    <p class="display-3" :class="{'display-1': $vuetify.breakpoint.xs}">get ready for next <br>  <strong class="deep-orange--text text--darken-1">frontend interview</strong> </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  height: 68vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/img/hero.jpg");
  background-size: cover;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
  
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    text-align: center;
  }
}
</style>