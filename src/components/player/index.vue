<template>
    <div class="player bg-#fff w-100% flex flex-col px-30px">
        <div class="flex relative overflow-hidden gap-30px items-center border-b-1px border-color-#f5f6f7" v-if="playerState.currentFm">
            <img class="w-80px h-80px r-50%" v-if="playerState.currentFm && playerState.currentFm.cover" :src="playerState.currentFm.cover" alt="">
            <marquee behavior="" direction="" class="flex-1">
                <div class="h-80px font-size-28px font-500 line-height-80px">
                    {{playerState.currentFm.title}}
                </div>
            </marquee>
        </div>

        <div class="flex justify-evenly items-center flex-1 py-40px font-size-50px color-primary">
            <div class="i-solar:heart-angle-linear" v-if="!playerState.currentFm || !playerState.currentFm.like"></div>
            <div class="i-solar:hearts-bold-duotone color-primary" v-else></div>
            <div class="i-solar:skip-previous-line-duotone"></div>
<!--            <div class="i-solar:soundwave-circle-bold-duotone  font-size-110px" ></div>-->
            <div  @click="handleStop"  v-if="playerState.playing" class="w-110px h-110px p-10px border-box flex justify-center align-center ">
                <div class=" bg-primary/60 flex justify-center items-center w-100% h-100%" style="border-radius: 50%;">
                    <Jump />
                </div>
            </div>
            <div class="i-solar:play-circle-bold-duotone  font-size-110px" @click="handlePlay" v-else></div>
            <div class="i-solar:skip-next-line-duotone"></div>
            <div class="i-solar:shuffle-line-duotone" v-if="playerState.random"></div>
            <div class="i-solar:repeat-line-duotone" v-else></div>
        </div>
    </div>
    <audio src="" style="display: none" playsinline ref="audioRef"></audio>
</template>


<script setup lang="ts">
import Jump from "./jump.vue";
import {onMounted, reactive, ref} from "vue";
import type {FmInfo} from "../../types";
import FmList from "../../data/fm.ts";
const audioRef = ref<HTMLAudioElement | null>(null)

const playerState = reactive<{
    playing: boolean;
    random:boolean;
    currentFm: FmInfo | null;
}>({
    playing:false,
    random:false,
    currentFm:null
})

function setCurrentFm(info:FmInfo){
    playerState.currentFm = info
    audioRef.value && (audioRef.value.src = info.src)
}

function handlePlay(){
    audioRef.value && audioRef.value.play()
    playerState.playing = true
}

function handleStop(){
    audioRef.value && audioRef.value.pause()
    playerState.playing = false
}

onMounted(()=>{
    setCurrentFm(FmList[0])
})

</script>


<style lang="scss" scoped>
.player {
    box-shadow: 0px -2px 0px #fff;
}
</style>
