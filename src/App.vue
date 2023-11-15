<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

</script>

<template>
  <div>
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
  position: absolute;
  top: var(--nav-height);
  width: 100%;
}
</style>
