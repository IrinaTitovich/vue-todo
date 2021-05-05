<template>
    <div class="form">
        <form class="form__addTask" @submit.prevent="submit()">
        <h4 @click = 'add()'>
          <template v-if='!edit'>Добавить</template>
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
            v-model.trim.lazy="newTask.name"
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
            v-model.lazy.number="newTask.price"
            placeholder="Цена"
          />
        </label>
        <label for="taskQuantity">
          Количество
          <input
            type="text"
            name="quantity"
            class="form__input"
            id="taskQuantity"
            v-model.lazy.number="newTask.quantity"
            placeholder="Количество"

          />
        </label>
        <button class='btn' type="submit" >
            <template v-if='!edit'>Добавить</template>
            <template v-else> Изменить</template>
            </button>
      </form>
    </div>
</template>


<script>

export default {
  props: {
      name:{
        type:String,
        default:"",
      },
      price:{
        type:Number,
        default:0
      },
      quantity:{
        type:Number,
        default:0
      },
        edit:{
        type:Boolean,
        default:false
      }
  },
  data(){
    return{

    }
  },
  methods:{
      submit(){
        if (this.edit){
          this.$emit('editTaskInStore', this.newTask)
        } else{
        this.$emit('addTaskInStore', this.newTask)
        }

      }
  },
  computed:{
      newTask(){
        return {
          name:this.name,
          price:this.price,
          quantity:this.quantity
        }
      }
  },
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