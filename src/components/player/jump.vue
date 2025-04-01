<template>
    <div class="audio-bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.audio-bars {
    display: flex;
    align-items: flex-end; /* 底部对齐实现高低变化 */
    justify-content: center;
    gap: 8px; /* 替代margin间距 */
    opacity: 0.8;
}

.bar {
    width: 8px;
    height: 24px;
    background: #fff;
    animation: barJump 1.2s ease-in-out infinite;
    border-radius: 2px;
}

@keyframes barJump {
    0%, 100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(1.5); /* 向上跳动高度 */
    }
}

/* 设置不同延迟形成波浪效果 */
.bar:nth-child(2) { animation-delay: 0.3s; }
.bar:nth-child(3) { animation-delay: 0.6s; }
.bar:nth-child(4) { animation-delay: 0.9s; }
</style>

