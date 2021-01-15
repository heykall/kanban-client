<template>
   <!-- Landing Page -->
  <div id="landing-page">
    <div class="container d-flex justify-content-center">
      <div style="position: absolute; top: 25%;">
        <h1 class="mb-6" style="color: cornsilk;">KanBan (看板)</h1>
        <h3 class="mb-5">
        <em>The Right Way to Organize Your Task</em>
      </h3>
      </div>
      <button id="start-button" @click="$emit('login', 'login-page')" style= "position: absolute; top: 50%;" class="btn btn-outline-white waves-effect btn-sm" >Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  
}
</script>

<style>

</style>