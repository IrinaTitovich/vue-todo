<template>
    <div class="all-tasks">
        <div class="all-tasks__container" v-if='auth' >
            <router-link  v-bind:to="'/task/'+task.name.toLowerCase().split(' ').join('')" class="all-tasks__task" v-for='(task,idx) in tasks' v-bind:key="task.name">
                <span class="all-tasks__task-name">{{idx+1}}. {{task.name}}</span>
                <span>-</span>
                <span>{{task.price}}</span>
            </router-link>
        </div>
        <div class="all-tasks__container" v-else>
            <span>Сначала нужно войти</span>

        </div>
        
    </div>

</template>


<script>

export default {
    props:['tasks','auth']
}
</script>

<style>
.all-tasks {
  background-color: #eee;
  height: 90vh;
}
.all-tasks__container {
  width: 40vw;
  margin: auto;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
}
.all-tasks__task{
    display: flex;
    justify-content: space-between;


    font-size: 1.5rem;
    padding: 0.5rem 0;
    border-left: 3px solid rgba(37, 27, 189,0) ;
    border-bottom: 1px solid #ccc;
    margin: 0.5rem 0;

    text-decoration: none;
    color: #333;

    transition: .3s;
}
.all-tasks__task:hover{
    color: rgb(37, 27, 189);
    border-left: 3px solid rgb(37, 27, 189);
    background-color: rgba(253, 253, 253, 0.5);
}
</style>