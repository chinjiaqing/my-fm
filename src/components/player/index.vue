<template>
    <div class="player bg-#fff w-100% flex flex-col px-30px">
        <div class="flex relative overflow-hidden gap-30px items-center border-dashed border-b-1px border-color-#f5f6f7" v-if="activeFmItem">
            <img class="w-60px h-60px r-50% object-contain" v-if="activeFmItem && activeFmItem.cover" :src="activeFmItem.cover" alt="">
            <marquee behavior="" direction="" class="flex-1">
                <div class="h-80px font-size-28px font-500 line-height-80px">
                    {{activeFmItem.title}}
                </div>
            </marquee>
        </div>

        <div class="flex justify-evenly items-center flex-1 py-40px font-size-50px color-primary">
            <div class="i-solar:heart-angle-linear" v-if="!activeFmItem || !activeFmItem.like"></div>
            <div class="i-solar:hearts-bold-duotone" v-else></div>
            <div class="i-solar:skip-previous-line-duotone"></div>
<!--            <div class="i-solar:soundwave-circle-bold-duotone  font-size-110px" ></div>-->
            <div  @click="handleStop"  v-if="activeFmItem && activeFmItem.playing" class="w-110px h-110px p-10px border-box flex justify-center align-center ">
                <div class=" bg-primary/60 flex justify-center items-center w-100% h-100%" style="border-radius: 50%;">
                    <Jump />
                </div>
            </div>
            <div class="i-solar:play-circle-bold-duotone  font-size-110px" @click="handlePlay" v-else></div>
            <div class="i-solar:skip-next-line-duotone"></div>
            <div class="i-solar:shuffle-line-duotone" v-if="isRandomMode" @click="setRandomMode(false)"></div>
            <div class="i-solar:repeat-line-duotone" v-else @click="setRandomMode(true)"></div>
        </div>
    </div>
    <audio src="" @play="onAudioPlay" @pause="onAudioPause" style="display: none" playsinline ref="audioRef"></audio>
</template>


<script setup lang="ts">
import Jump from "./jump.vue";
import {  ref,nextTick, watch} from "vue";
import { activeFmItem,isRandomMode, setRandomMode, togglePlayingState } from "../../store"
import Hls from "hls.js"

let hls:Hls|null;
const audioRef = ref<HTMLAudioElement | null>(null)

watch(activeFmItem,_=>{
    handlePlay()
},{immediate:true,deep:false})

function handlePlay(){
    if(!activeFmItem.value) return
    hls && hls.destroy()
    audioRef.value && (audioRef.value.src = '')
    if(activeFmItem.value.src.includes(".m3u8")) {
        if(Hls.isSupported()) {
            nextTick(()=>{
                if(!hls) {
                    hls = new Hls()
                }
                hls.loadSource(activeFmItem.value!.src)
                hls.attachMedia(audioRef.value as HTMLAudioElement)
            })
        }
    }else{
        audioRef.value && (audioRef.value.src = activeFmItem.value.src)
    }
    nextTick(()=>{
        audioRef.value && audioRef.value.play()
    })
}

function handleStop(){
    audioRef.value && audioRef.value.pause()
}

function onAudioPause(){
    togglePlayingState(false)
}
function onAudioPlay(){
    togglePlayingState(true)
}

</script>


<style lang="scss" scoped>
.player {
    border-top: 1px solid #eee;
}
</style>
