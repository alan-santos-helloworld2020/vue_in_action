<template>
  <div id="modalEdit" class="modal">
    <div class="modal-content">
      <p class="center"><strong>Formulário para edição de clientes</strong></p>
      <form v-on:submit.prevent="editar()">
        <div class="input-field col s12">
          <i class="material-icons prefix">person</i>
          <input type="text" v-model="dados.nome" name="nome" id="nome" />
          <label class="active" for="nome">Nome</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">phone</i>
          <input
            type="tel"
            v-model="dados.telefone"
            name="telefone"
            id="telefone"
          />
          <label class="active" for="telefone">Telefone</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input type="email" v-model="dados.email" name="email" id="email" />
          <label class="active" for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">home</i>
          <input type="text" v-model="dados.cep" name="cep" id="cep" />
          <label class="active" for="cep">Cep</label>
        </div>
        <div class="col s12">
          <button type="submit" class="btn right modal-close">
            fechar
            <i class="material-icons right">close</i>
          </button>
        </div>
      </form>
    </div>
    <div class="modal-footer">
        <p class="center">onload</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import M from "materialize-css";
export default {
  data() {
    return {
       
    };
  },
  mounted() {
    M.AutoInit();
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {
      startingTop: "5%",
    });
  },
  computed: mapState({
    dados: (state) => state.dados
  }),
  methods: {
    editar() {
      
    },
  },
};
</script>

<style>
.modal{
    height: 80vh;

}
.modal-footer{
    height: 5vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
}
</style>
