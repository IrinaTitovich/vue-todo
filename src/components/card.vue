<template>
    <div class="form">
        <form class="form__addTask" @submit.prevent="$emit('newTask', newTask)">
        <h4>
          <template v-if='!task'>Добавить</template>
          <template v-else>Изменить</template>
           задание

        </h4>
        <label for="taskName">
          Название
          <input
            name="name"
            type="text"
            class="form__input"
            id="taskName"
            v-model="name"
            placeholder="Название"
            required
          />
        </label>
        <label for="taskPrice">
          Цена
          <input
            type="text"
            class="form__input"
            name="price"
            id="taskPrice"
            v-model="price"
            placeholder="Цена"
            required
          />
        </label>
        <label for="taskQuantity">
          Количество
          <input
            type="text"
            name="quantity"
            class="form__input"
            id="taskQuantity"
            v-model="quantity"
            placeholder="Количество"
            required
          />
        </label>
        <button class='btn' type="submit" >
            <template v-if='!task'>Добавить</template>
            <template v-else> Изменить</template>
            </button>
      </form>
    </div>
</template>


<script>

export default {
  props: {
    task: {
      name:String,
      price:Number,
      quantity:Number
    }||null
  },
  data(){
    return{
        name:'',
        price:0,
        quantity:0
    }
  },
  methods:{
  },
  computed:{
      newTask(){
        return {
          name:this.name,
          price:parseInt(this.price),
          quantity:parseInt(this.quantity)
        }
      }
  },
  beforeMount(){
    console.log('created')
    if (this.task){
      this.name= this.task.name,
      this.price = this.task.price,
      this.quantity = this.task.quantity
    } else{
      this.name= '',
      this.price = 0,
      this.quantity = 0
    }
  }
}
</script>

<style>

.form__addTask{
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
.form__addTask label{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>