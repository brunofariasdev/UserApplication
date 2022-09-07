<template>
    <CreatedModal v-if="modalCreate" @close="swithCreate" />
    <EditModal v-if="modalEdit" :user="userSelect" @close="swithEdit" />
    <ModalConfirmed v-if="confirmeDelete" @close="swithConfirmed" @confirmed="deleteUser" />
    <div class="overflow-x-auto">
        <div
            class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Nome</th>
                                <th class="py-3 px-6 text-left">Email</th>
                                <th class="py-3 px-6 text-center">Ações</th>
                                <th class="py-3 px-6 text-center">
                                    <button
                                        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        type="button" data-modal-toggle="defaultModal" @click="swithCreate">
                                        Adicionar Usuario
                                    </button>
                                </th>

                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">

                            <tr class="border-b border-gray-200 hover:bg-gray-100"
                                v-for="(item, index) in store.state.userItems">
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ item.name }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center">
                                        <span>{{ item.email }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                                            @click="EditUser(item.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                                            @click="setUserDelete(item.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import CreatedModal from '@/components/CreatedModal.vue'
import EditModal from '@/components/EditModal.vue'
import ModalConfirmed from '@/components/ModalConfirmed.vue'

name: 'Home'
export default {
    setup() {
        const store = useStore();
        const modalCreate = ref(false);
        const modalEdit = ref(false);
        const confirmeDelete = ref(false);
        const userSelect = ref();
        const deleteUserId = ref();

        const start = () => {
            store.dispatch("GetUsers");
        };
        start();

        const setUserDelete = (id) => {
            deleteUserId.value = id;
            swithConfirmed();
        };

        const deleteUser = () => {
            store.dispatch('DeleteUser', deleteUserId.value)
            console.log(deleteUserId)
            swithConfirmed();
        }

        const SelectUser = (id) => {
            userSelect.value = store.getters.GetUser(id)
        }

        const EditUser = (id) => {
            SelectUser(id);
            swithEdit()
        }

        const swithEdit = () => {
            modalEdit.value = !modalEdit.value;
        }

        const swithCreate = () => {
            modalCreate.value = !modalCreate.value;
        }

        const swithConfirmed = () => {
            confirmeDelete.value = !confirmeDelete.value;
        }

        return { store, swithCreate, swithConfirmed, EditUser, modalEdit, confirmeDelete, setUserDelete, deleteUser, modalCreate, userSelect, swithEdit };
    },
    components: { CreatedModal, EditModal, ModalConfirmed, ModalConfirmed }
}
</script>