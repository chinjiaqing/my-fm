<template>
    <div class="w-100% h-100% flex flex-col">
        <Header class="flex-shrink-0" />
        <Categories />
        <Main class="flex-1 h-100% w-100%"></Main>
        <Player class="flex-shrink-0" />
    </div>
</template>

<script setup lang="ts">
import Player from "./components/player/index.vue"
import Header from "./components/header/index.vue"
import Main from "./components/main/index.vue"
import Categories from "./components/categories/index.vue"

</script>

<style lang="scss" scoped>

</style>
