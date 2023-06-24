<template>
    <NavBar />

  <div class="containe bg-gray-900 text-white">
  <DashBoard />
      
  </div>
</template>

<script>
import DashBoard from './components/DashBoard.vue'
import NavBar from './components/NavBar.vue'
export default {
  components: {
            NavBar,
            DashBoard,
      
  },

}
</script>

<style scoped>
.containe {
margin-top: 50px;
width: auto;
text-align: center;
justify-content: center;
align-items: center;
}
</style>