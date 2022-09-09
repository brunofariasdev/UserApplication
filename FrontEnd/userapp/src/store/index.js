import { createStore } from 'vuex'
import EmployeeService from '@/services/index'
import router from '@/router'

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
    SET_USER(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    GetUsers() {
      EmployeeService.GetAllUsers().then((res) => {
        this.state.userItems = res.data;
      })
    },
    Logoff() {
      localStorage.clear()
      router.push({ name: "login" })
    },
    CreateUser({ commit }, user) {
      EmployeeService.CreateUser(user).then((res) => {
      })
    },

    DeleteUser({ commit }, id) {
      EmployeeService.DeleteUser(id).then(() => {
        commit("DELETE_USER", id);
      });
    },

    UpdateUser({ commit }, id) {
      EmployeeService.UpdateUser(id).then(() => {
      });
    }
  },
  modules: {
  }
})
