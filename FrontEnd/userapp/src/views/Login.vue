<template>
  <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div class="flex-1  max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <div class="flex flex-col overflow-y-auto md:flex-row h-70">
        <div class="h-32 md:h-auto md:w-1/2">
          <img aria-hidden="true" class="object-cover w-full h-full"
            src="https://cdn.pixabay.com/photo/2021/01/23/18/40/child-5943325_960_720.jpg" alt="Office" />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Login
            </h1>
            <div v-if="errorLogin"
              class="bg-red-400 border-t-4 border-teal rounded-b text-teal-darkest px-4 py-3 shadow-md my-2"
              role="alert">
              <div class="flex">
                <i class="fas fa-exclamation-circle text-white px-3 text-center pt-1 "></i>
                <div>
                  <p class="font-bold text-white text-4x1">Senha ou Email incorreto !</p>
                </div>
              </div>
            </div>
            <label class="block text-sm">
              <span class="text-gray-700 dark:text-gray-400">Email</span>
              <input v-model="model.email"
                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="janesnider@email.com" />
              <hr class="my-1" />
            </label>
            <label class="block mt-4 text-sm">
              <span class="text-gray-700 dark:text-gray-400">Senha</span>
              <input v-model="model.password"
                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="***************" type="password" />
            </label>
            <hr class="my-1" />
            <a @click="doLogin()"
              class="flex flex-row justify-center items-center cursor-pointer block w-full px-4 py-2 mt-4  font-medium leading-5 text-center text-white text-2x1 transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple text-">
              <div v-show="loading" id="spinner"></div>
              ENTRAR
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeService from '@/services/index'
import { ref } from 'vue'
import { useStore } from 'vuex';
import router from '@/router';


export default {
  setup() {
    const store = useStore();
    const model = ref({
      email: "",
      password: "",
    });

    const errorLogin = ref();
    const loading = ref();

    const doLogin = () => {
      EmployeeService.Login(model.value).then((res) => {
        if (res.data.isAuth) {
          store.dispatch('GetUsers');
          localStorage.setItem('logged', JSON.stringify(true));
          router.push({ name: "home" })
        } else {
          errorLogin.value = true
        }
      })
    }
    return { doLogin, model, errorLogin }
  }


}
</script>
