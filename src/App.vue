<template>
    <div class="w-100% h-100% flex flex-col">
        <Header class="flex-shrink-0" />
        <div class="flex-1 h-100% w-100%"></div>
        <Player class="flex-shrink-0" />
    </div>
</template>

<script setup lang="ts">
import Player from "./components/player/index.vue"
import Header from "./components/header/index.vue"
</script>

<style lang="scss" scoped>

</style>
