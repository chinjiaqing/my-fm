<template>
    <div class="flex flex-col gap-10px p30px bg-#fff overflow-auto">
        <fm-item v-for="item in fmList" :info="item" :key="item.src" />
    </div>
</template>

<script lang="ts" setup>
import fmItem from "../fm-item/index.vue"
import { fmList,setActiveFmItem } from "../../store/index"
import { onMounted } from "vue"
console.log('%c [ fmList ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', fmList)
onMounted(()=>{
    if(fmList.value && fmList.value.length > 0) {
        setActiveFmItem(fmList.value[0])
    }
})
</script>