<template lang="">
    <div class="p-1 sm:ml-52 ">
  <div class="p-1 border-gray-200 border-dashed rounded-sm dark:border-gray-700 mt-1">

<!-- breadcrumb -->
<nav class="text-sm font-semibold mb-1" aria-label="Breadcrumb">
             <ol class="list-none p-1 inline-flex">
               <li class="flex i text-blue-400">
                 <a href="/Dashboard" class="text-gray-500">Dashboard</a>
                 <svg class="fill-current w-4 h-4 mx-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
               </li>
               <li class="flex items-center">
                 <a href="/allexpense" class="text-gray-600">Expense</a>
               </li>
             </ol>
           </nav> 
           <!-- breadcrumb end -->

   <div class="lg:flex justify-between items-center mb-1 ms-2">
             <p class="text-2xl font-semibold mb-2 lg:mb-0 dark:text-white">List of all Expenses . . .</p> 
           </div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
   <div class="flex w-full items-center justify-between py-2 bg-white dark:bg-gray-800">
       <div>
       <!-- Notification popup -->
    <div v-if="successMessage"  class="flex items-center p-1 ms-3 border border-green-300 text-sm text-green-800 rounded-sm bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Success alert!</span>  {{ successMessage }}
  </div>
</div>
       </div>
       <label for="table-search" class="sr-only">Search</label>
       <div class="relative me-5">
           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg class="w-5 h-5 text-green-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
           </div>
           <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Expense">
       </div>
   </div>
   
   <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       <thead class="text-s text-gray-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
           <tr>
               <th scope="col" class="p-4">
               No.
               </th>
               <th scope="col" class="px-10 py-3">
                   Category
               </th>
               <th scope="col" class="px-6 py-3">
                   Description
               </th>
               <th scope="col" class="px-6 py-3">
                   Amount
               </th>
               <th scope="col" class="px-6 py-3">
                   Action
               </th>
               <th scope="col" class="px-6 py-3">
                   Bin
               </th>
           </tr>
       </thead>
       <!-- dapp data from expense tavle -->
       <tbody>
           <tr v-for="(expense, index) in expense" :key="expense.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <td class="w-4 p-4 text-black font-bold">
                  {{index + 1}}.
               </td>
               <td class="px-8 py-4">
                   <div class="flex items-center font-bold">
                      {{ expense.category }}
                   </div>
               </td>
               <td class="px-6 py-2">
                   <div class="flex items-center font-bold">
                        {{ expense.description }}
                   </div>
               </td>
               <td class="px-6 py-2">
                   <div class="flex items-center font-bold">
                       <div class="amount"></div> <span class="me-1 text-black">Ksh: </span> {{ expense.amount }}
                   </div>
               </td>
               <td class="px-6 py-2">
                   <!-- Modal toggle --> 
                   <a href="#" type="button"  @click="openEditModal(expense)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit exp</a>
               </td>
               <td class="px-6 py-2">
                <a href="#" type="button"  @click="openDeleteModal(expense)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <svg class="w-6 h-6 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
  </svg>
                </a>
               </td>
           </tr>
       </tbody>
   </table>
   </div>
  <!-- The dialog-modal component -->
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-black">
    <div class="relative w-full max-w-xl max-h-full">
      <!-- Modal content -->
      <form class="relative bg-white rounded-lg shadow dark:bg-gray-700" @submit.prevent="handleEdit">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-2 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Edit Expense</h3>
          <button
            type="button"
            class="text-red-600 bg-transparent hover:bg-gray-200 hover:text-red-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="hideModal"
          >
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <div class="grid grid-cols-6 gap-6">
            <!-- Add input fields for editing -->
            <div class="col-span-6 sm:col-span-3">
              <label for="category" class="block text-sm font-medium text-gray-700 dark:text-white">
                Expense Category
              </label>
              <input
                type="text"
                category="category"
                v-model="selectedExpense.category"
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="amount" class="block text-sm font-medium text-gray-700 dark:text-white">
                Amount
              </label>
              <input
                type="number"
                category="amount"
                v-model="selectedExpense.amount"
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div class="col-span-6">
              <label for="description" class="block text-sm font-medium text-gray-700 dark:text-white">
                Description
              </label>
              <textarea
                category="description"
                v-model="selectedExpense.description"
                rows="3"
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="flex justify-end p-2">
          <button
            type="button"
            @click="hideModal"
            class="px-4 py-2 mr-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            Save Changes
          </button>

        </div>
      </form>
    </div>
  </div>


