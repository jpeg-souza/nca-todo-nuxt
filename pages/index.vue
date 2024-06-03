<script setup>
import { ref } from "vue";

const tarefas = ref([]);
const novaTarefa = ref('');

async function toggleTarefa(id) {
  const resultado = await fetch("http://localhost:8000/update/" + id)
    .then(response => response.json())
  
  if (resultado) {
    const tarefa = tarefas.value.find(tarefa => tarefa.id === id);
    tarefa.complete = !tarefa.complete;
  }
}

async function adicionarTarefa(titulo) {
  const resultado = await fetch("http://localhost:8000/add", {
    method: 'POST',
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: `title=${titulo}`,
  }).then(response => response.json());
  
  if (resultado) {
    carregarTarefas();
  }
}

async function deletarTarefa(id) {
  const resultado = await fetch("http://localhost:8000/delete/" + id)
    .then(response => response.json());
  
  if (resultado) {
    carregarTarefas();
  }
}

function carregarTarefas() {
  fetch("http://localhost:8000/")
      .then(response => response.json())
      .then(data => tarefas.value = data);
}

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
