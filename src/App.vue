<template>
<div  class="topset dark ">
  <NavBar /> 

<div class="containe tops dark:bg-dark-900 ">
  <RouterView  />
</div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import axios from 'axios';
export default {
  components: {
          NavBar,  
           
  },
    data() {
    return {
        user: null
    }
  },
async created() {
    try {
      const response = await axios.get('user');
     
      this.$store.dispatch('user', response.data.user);
    } catch (error) {
      console.error(error);
      // handle error here
    }
  },

}
</script>

<style scoped>
.containe {
margin-top: 50px;
width: auto;
justify-content: center;
align-items: center;
}

</style>

