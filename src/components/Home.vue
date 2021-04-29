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
    .home{
        height: 90vh;
        background-color: rgb(176, 175, 190);
        color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .button{
        padding: 1.5em 1em;
        border: 1px solid #eef;
        background-color:#eef;
        border-radius: 5px;
        box-shadow: 5px 5px 10px #000;
        
        color: #333;
        font-size: 1.5em;
        transition: .2s;
    }
    .button:hover{
        background-color: #eff;
        cursor: pointer;
        box-shadow: 1px 1px 3px #000;
    }
    
</style>