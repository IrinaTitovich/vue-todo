<template>
    <div class="home">
        <router-link to="/see-all" class="button">See all tasks</router-link> 
    </div>
</template>


<script>

export default {

}
</script>

<style>
*{
    text-decoration: none;
}
    .home{
        height: 90vh;
        background-color: rgb(219, 219, 219);
        color: rgb(104, 64, 64);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .button{
        padding: 1.5em 1em;
        border: 1px solid #eef;
        background-color:rgb(119, 52, 52);
        border-radius: 5px;
        box-shadow: 5px 5px 10px #000;
        
        color: #fff;
        font-size: 1.5em;
        transition: .2s;
    }
    .button:hover{
        color: #222;
        background-color: rgb(211, 211, 211);
        cursor: pointer;
        box-shadow: 1px 1px 3px #000;
    }
    
</style>