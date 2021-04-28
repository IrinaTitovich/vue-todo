<template>
    <div class="workspace">
        <div class="workspace__addTask">
            <label for="addTask">
                Добавить задание
                <input type="text" class="workspace__input" id="addTask">
            </label>
        </div>
        <div class="workspace__tasks-list">
            <div class="workspace__task task">
                <span class="task__number">1. </span>
                <span class="task__name"> name</span>
                <div class="task__buttons">
                    <button class="task__delete">&times;</button>
                </div>
            </div>
        </div>
    </div>

</template>


<script>

export default {

}
</script>

<style>
.task{
    display: flex;
}
</style>