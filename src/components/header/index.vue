<template>
    <header class="header w-100% h-160px flex flex-col bg-#fff">
        <div class=" inner h-90px line-height-100px px-30px font-size-40px flex justify-center">
            <h1>My FM | 我的收音机</h1>
        </div>
        <div class="font-size-20px  h-40px color-#888 flex items-center justify-center gap-10px">
            <div class="i-solar:info-circle-line-duotone font-size-28px"></div> 数据收集于互联网，如有侵权，请联系删除。
        </div>
    </header>
</template>



<style lang="scss" scoped>
.inner {
    box-shadow: 0 2px 0 #fff;
}

h1 {
    font-family: 'Source Sans Pro', sans-serif;
    background: linear-gradient(135deg, var(--color-primary) 20%, var(--color-second) 80%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.03em;
    font-weight: 700;
    text-shadow: 1px 1px rgba(255, 255, 255, 0.3), -1px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>

<script setup lang="ts">
</script>
