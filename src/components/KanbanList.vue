<template>
  <div class="card overflow-auto" v-if="categories === task.category">
      <div class="card-body text-black-50 font-weight-bold text-sm-left p-2 col " id="first" >
        <div class="card-title text-black font-weight-bold" >{{ task.title }}</div>
        <p class="card-text">
          {{ task.description }}
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'KanbanList',
  props: ['task', 'categories']
}
</script>

<style>

</style>