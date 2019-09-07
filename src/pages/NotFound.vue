<template>
  <div class="error">
    <div class="error-title">
      404
    </div>
    <div class="error-gif"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error {
  background-color: #1B1C1C !important;
  height: 100%;
}

.error-title {
  font-size: 200px;
  color: #ccc;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.error-gif {
  background-color: transparent !important;
  margin-left: auto;
  margin-right: auto;
  height: 389px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 8;
  width: 100%;
  background: url("../assets/404.gif") no-repeat right bottom !important;
}
</style>