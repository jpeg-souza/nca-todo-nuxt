<script setup>
defineProps(['tarefa'])
defineEmits(['toggle', 'deletar'])
</script>

<template>
  <ul :key="tarefa.id" class="list-group todos mx-auto text-light delete">
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <div class="form-check">
        <input class="form-check-input" type="checkbox" :checked="tarefa.complete" :id="'check-' + tarefa.id" @click="$emit('toggle', tarefa.id)">
        <label class="form-check-label" :for="'check-' + tarefa.id" :class="{ 'tarefa-concluida': tarefa.complete }">
          {{ tarefa.title }}
        </label>
      </div>
      <div class="actions">
        <button class="btn btn-danger" @click="$emit('deletar', tarefa.id)">Deletar</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.tarefa-concluida {
  text-decoration: line-through;
}
</style>