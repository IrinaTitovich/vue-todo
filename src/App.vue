<template>
<div id="app">
  <app-header></app-header>
  <router-view  />
</div>
</template>


<script>
export default {
  name:'App',
  created(){
    setTimeout(()=> { this.$store.dispatch('loadData')},600)
  }
}
</script>

<style>
*{
    margin: 0;
    box-sizing: border-box;
}
#app{
  margin: 0;
}
</style>
