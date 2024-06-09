<script setup lang="ts">
const route = useRoute()
const { data } = await usePets('/pet/{petId}', { path: { petId: 2 } })
</script>

<template>
  <div :class="$style.foo">
    {{ data?.name }}
  </div>
</template>

<style module lang="scss">
.foo {
  background-color: aqua;
}
</style>
