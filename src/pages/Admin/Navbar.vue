<template>
  <div id="sidebar-nav" class="sidebar">
    <h2 class="admin__title">ADMIN</h2>

    <div class="sidebar-scroll">
      <nav>
        <ul class="nav">
          <li>
            <router-link to="/admin">
              <i class="lnr lnr-home"></i>
              <span>Questions</span>
            </router-link>
          </li>
          <li>
            <router-link to="/users">
              <i class="lnr lnr-user"></i>
              <span>Users</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.admin {
  margin-top: 100px;

  &__title {
    text-align: center;
    color: #fff;
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
}

.nav li {
  margin-bottom: 10px;
}
</style>