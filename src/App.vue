<template>
  <div class="row">
    <Navegador />
    <router-view />
  </div>
</template>

<script>
import Navegador from "./components/Navegador.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navegador,
  },
};
</script>

<style>
body,html{
  height:100vh;
}
</style>
