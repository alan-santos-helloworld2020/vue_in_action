<template>
  <div>
    <nav class="">
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo center">Onload</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cadastro">Cadastro</router-link></li>
          <li><router-link to="/clientes">Clientes</router-link></li>
          <li><router-link to="/sobre">Sobre</router-link></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
         <img src="../assets/fundoMenu.png" class="responsive-img" />
      </li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/cadastro">Cadastro</router-link></li>
      <li><router-link to="/clientes">Clientes</router-link></li>
      <li><router-link to="/sobre">Sobre</router-link></li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  name: "Navegador",
  data() {
    return {};
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
nav {
  background-color: #34495e;
}
</style>
