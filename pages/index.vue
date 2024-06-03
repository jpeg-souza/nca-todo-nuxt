<script setup>
import { ref } from "vue";

const novaTarefa = ref('');
const { tarefas, carregarTarefas, adicionarTarefa, deletarTarefa, toggleTarefa } = useTarefas();

carregarTarefas()
</script>

<template>
<div class="container">
  <header class="text-center text-light my-4">
    <h1 class="mb-4">✍️ Tarefas</h1>
    <form class="add text-center my-4">
      <label class="text-light">O que você quer fazer? 🤔</label>
      <input class="form-control m-auto my-4" v-model="novaTarefa" type="text" placeholder="ex.: aprender vue" name="add" />
      <div class="text-center">
        <input type="submit" class="btn btn-light" value="Adicionar tarefa" @click.prevent="adicionarTarefa(novaTarefa)" />
      </div>
    </form>
  </header>

  <Tarefa v-for="tarefa in tarefas" :tarefa="tarefa" @toggle="(id) => toggleTarefa(id)" @deletar="(id) => deletarTarefa(id)" />
</div>
</template>

<style scoped>
.tarefa-concluida {
  text-decoration: line-through;
}
</style>
