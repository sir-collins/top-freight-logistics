<template>
  <div id="app">
    
    <top-freight-logistics />
  </div>
</template>

<script>
import TopFreightLogistics from './components/TopFreightLogistics.vue'

export default {
  name: 'App', 
  components: {   
    TopFreightLogistics
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
