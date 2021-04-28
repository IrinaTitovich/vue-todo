<template>
    <nav class="navigation">
        <ul class="navigation__list" v-bind:links='links'>
            <li class="navigation__link" v-for="link in links" v-bind:key="link"> <router-link class="navigation__link" v-bind:to="'/'+link.toLowerCase().split(' ').join('-')" >{{link}}</router-link> </li>
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
    background-color: #333;
    height: 10vh;

}
.navigation__list{
    display: flex;
    justify-content: space-around;

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

</style>