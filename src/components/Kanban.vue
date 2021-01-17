<template>
  <!-- Kanban -->

  <section id="kanban">
    <button class="btn btn-light btn-sm add-button" >Add New Task</button>
    <div class="container col-sm-12">
      <div class="row no-gutters">
        <kanban-category :tasks="tasks" 
          v-for="(categories, i) in category" 
          :key="i" 
          :categories="categories">
        </kanban-category>
      </div>
    </div>
  </section>
</template>

<script>
import KanbanCategory from "./KanbanCategory"

export default {
  name: "Kanban",
  components: {
    KanbanCategory
  },
  props: ['tasks', 'category'],
}
</script>

<style>

</style>