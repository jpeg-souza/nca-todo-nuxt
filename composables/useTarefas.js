import { ref } from 'vue';

const tarefas = ref([]);

export function useTarefas() {
  async function carregarTarefas() {
    const response = await fetch("http://localhost:8000/");
    const data = await response.json();
    tarefas.value = data;
  }

  async function adicionarTarefa(titulo) {
    const response = await fetch("http://localhost:8000/add", {
      method: 'POST',
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `title=${titulo}`,
    });
    const resultado = await response.json();
    if (resultado) {
      carregarTarefas();
    }
  }

  async function deletarTarefa(id) {
    const response = await fetch(`http://localhost:8000/delete/${id}`);
    const resultado = await response.json();
    if (resultado) {
      carregarTarefas();
    }
  }

  async function toggleTarefa(id) {
    const response = await fetch(`http://localhost:8000/update/${id}`);
    const resultado = await response.json();
    if (resultado) {
      const tarefa = tarefas.value.find(tarefa => tarefa.id === id);
      tarefa.complete = !tarefa.complete;
    }
  }

  return {
    tarefas,
    carregarTarefas,
    adicionarTarefa,
    deletarTarefa,
    toggleTarefa
  };
}