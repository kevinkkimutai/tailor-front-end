<template>
<div  class="topset">
  <NavBar /> 

<div class="containe tops ">
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
.topset {
  background: transparent;
  background: cover;
 opacity: 7;
}
</style>

