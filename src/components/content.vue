<template>
<div>
    <div>content</div>
    <app-tasks-workspace></app-tasks-workspace>
    <app-all-tasks></app-all-tasks>
</div>

</template>


<script>
import appAllTasks from "./all-tasks"
import appTasksWorkspace from "./tasks-workspace"
export default {
    components:{
        appAllTasks,
        appTasksWorkspace
    }
}
</script>

<style>

</style>