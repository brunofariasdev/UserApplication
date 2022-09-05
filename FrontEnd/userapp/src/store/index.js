import { createStore } from 'vuex'
import EmployeeService from '@/services/index'

export default createStore({
  state: {
    user: null,
    userItems: [],
  },
  getters: {
    GetUser: (state) => (id) => {
      return state.userItems.find(todo => todo.id === id)
    }
  },
  mutations: {
    UPDATE_USER_ITEMS(state, payload) {
      state.userItems = payload;
    },
    DELETE_USER(state, payload) {
      state.userItems = state.userItems.filter(user => user.id != payload);
    },
    CREATE_USER(state, payload) {
      state.userItems.push(payload)
    },

  },
  actions: {
    GetUsers() {
      EmployeeService.GetAllUsers().then((res) => {
        this.state.userItems = res.data;
      })
    },

    CreateUser({ commit }, user) {
      EmployeeService.CreateUser(user).then((res) => {
        console.log(res);
      })
    },

    DeleteUser({ commit }, id) {
      EmployeeService.DeleteUser(id).then(() => {
        commit("DELETE_USER", id);
      });
    }
  },
  modules: {
  }
})
