<template>
    <div class="all-tasks">
        <div class="all-tasks__container" v-if='auth' >
            <p class="all-tasks__task">
                <span class="all-tasks__title">Название</span>
                <span class="all-tasks__title">Суммарная цена</span>
            </p>
            <router-link  :to="getLink(task.name)" class="all-tasks__task" v-for='(task,idx) in tasks' :key="task.name">
                <span class="all-tasks__task-name">{{idx+1}}. {{task.name}}</span>
                <span>{{sumPrice(task.price,task.quantity)}}$</span>
            </router-link>
        </div>
        <div class="all-tasks__container" v-else>
            <span>Сначала нужно войти</span>
        </div>
    </div>
</template>


<script>
import store from '../store/index'
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
        }
    },
    store,
    computed:{
        ...mapGetters({
            tasks:'allTasks',
            auth:'currentAuth'
        })
    },
    methods:{
        sumPrice(price,quantity){
            return parseInt(price)*Number(quantity)
        },
        getLink(taskName){
            return '/task/'+taskName.toLowerCase().split(' ').join('')
        }
    },
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
.all-tasks__title{
    font-size: 1rem;
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