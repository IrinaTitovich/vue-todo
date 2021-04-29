<template>
<div id="app">
  <app-header v-bind:links="links" v-bind:auth="auth" v-on:isAuth='changeAuthorize($event)'></app-header>
  <router-view v-bind:tasks="tasks" v-bind:auth="auth"/>
</div>
</template>


<script>
export default {
  name:'App',
  components:{
  },
  data(){
    return {
      auth:false,
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
  },
  methods:{
    changeAuthorize(ev){
      this.auth=ev
      localStorage.setItem("auth",this.auth.toString())
      console.log(localStorage.getItem("auth"))
    }
  },
  computed:{

  },
  mounted(){
    console.log("changeAuth")
    console.log(this.auth)
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
