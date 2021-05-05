<template>
  <div class="workspace">
    <div class="workspace__container">
      <app-card v-if="!taskToEdit" :task="taskToEdit"  @newTask="addNewTask($event)" />
      <app-card v-else :task="taskToEdit" @newTask="editTaskInStore($event)" />
      <div v-if="auth" class="workspace__tasks-list">
        <div
          class="workspace__task task"
          v-bind:key="idx"
          v-for="(task, idx) in tasks"
        >
          <p class="task__name">
            <span class="task__number">{{ idx + 1 }}. </span>
            <span class="task__name"> {{ task.name }}</span>
          </p>
          <div class="task__buttons">
            <button class="mini-btns task__edit" @click="editTask(task.name)">
              &#9998;
            </button>
            <button class="mini-btns task__delete" @click="removeTask(task.name)">
              &times;
            </button>
          </div>
        </div>
      </div>
      <div class="workspace__tasks-list" v-else>
        Для просмотра необходима авторизация
      </div>
    </div>
  </div>
</template>


<script>
import store from "../store";
import { mapGetters, mapMutations } from "vuex";
import appCard from './card'

export default {
  store,
  name:'workspace',
  components:{
    appCard
  },  
  data() {
    return {
      taskToEdit:null
    };
  },
  computed: {
    ...mapGetters({ tasks: "allTasks", auth:"currentAuth",taskByName:"taskByName",indexOfTheTaskByName:"indexOfTheTaskByName" }),

  },
  methods: {

    ...mapMutations({ addTaskToTheStore: "ADD_TASK", removeTask:"REMOVE_TASK", setSearchName:"SET_SEARCH_NAME", editTaskInState:"EDIT_TASK_IN_STATE" }),

    addNewTask(newTask){
      this.addTaskToTheStore(newTask)
    },


    priceToString(price) {
      return parseInt(price.toString()) + "$";
    },

    editTask(taskName){

      this.setSearchName(taskName)
      this.taskToEdit=this.taskByName
      console.log(this.taskToEdit)

    },


    editTaskInStore(newTask) {
      if(this.taskToEdit){
        console.log('nt',newTask)
        let indexInStore = this.indexOfTheTaskByName
        console.log(this.tasks[indexInStore])
        this.editTaskInState({index:indexInStore,task:newTask})
        console.log(this.tasks)
        this.taskToEdit=null

      } 
    }
  },

};
</script>

<style>
.workspace {
  background-color: #eee;
  height: 90vh;
  width: 100%;
}
.workspace__container {
  min-width: 300px;
  width: 60%;
  margin: auto;
  padding-top: 1rem;
}
.workspace__tasks-list {
  margin-top: 1em;
}
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin: 1rem 0;
}
.workspace__addTask {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  width: 45%;
  min-width: 280px;
  min-height: 10rem;
  border: 1px solid #ccc;
  padding: 1em;
  background-color: #ddd;
}
.workspace__addTask label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task__buttons{
  height: 1.4rem;
  width: 4rem;
  display: flex;
  justify-content: space-between;
}
.mini-btns {
  border-radius: 50%;
  border: none;
  color: #eee;
}
.task__delete{
  font-size: 1.0rem;
  background-color: rgb(156, 112, 112);
}
.task__edit{
  background-color: rgb(88, 124, 104);
  
}
</style>