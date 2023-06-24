<template>
    <NavBar />
  <div class="todocontainer">
  todos
      
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
.todocontainer {
  width: 400px;
  margin: auto;


}
.title {
  color: rgb(64, 185, 86);
  text-align: center;
  justify-content: center;
  padding: 8px;
}
.heading {
  background-color: rgba(10, 16, 58, 0.887);
  border-radius: 5px;

}
</style>