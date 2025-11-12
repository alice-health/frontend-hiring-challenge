<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Lista de Pacientes</h1>
    <p>Rota: /</p>
    <ul>
      <li>
        <RouterLink to="/patient/1">Paciente 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/patient/2">Paciente 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/patient/3">Paciente 3</RouterLink>
      </li>
    </ul>
  </div>
</template>

