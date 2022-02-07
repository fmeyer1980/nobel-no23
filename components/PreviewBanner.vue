<template>
    <div v-if="$store.state.showDrafPreviewBanner" class="fixed top-0 w-full py-400 flex flex-wrap items-center gap-1 bg-primary-500/80 text-primary-100 z-[100] justify-center border-b border-primary-100/20 shadow-2xl backdrop-blur-md">
        <p>Draft preview. </p>
        <button class="underline font-bold" @click="$nuxt.refresh()">Click here to refresh</button>
    </div>
</template>

<script>

export default {
    name: "previewBanner",
}
</script>
