<template>
    <div class="flex items-center rounded-8px p-10px gap-30px fm-item bg-#f8f6f7" :class="[isActive ? 'bg-primary/10' : '']" v-if="info" @click="setActiveFmItem(info)">
        <img class="w-80px h-80px" :src="info.cover" alt="">
        <div class="flex flex-col justify-between">
            <p class="font-size-28px color-#333 flex items-center gap-10px">
                {{ info.title }}
                <span v-if="info.category" class="py-0px px-6px font-size-20px color-primary border-1px border-color-primary rounded-6px">{{ info.category }}</span>
            </p>
            <p class="font-size-24px color-#888">{{ info.author }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { FmInfo } from "../../types/index";
import { setActiveFmItem, activeFmItem } from "../../store/index"
const props =  defineProps<{
    info: FmInfo| null
}>()

const isActive = computed(()=>{
    return props.info && props.info.src === activeFmItem.value?.src
})

</script>

<style lang="scss" scoped>

.fm-item {
    box-shadow: 0px 1px 1px #eee;
}

</style>