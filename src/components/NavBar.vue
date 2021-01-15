<template>
  <!-- Navbar -->
  <header id="nav">
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <div class="container-fluid">
          <a class="navbar-brand" href="">
            <img src="../assets/nav/note.png" width="30" height="30" class="d-inline-block align-top" alt="">
            KanBan (看板)
          </a>
          <div id="logout">
            <button type="button" class="btn btn-outline-danger waves-effect btn-sm " @click="logout">Logout</button>
          </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      localStorage.removeItem('access_token')
      this.$emit('changePage', 'login-page')
    }
  }
}
</script>

<style>

</style>