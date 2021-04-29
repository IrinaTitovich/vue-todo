<template>
    <div class="card">
        <div class="card__container" >

                <p class="card__element"> {{task.name}}</p>
                <hr>
                <p class="card__element">{{task.price}}</p>

        </div>
    </div>

</template>


<script>

export default {
    props:['tasks'],
    data(){
        return {
            task:{
                name:'',
                price:''
            }
        }
    },
    created(){
        const routeName = this.$route.params.name.toString()
        console.log(routeName)
        const task = this.tasks.filter(t=>t.name.toLowerCase() === routeName)[0]
        this.task.name = task.name
        this.task.price = task.price
    }
}
</script>

<style>
.card {
  height: 70vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
.card__container {
  
  width: 40%;
  height: 80%;
  margin: 0 auto;
  padding-top: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #eee;
  border:1px solid #ccc
}
.card__element{
    font-size: 2rem;
    border: 1px solid #bbb;
    padding: 1em;
    background-color: #fff;
}

</style>