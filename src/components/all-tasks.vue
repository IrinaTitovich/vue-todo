<template>
    <div class="all-tasks">
        <div class="all-tasks__container">
            <p class="all-tasks__task" v-for='(task,idx) in tasks' v-bind:key="task.name">
                <span>{{idx+1}}. {{task.name}}</span>
                <span>-</span>
                <span>{{task.price}}</span>
            </p>
        </div>
    </div>

</template>


<script>

export default {
    props:['tasks']
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
.all-tasks__task{
    display: flex;
    justify-content: space-between;


    font-size: 1.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
    margin: 0.5rem 0;
}
</style>