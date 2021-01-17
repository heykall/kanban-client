<template>
    <div class="col big-card content" >
      <h5 class="card-header text-black-50 font-weight-bold" id="header">{{ categories }}</h5>
      <div class="card-body bone">
        <kanban-list
          :categories="categories"
          v-for="task in tasks" 
          :key="task.id" 
          :task="task">
        </kanban-list>
      </div>
      <div class="card-footer">
      </div>
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