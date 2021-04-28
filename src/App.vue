<template>
<div id="app">
  <app-header v-bind:links="links"></app-header>
  <router-view />
</div>
</template>


<script>
export default {
  name:'App',
  components:{
  },
  data(){
    return {
      links:[
        'Home',
        'See All',
        'Add Task',
      ],
      tasks:[
        {name:'water', price:'3$', quantity:'5'},
        {name:'bread', price:'4$', quantity:'2'},
        {name:'butter', price:'8$', quantity:'3'},
      ]
    }
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
