<template>
  <div class="workspace">
    <div class="workspace__container">
      <div class="workspace__addTask">
        <h4>Добавить задание</h4>
        <label for="taskName">
          Название
          <input
            type="text"
            class="workspace__input"
            id="taskName"
            v-model="newTask.name"
            placeholder="Название"
          />
        </label>
        <label for="taskPrice">
          Цена
          <input
            type="text"
            class="workspace__input"
            id="taskPrice"
            v-model="newTask.price"
            placeholder="Цена"
          />
        </label>
        <label for="taskQuantity">
          Количество
          <input
            type="text"
            class="workspace__input"
            id="taskQuantity"
            v-model="newTask.quantity"
            placeholder="Количество"
          />
        </label>
        <button class='btn' type="submit" v-on:click="addTask()">Добавить</button>
      </div>
      <div v-if="auth" class="workspace__tasks-list">
        <div
          class="workspace__task task"
          v-bind:key="task.name"
          v-for="(task, idx) in tasks"
        >
          <p class="task__name">
            <span class="task__number">{{ idx + 1 }}. </span>
            <span class="task__name"> {{ task.name }}</span>
          </p>
          <div class="task__buttons">
            <button class="task__delete" v-on:click="removeTask(task.name)">
              &times;
            </button>
          </div>
        </div>
      </div>
      <div class="workspace__tasks-list" v-else>Для просмотра необходима авторизация</div>
    </div>
  </div>
</template>


<script>
import store from "../store";
import { mapGetters, mapMutations } from "vuex";

export default {
  store,
  data() {
    return {
      newTask: { 
        name: "", 
        price: 0,
        quantity:0
        },
    };
  },
  computed: {
    ...mapGetters({ tasks: "allTasks", auth:"currentAuth" }),
  },
  methods: {
    ...mapMutations({ addTaskToTheStore: "ADD_TASK", removeTask:"REMOVE_TASK" }),
    priceToString(price) {
      return parseInt(price.toString()) + "$";
    },
    addTask: function () {
      if (this.newTask.name.trim()) {
        this.addTaskToTheStore({
          name: this.newTask.name,
          price: this.priceToString(this.newTask.price),
          quantity:this.newTask.quantity.toString()
        });
        this.newTask.name = "";
        this.newTask.price = 0;
        this.newTask.quantity = 0;
      }
    },

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
.workspace__tasks-list{
  margin-top: 1em
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
.workspace__addTask{
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  width: 45%;
  min-width:280px;
  min-height: 10rem;
  border: 1px solid #ccc;
  padding: 1em;
  background-color: #ddd;
}
.workspace__addTask label{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task__delete {
  border-radius: 50%;
  border: none;
  background-color: rgb(156, 112, 112);
  color: #eee;
}
</style>