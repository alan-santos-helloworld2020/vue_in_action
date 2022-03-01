<template>
  <div class="row">
    <div class="col s12 l6 pull-l3">
      <p class="center"><strong>Cadastro de Clientes</strong></p>
      <form v-on:submit.prevent="salvar()">

        <div class="input-field col s12">
          <i class="material-icons prefix">person</i>
          <input type="text" class="validate" v-model="dados.nome" name="nome" id="nome" />
          <label for="nome">Nome</label>
        <span class="helper-text red-text" data-error="wrong" data-success="right" v-for="error of v$.dados.nome.$errors" :key="error.$uid">
        O campo nome é obrigatório
        </span>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">phone</i>
          <input
            type="tel"
            v-maska="'(##) #####-####'"
            v-model="dados.telefone"
            name="telefone"
            id="telefone"
          />
          <label for="telefone">Telefone</label>
          <span class="helper-text red-text" data-error="wrong" data-success="right" v-for="error of v$.dados.telefone.$errors" :key="error.$uid">
             O campo telefone é obrigatório
          </span>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input type="email" v-model="dados.email" name="email" id="email" />
          <label for="email">Email</label>
          <span class="helper-text red-text" data-error="wrong" data-success="right" v-for="error of v$.dados.email.$errors" :key="error.$uid">
             O campo email é obrigatório
          </span>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">home</i>
          <input 
          type="text"
          v-maska="'#####-###'"
          v-model="dados.cep"
          name="cep"
          id="cep"
          />
          <label for="cep">Cep</label>
          <span class="helper-text red-text" data-error="wrong" data-success="right" v-for="error of v$.dados.cep.$errors" :key="error.$uid">
             O campo cep é obrigatório
          </span>
        </div>

        <div class="col s12">
          <button type="submit" class="btn right">
            salvar
            <i class="material-icons right">send</i>
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, email, numeric } from "@vuelidate/validators";
import M from 'materialize-css';
import { maska } from 'maska'


export default {
  name: "Cadastro",
  directives:{maska},
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      dados: {
        id: 0,
        nome: null,
        telefone: null,
        email: null,
        cep: null,
      },
    };
  },
  mounted(){
    M.updateTextFields();
  },
  validations() {
    return {
      dados: {
        id: { numeric },
        nome: { required },
        telefone: { required },
        email: { required, email },
        cep: { required },
      },
    };
  },
  computed: mapState({
    banco: (state) => state.banco,
  }),
  methods: {
    async salvar() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      Swal.fire({
        title: "Sucesso!",
        icon: "success",
        footer: "Onload&copy",
        text: `Cliente ${this.dados.nome} cadastrado(a) com sucesso!`,
      }).then(() => {
        this.dados.id = this.banco.length + 1;
        this.banco.push(this.dados);
        console.table(this.banco);
        this.$router.push({ name: "Clientes" });
      });
    },
  },
};
</script>

<style scoped>
.row {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
</style>
