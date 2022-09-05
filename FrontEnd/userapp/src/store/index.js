import { createStore } from 'vuex'
import EmployeeService from '@/services/index'

export default createStore({
  state: {
    user: null,
    userItems: [],
  },
  getters: {
  },
  mutations: {
    UPDATE_USER_ITEMS(state, payload) {
      state.userItems = payload;
    },
  },
  actions: {
    GetUsers() {
      EmployeeService.GetAllUsers().then((res) => {
        this.state.userItems = res.data;
      })
    }
  },
  modules: {
  }
})
