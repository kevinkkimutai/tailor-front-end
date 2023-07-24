<template lang="">
<div class="p-1 sm:ml-52 ">
  <div class="p-1 border-gray-200 border-dashed rounded-sm dark:border-gray-700 mt-1"  v-for="design in designs" :key="design.id">

<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img :src="getImageUrl(design.image)" alt="Design Image" class="card-img-top">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ design.name }}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ design.description }}</p>
        <p class="card-text">Price: ${{ design.price }}</p>
    </div>
</a>
  
</div>
</div>

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
      axios.get('design/16')
        .then(response => {
          this.designs = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getImageUrl(image) {
      
  const imageUrl = image ? `http://localhost:8000/storage/${image}` : '';
  console.log('Image URL:', imageUrl);
  return imageUrl;
}

  }
};
  </script>
  
  <style>
  /* Add CSS styles for your design card here */
  </style>
  