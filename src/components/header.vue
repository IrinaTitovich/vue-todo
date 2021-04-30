<template>
    <nav class="navigation">
        <button v-show='auth' v-on:click="changeAuth">Выйти</button>
        <button v-show='!auth' v-on:click="changeAuth">Войти</button>
        <ul class="navigation__list">
            <li class="navigation__link"  v-for="link in links" v-bind:key="link"> <router-link active-class class="navigation__link" v-bind:to="'/'+link.toLowerCase().split(' ').join('-')" >{{link}}</router-link> </li>
        </ul>
    </nav>
</template>


<script>
import store from '../store'
import {mapMutations, mapGetters} from 'vuex'


export default {
    store,
    computed:{
        ...mapGetters({auth:'currentAuth', links:'headerLinks'}),
    },
    methods:{
        ...mapMutations({changeAuth:'CHANGE_AUTH'})
    },
}
</script>

<style >
ul{
    list-style: none;
    padding: 0;
}
.navigation{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #333;
    height: 10vh;
}
.navigation__list{
    display: flex;
    justify-content: space-around;

min-width: 250px;
    width: 30%;
}
.navigation__list{
    display: flex;
}
.navigation__link{
    text-decoration: none;
    color: azure;
    font-weight: bold;
}
.router-link-exact-active{
    color: rgb(207, 204, 5);
    text-decoration-line: underline;
}
</style>