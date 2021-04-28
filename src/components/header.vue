<template>
    <nav class="navigation">
        <ul class="navigation__list" v-bind:links='links'>
            <li title="hi" v-for="link in links" v-bind:key="link"> <router-link to="/{{link}}"></router-link> {{link}}</li>
            <!-- <li v-for='link in links' v-bind:key="link" class="navigation__link"> <a  href="/">{{link}}</a> </li> -->
        </ul>
    </nav>
</template>


<script>
export default {
    props:['links']
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
    background-color: #ccc;
    height: 5rem;
}
.navigation__list{
    display: flex;
    justify-content: space-around;

    width: 30%;
}
.navigation__list{
    display: flex;
}

</style>