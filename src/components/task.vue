<template>
    <div class="card">
        <div class="card__container" v-if='task'>
            <p class="card__element"> {{task.name}}</p>
            <hr>
            <p class="card__element">{{task.price}}</p>
        </div>
        <div v-else>
            <span>loading...</span>
        </div>
    </div>

</template>


<script>
import { mapGetters } from 'vuex'
import store from '../store/index'

export default {
    props:[],
    data(){
        return {
            routeName:'',
        }
    },
    store,
    computed:{
        ...mapGetters({
            task:'taskByName'
            })
    },
    created(){
        const routeName = this.$route.params.name.toString()
        this.$store.commit('SET_SEARCH_NAME', routeName)
    },
    mounted(){
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
    min-width: 300px;
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