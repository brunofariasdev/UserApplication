<template>
    <div id="defaultModal" tabindex="-1" aria-hidden="true"
        class="overflow-y-auto overflow-x-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center justify-center">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Adicione um Usuario
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="defaultModal" @click="$emit('close')">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6 custom-overflow">
                    <div class="mb-2">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Nome
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Nome" v-model="user.name">
                    </div>
                    <div class="mb-2">
                        <label class="block text-white text-sm font-bold mb-2" for="password">
                            Senha
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password" placeholder="******************" v-model="user.password">
                        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                    </div>
                    <div class="mb-2">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email" v-model="user.email">
                    </div>
                    <div class="mb-2">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Telefone
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Telefone" v-model="user.phone" v-mask="'(##) #####-####'">
                    </div>
                    <div class="mb-2">
                        <label class="block text-white text-sm font-bold mb-2" mask="###.###.###-##" for="username">
                            CPF
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="CPF" v-model="user.cpf" v-mask="'###.###.###-##'">
                    </div>
                    <div class="mb-2">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Cidade
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Cidade" v-model="user.city">
                    </div>
                    <div class="mb-2">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Estado
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Estado" v-model="user.state">
                    </div>
                    <div>
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            CEP
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="CEP" v-mask="'#####-###'" v-model="user.cep">
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="defaultModal" type="button" @click="CreateUser"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Adicionar</button>
                    <button data-modal-toggle="defaultModal" type="button" @click="$emit('close')"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import { ref } from 'vue'
import { useStore } from 'vuex';

export default {
    setup(props, { emit }) {
        const store = useStore();
        const user = ref({
            name: "",
            password: "",
            phone: "",
            cpf: "",
            city: "",
            state: "",
            cep: "",
            email: "",
        });


        const CreateUser = () => {
            store.dispatch('CreateUser', user.value);
            store.commit('CREATE_USER', user.value);
            emit('close')
        }
        return { CreateUser, user, }
    }


}
</script>


<style>
.custom-overflow {
    overflow-y: scroll;
    height: 59vh;
}
</style>