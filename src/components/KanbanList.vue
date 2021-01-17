<template>
  <div class="card overflow-auto" v-if="categories === task.category">
      <div class="card-body text-black-50 font-weight-bold text-sm-left p-2 col " id="first" >
        <div class="card-text text-black text-sm-right waktu"><i class="bi bi-calendar-event">added {{ task.createdAt }} days ago </i></div>
        <div class="card-text text-black text-sm-right">by: {{ task.User.username }}</div>
        <div class="card-title text-black font-weight-bold" >{{ task.title }}</div>
          <p class="card-text desc">
            {{ task.description }}
          </p>
        </div>
        <div class="menu card-text text-black text-sm-right action">
          <a type="button" class="btn-floating "><i class="bi bi-arrow-right-square"></i></a>
          <a type="button" class="btn-floating "><i class="bi bi-pencil-square"></i></a>
          <a type="button" class="btn-floating "><i class="bi bi-calendar-x"></i></a>
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