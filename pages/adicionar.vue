<template>
    <div class="container">
        <header class="text-center text-light my-4">
            <h1 class="mb-4">✍️ Adicionar Tarefa</h1>
            <form class="add text-center my-4" @submit.prevent="adicionarTarefaHandler(novaTarefa)">
                <label class="text-light">O que você quer fazer? 🤔</label>
                <input class="form-control m-auto my-4" v-model="novaTarefa" type="text" placeholder="ex.: aprender vue"
                    name="add" />
                <div class="text-center">
                    <input type="submit" class="btn btn-light" value="Adicionar tarefa" />
                </div>
            </form>
            <NuxtLink to="/">Voltar à Lista</NuxtLink>
        </header>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  const novaTarefa = ref('');
  const { adicionarTarefa } = useTarefas();
  const router = useRouter();
  
  async function adicionarTarefaHandler(titulo) {
    await adicionarTarefa(titulo);
    router.push('/');
  }
  </script>
  
  <style scoped>
  </style>