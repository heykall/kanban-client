<template>
  <div class="col big-card" id="content">
    <h5 class="card-header text-black-50 font-weight-bold" id="header">{{ categories }}</h5>
    <kanban-list
      :categories="categories"
      v-for="task in tasks" 
      :key="task.id" 
      :task="task">
    </kanban-list>
  </div>
</template>

<script>
import KanbanList from './KanbanList'

export default {
  name: "KanbanCategory",
  components: {
    KanbanList
  },
  props: ['tasks', 'categories']
}
</script>

<style>

</style>