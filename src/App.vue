<script setup lang="ts">
import NavBar from "./components/parts/NavBar.vue";

</script>

<template>
  <div class="container">
    <header>
      <NavBar/>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped lang="scss">
main {
  position: relative;
  width: 100%;
}
</style>
