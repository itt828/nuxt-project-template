<script setup lang="ts">
const route = useRoute()
const { data } = await usePets('/pet/{petId}', { path: { petId: 2 } })
</script>

<template>
  aaa
  {{ data?.name }}
  bbb
</template>
