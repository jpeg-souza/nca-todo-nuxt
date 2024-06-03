<template>
  <div class="container">
    <header class="text-center text-light my-4">
      <h1 class="mb-4">✍️ Tarefas</h1>
      <NuxtLink to="/adicionar" class="btn btn-light mb-4">Adicionar Nova Tarefa</NuxtLink>
    </header>

    <Tarefa v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa" @toggle="toggleTarefa" @deletar="deletarTarefa" />
  </div>
</template>

<script setup>
const { tarefas, carregarTarefas, toggleTarefa, deletarTarefa } = useTarefas();
carregarTarefas();
</script>

<style scoped>
.tarefa-concluida {
  text-decoration: line-through;
}
</style>