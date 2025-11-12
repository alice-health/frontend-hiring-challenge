<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const patientId = computed(() => route.params.id)
</script>

<template>
  <div>
    <h1>Detalhes do Paciente</h1>
    <p>Rota: /patient/{{ patientId }}</p>
    <p>ID do Paciente: {{ patientId }}</p>
    <RouterLink to="/">← Voltar para Lista</RouterLink>
  </div>
</template>