<!-- The dialog-modal component for deleting expense -->
<div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-black">
      <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-2 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Delete Expense</h3>
            <button
              type="button"
              class="text-red-600 bg-transparent hover:bg-gray-200 hover:text-red-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="hideDeleteModal"
            >
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6">
            <p class="text-sm text-gray-700 dark:text-white">Are you sure you want to delete <span class="text-red-600 underline uppercase font-bold">{{ selectedExpense.category }}</span> expense?</p>
          </div>
          <!-- Modal footer -->
          <div class="flex justify-end p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              @click="deleteExpense"
              class="px-4 py-2 mr-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-red-500 focus:border-red-500"
            >
              Delete
            </button>
            <button
              type="button"
              @click="hideDeleteModal"
              class="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
    </div>
</template>
<script type="module">
import axios from 'axios';

export default {
   category: 'ExpensePage',
   data() {
    return {
      expense: [],
      showModal: false,
      selectedExpense: {},
      showDeleteModal: false, 
      error: '',
      successMessage: '',
    };
  },
  methods: {
    async handleExpense() {
      try {
        // Make a GET request to the expense endpoint
        const response = await axios.get('expenses');
        this.expense = response.data;
     
      } catch (error) {
        this.error = 'An error incured! Try again.';
      }
    },

    openEditModal(expense) {
      // Make a copy of the expense to avoid modifying the original data
      this.selectedExpense = {...expense };

      // Check if a property is missing and set it to an empty string if it is
      if (!this.selectedExpense.category) {
        this.selectedExpense.category = '';
      }
      if (!this.selectedExpense.amount) {
        this.selectedExpense.amount = '';
      }
      if (!this.selectedExpense.description) {
        this.selectedExpense.description = '';
      }

      this.showModal = true;
    },

    hideModal() {
      this.showModal = false;
    },

    // edit function
    async handleEdit() {
  try {
    if (!this.selectedExpense.category) {
      console.error('Expense category is required.');
      return;
    }
    if (!this.selectedExpense.amount) {
      console.error('Expense amount is required.');
      return;
    }
    if (!this.selectedExpense.description) {
      console.error('Expense description is required.');
      return;
    }

    const data = {
      category: this.selectedExpense.category,
      // Use Number() instead of parseInt()
      amount: Number(this.selectedExpense.amount), 
      description: this.selectedExpense.description,
      update: true,
      // Use Number() instead of parseInt()
      id: Number(this.selectedExpense.id), 
    };

    if (this.selectedImageFile) {
      data.image = this.selectedImageFile;
    }

    await axios.put(`expense/${this.selectedExpense.id}`, data);

    // Show the notification
    this.showNotification('Expense updated successfully'); 
    // Refresh expenses list after successful update
    this.handleExpense(); 
    this.hideModal();
  } catch (error) {
    console.error('Error updating expense:', error);
  }
},
showNotification(message) {
      this.successMessage = message;
      setTimeout(() => {
        this.successMessage = '';
      }, 3000); // Clear the message after 3 seconds
    },


     // Function to open the delete confirmation modal
     openDeleteModal(expense) {
      this.selectedExpense = { ...expense };
      this.showDeleteModal = true;
    },

    // Function to close the delete confirmation modal
    hideDeleteModal() {
      this.showDeleteModal = false;
    },
    // Function to delete the selected expense
    async deleteExpense() {
      try {
        await axios.delete(`expense/${this.selectedExpense.id}`);
        this.showNotification('Expense deleted successfully');
        // Refresh expenses list after successful delete
        this.handleExpense(); 
        this.hideDeleteModal();
      } catch (error) {
        console.error('Error deleting expense:', error);
      }
    },

  },
  mounted() {
    this.handleExpense();
  }
}
</script>
<style lang="">

</style>