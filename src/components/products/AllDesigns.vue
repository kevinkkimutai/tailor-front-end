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


 <div class="flex flex-wrap -mx-3 mb-4">
  
<!-- card -->
<div class="w-full xl:w-1/2 px-3" v-for="design in designs" :key="design.id">
  <p class="text-xl font-semibold mb-4"></p>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full pt-1 rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="getImageUrl(design.image)" alt="design image">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{design.name}}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{design.description}}</p>
        <div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{design.price}}</p>
    </div>
    </div>
   
</a>


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
  