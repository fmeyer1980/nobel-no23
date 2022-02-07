<template>
<div>
    
    <div class="gallery container-wrapper relative z-10 bg-primary-300 py-700 split">
    <div class="gallery__content space-y-400">
        <p class="h3">Find inspiration til din næste frisyre</p>
        <p>Nobel er en lille unik salon i en af Esbjergs hyggelige sidegader. Fra det øjeblik du træder ind i salonen, vil vi gøre vores bedste, for at du bliver en oplevelse rigere.</p>
        <a class="btn" data-type="primary" href="">Se flere billeder</a>
    </div>
    <ul class="gallery__thumbs reel gap-400 pb-600">
        <li class="relative cursor-pointer w-2/5 image-border offset-border--small image-overlay group"  v-for="(image, imageIndex) in home.allTestimonial" :key="imageIndex" @click="index = imageIndex">
        <div class="absolute bg-secondary-900/80 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">

        </div>
        <img loading="lazy" :src="$urlFor(image.profileImage).width('674').height('748').auto('format').quality('70')" alt="">
        </li>
    </ul>
    </div>
</div>
</template>

<script>
export default {
    name: "Gallery",
    props: {
        home: Object
    }
}
</script>