<template>
    <div class="flex p-30px items-center overflow-x-auto gap-20px">
        <div @click="filterFmList(cate)" :class="[cate.active ? 'bg-primary color-#fff' : '']" class="cate-item rounded-20px py-6px font-size-28px bg-#fff px-30px" v-for="cate in fmCategories" :key="cate.title">
            {{ cate.title }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { fmCategories,filterFmList } from "../../store/index"
import { onMounted } from "vue"

onMounted(()=>{
    if(fmCategories.value && fmCategories.value.length > 0) {
        filterFmList(fmCategories.value[0])
    }
})

</script>

<style lang="scss" scoped>

</style>