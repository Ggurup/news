<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    background-color: #42b883;
    color: white;
    display: flex;
    padding: 8px;
}
.header .router-link-exact-active{
    color: #354953;
}
.header a {
    color: white;
}

</style>