<template>
  <div class="p-1 sm:ml-52">
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
      <div
        class="bg-white g-1 mb-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        v-for="design in designs"
        :key="design.id"
      >
        <a href="#" class="flex items-center justify-center h-60">
          <img class="p-2 rounded-t-lg max-h-60" :src="getImageUrl(design.image)" alt="product image" />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ design.name }}</h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5 h-20">
            <!-- Add your SVG icons here -->
            <!-- ... -->
            <span class="text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:text-blue-300 ml-3">
              {{ design.description }}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ design.price }}</span>
            <button
            @click="openEditModal(design)"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- The dialog-modal component -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-black">
    <div class="relative w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <form class="relative bg-white rounded-lg shadow dark:bg-gray-700" @submit.prevent="handleEdit">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-2 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Edit Design</h3>
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
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-white">
                Design Name
              </label>
              <input
                type="text"
                name="name"
                v-model="selectedDesign.name"
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="price" class="block text-sm font-medium text-gray-700 dark:text-white">
                Price
              </label>
              <input
                type="number"
                name="price"
                v-model="selectedDesign.price"
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div class="col-span-6">
  <label for="image" class="block text-sm font-medium text-gray-700 dark:text-white">
    Photo
  </label>
  <input
    type="file"
    id="image"
    @change="handleImageChange"
    class="block w-full mt-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
  />
</div>

            <div class="col-span-6">
              <label for="description" class="block text-sm font-medium text-gray-700 dark:text-white">
                Description
              </label>
              <textarea
                name="description"
                v-model="selectedDesign.description"
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


  </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      designs: [],
      showModal: false,
      selectedDesign: {},
      selectedImageFile: null, 
      
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
    },
    openEditModal(design) {
      
  this.selectedImageFile = null;
  // Make a copy of the design to avoid modifying the original data
  this.selectedDesign = { ...design };

  // Ensure all required properties are present
  if (!this.selectedDesign.name) {
    this.selectedDesign.name = '';
  }
  if (!this.selectedDesign.price) {
    this.selectedDesign.price = 0;
  }
  if (!this.selectedDesign.description) {
    this.selectedDesign.description = '';
  }

  this.showModal = true;
},

    hideModal() {
      this.showModal = false;
    },
    
    // edit function
    async handleEdit() {
  try {
    const requestData = new FormData(); // Create a new FormData object

    requestData.append('name', this.selectedDesign.name);
    requestData.append('price', parseInt(this.selectedDesign.price));
    requestData.append('description', this.selectedDesign.description);
    
    // Check if an image file has been selected
    if (this.selectedImageFile) {
      requestData.append('image', this.selectedImageFile);
    }

    const response = await axios.put(`design/${this.selectedDesign.id}`, requestData, {
      headers: { 'Content-Type': 'multipart/form-data' }, // Set content type to 'multipart/form-data'
    });
    console.log(response.data.errors);

    console.log('Design updated successfully.');
    console.log(response);
    this.fetchDesigns(); // Refresh designs list after successful update
    this.hideModal();

  } catch (error) {
    console.error('Error updating design:', error);
  }
},










handleImageChange(event) {
  this.selectedImageFile = event.target.files[0]; // Store the selected File object
  const reader = new FileReader();

  reader.onloadend = () => {
    this.selectedDesign.image = reader.result; // Store the base64 representation of the image in selectedDesign
  };

  if (this.selectedImageFile) {
    reader.readAsDataURL(this.selectedImageFile);
  }
},





  },
};
</script>


<style scoped>

</style>