<template>
  <div class="row">
    <div class="col s12 l8 push-l2">
      <p class="center"><strong>Tabela de Clientes</strong></p>
      <table class="responsive-table centered">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>TELEFONE</th>
            <th>EMAIL</th>
            <th>CEP</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cl, index) in banco" :key="index">
            <td>{{ cl.id }}</td>
            <td>{{ cl.nome }}</td>
            <td>{{ cl.telefone }}</td>
            <td>{{ cl.email }}</td>
            <td>{{ cl.cep }}</td>
            <td>
              <button
                class="btn-floating small red tooltipped"
                data-position="top"
                data-tooltip="Click para deletar"
                @click="remover(index)"
              >
                <i class="material-icons">delete</i>
              </button>
              <button
                class="btn-floating small blue modal-trigger tooltipped"
                data-position="top"
                data-tooltip="Click para editar"
                href="#modalEdit"
                @click="editar(cl)"
              >
                <i class="material-icons">edit</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <FormEdicao></FormEdicao>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import FormEdicao from "../components/FormEdicao.vue";
export default {
  name: "Clientes",
  data() {
    return {};
  },
  mouted(){


  },
  computed: mapState({
    dados: (state) => state.dados,
    banco: (state) => state.banco
  }),
  methods: {
    remover(index) {
      if (confirm("Deseja realmente deletar?")) {
        this.banco.splice(index, 1);
        return this.banco;
      }
      return;
    },
    ...mapMutations({
      editar: "editar",
    }),
  },
  components: {
    FormEdicao: FormEdicao,
  },
};
</script>

<style scoped>
.btn-floating {
  margin: 5px;
}
</style>
