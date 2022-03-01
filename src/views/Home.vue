<template>
  <div class="row">
    <div class="col s12 center">
      <img class="responsive-img" src="../assets/fundoHome.png " alt="" />
      <h5 class="center">VueJS em Ação</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}
.row {
  min-height: 84vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
img {
  width: 25%;
  animation-name: aparecer;
  animation-duration: 10s;
}

@keyframes aparecer {
  from{
    opacity: 0.1;
    width: 0%;
  }
  to{
    opacity: 1;
    width: 25%;
  }

  
}
@media screen and (max-width: 500px) {
  img {
    width: 50%;
  }
}
</style>
