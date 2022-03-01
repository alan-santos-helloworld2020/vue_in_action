<template>
  <div id="row">
    <div class="col s12 l8 pull-l2">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title center">Sobre</span>
          <p>* VueJS em ação</p>
          <p>* Single-page</p>
          <p>* Gerenciamento de estado com Vuex</p>
          <p>* Validação de campos com Vuelidate</p>
          <p>* Formatação de campos com Mask</p>
          <p>* Gerenciamento de rotas com Vue-router</p>
          <p>* Material-icons</p>
          <p>* Materialize-css</p>
          <p>* Sweetalert</p>
          <p>* Responsividade</p>
        </div>
        <div class="card-action">
          <router-link to="/">
            <i class="material-icons">home</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#row {
  height: 92vh !important;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  background: rgb(2,0,36);
background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(201,235,214,1) 100%, rgba(0,212,255,1) 100%);
}
</style>
