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
             <p class="text-2xl font-semibold mb-2 lg:mb-0">List of all Expenses . . .</p> 
           </div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
   <div class="flex items-center justify-between py-2 bg-white dark:bg-gray-800">
       <div>
       
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
           </tr>
       </thead>
       <!-- dapp data from designs tavle -->
       <tbody>
           <tr v-for="(design, index) in designs" :key="design.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <td class="w-4 p-4 text-black font-bold">
                  {{index + 1}}
               </td>
               <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                   <div class="pl-3">
                       <div class="text-base font-semibold">{{ design.name }}</div>
                   </div>  
               </th>
               <td class="px-6 py-4">
                {{ design.description }}
               </td>
               <td><img  alt="Design Image"></td>
               <td class="px-6 py-4">
                   <div class="flex items-center">
                       <div class="amount"></div> <span class="me-1 text-black">Ksh: </span> {{ design.price }}
                   </div>
               </td>
               <td class="px-6 py-4">
                   <!-- Modal toggle -->
                   <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit exp</a>
               </td>
           </tr>
       </tbody>
   </table>
   <!-- Edit user modal -->
   <div id="editUserModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
       <div class="relative w-full max-w-2xl max-h-full">
           <!-- Modal content -->
           <form action="#" class="relative bg-white rounded-lg shadow dark:bg-gray-700">
               <!-- Modal header -->
               <div class="flex items-start justify-between p-2 border-b rounded-t dark:border-gray-600">
                   <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                       Edit Expense
                   </h3>
                   <button type="button" class="text-red-600 bg-transparent hover:bg-gray-200 hover:text-red-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
                       <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                   </button>
               </div>
               <!-- Modal body -->
               <div class="p-6 space-y-6">
                   <div class="grid grid-cols-6 gap-6">
                       <div class="col-span-6 sm:col-span-3">
                           <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                           <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required="">
                       </div>
                       <div class="col-span-6 sm:col-span-3">
                           <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                           <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required="">
                       </div>
                       <div class="col-span-6 sm:col-span-3">
                           <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                           <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required="">
                       </div>
                       <div class="col-span-6 sm:col-span-3">
                           <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                           <input type="number" name="phone-number" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required="">
                       </div>
                       <div class="col-span-6 sm:col-span-3">
                           <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                           <input type="text" name="department" id="department" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Development" required="">
                       </div>
                       <div class="col-span-6 sm:col-span-3">
                           <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                           <input type="number" name="company" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required="">
                       </div>
                       <div class="col-span-6 sm:col-span-3">
                           <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                           <input type="password" name="current-password" id="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="">
                       </div>
                       <div class="col-span-6 sm:col-span-3">
                           <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                           <input type="password" name="new-password" id="new-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="">
                       </div>
                   </div>
               </div>
               <!-- Modal footer -->
               <div class="flex flex-row-reverse items-center p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
               </div>
           </form>
       </div>
   </div>
</div>


  </div>
    </div>
</template>
<script type="module">
import axios from 'axios';

export default {
   name: 'ExpensePage',
   data() {
    return {
      designs: [],
      error: ''
    };
  },
  methods: {
    async handleExpense() {
      try {
        // Make a GET request to the designs endpoint
        const response = await axios.get('designs');
        this.designs = response.data;
        console.log(response.data)
      } catch (error) {
        this.error = 'An error incured! Try again.';
      }
    }
  },
  mounted() {
    this.handleExpense();
  }
}
</script>
<style lang="">
   
</style>