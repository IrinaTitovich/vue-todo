<template>
  <div class="workspace">
    <div class="workspace__container">
      <div class="workspace__addTask">
        <span>Добавить задание {{newTask}}</span>
        <label for="taskName">
          Название
          <input type="text" class="workspace__input" id='taskName' v-model="newTask.name"  placeholder="Название" />
        </label>
        <label for="taskPrice">
          Цена 
          <input type="text" class="workspace__input" id='taskPrice' v-model="newTask.price"  placeholder="Цена" />
        </label>
        <button class="submit" v-on:click='addTask()'>Добавить</button>
      </div>
      <div class="workspace__tasks-list">
        <div class="workspace__task task" v-bind:key="task.name" v-for="(task,idx) in tasks">
          <p class="task__name">
          <span class="task__number">{{idx +1}}.  </span>
          <span class="task__name"> {{task.name}}</span>
          </p>
          <div class="task__buttons">
            <button class="task__delete"  v-on:click='removeTask(task)'>&times;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props:['tasks'],
  data(){
    return {
      newTask:{name:'',price:0}
    }
  },
  methods:{
    addTask:function(){
      if (this.newTask.name.trim() 
      
      ){
        this.tasks.push({name:this.newTask.name,price:parseInt(this.newTask.price.toString())+'$'})
        this.newTask.name = ''
        this.newTask.price = 0
      }
      
    },
  removeTask(task){
    console.log(task.name)
    this.tasks=this.tasks.filter(t=>t.name!==task.name)
  }
  }
};
</script>

<style>
.workspace {
  background-color: #eee;
  height: 90vh;
}
.workspace__container {
  width: 90vw;
  margin: auto;
  padding-top: 1rem;
}
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin:1rem 0
}
.task__delete{
  border-radius: 50%;
  border: none;
  background-color: rgb(156, 112, 112);
  color: #eee;
}
</style>