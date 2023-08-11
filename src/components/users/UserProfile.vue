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
                 <a href="/profile" class="text-gray-600">Profile</a>
               </li>
             </ol>
           </nav> 
           <!-- breadcrumb end -->

   <div class="lg:flex justify-between items-center mb-1 ms-2">
             <p class="text-2xl font-semibold mb-2 lg:mb-0 dark:text-white">User Profile Section . . .</p> 
           </div>

           <!-- profile display -->
           <h1 class="text-black text-center font-bold dark:text-gray-200">Your Profile</h1>
<div class="formbold-main-wrapper pt-5">


  <div class="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10" v-if="user">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{user.name}}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{user.email}}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Data</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>

 
</div>


  </div>
        </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {

  computed: {
      ...mapGetters(['user'])
   }
    
}
</script>
<style scoped>
.formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>