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
                 <a href="/alldesigns" class="text-gray-200">All Designs</a>
               </li>
             </ol>
           </nav> 
           <!-- breadcrumb end -->

   <div class="lg:flex justify-between items-center mb-3 ms-2">
             <p class="text-2xl font-semibold dark:text-gray-200 mb-2 lg:mb-0">List of All  Designs . . .</p> 
           </div>

<!-- product section -->
<div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
  <!-- card -->
  <div class="bg-white g-1 mb-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="design in designs" :key="design.id">
    <a href="#" class="items-center">
      <img class="p-8 rounded-t-lg max-h-80" :src="getImageUrl(design.image)" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
        <!-- Add your SVG icons here -->
        <!-- ... -->
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
      </div>
    </div>
  </div>
</div>



 





</div>
</div>


<!-- end of card -->
 </template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      designs: []
    };
  },
  mounted() {
    this.fetchDesigns();
  },
  methods: {
    fetchDesigns() {
      axios.get('designs')
        .then(response => {
          this.designs = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getImageUrl(image) {
      return image ? `http://localhost:8000/storage/${image.replace('public/', '')}` : '';
    }
  }
};
</script>
  
  <style>
  /* Add CSS styles for your design card here */
  </style>
  