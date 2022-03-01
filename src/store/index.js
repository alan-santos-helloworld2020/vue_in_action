import { createStore } from 'vuex'

export default createStore({
  state: {
    dados: {
      id: 0,
      nome: null,
      telefone: null,
      email: null,
      cep: null
    },
    banco:[]
  },
  mutations: {
    editar(state,payload){
      state.dados = payload;
        
    }

  },
  actions: {
  },
  modules: {
  }
})
