<template>
     <NavBar /> 

  <div class="containe text-white">
    <RouterView />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {
          NavBar,  
           
      
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