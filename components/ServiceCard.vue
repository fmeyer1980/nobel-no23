<template>
    <nuxt-link class="flex flex-col" :to="{name:'ydelser-slug',params:{slug:url} }">
        <div class="image-border offset-border--small image-overlay" v-if="image">
        <img loading="lazy" class="shadow-xl"
                :src="$urlFor(image).width('674').height('748').auto('format').quality('70')" 
                alt="Alt text"
            />
        </div>
        <div class="pl-200 space-y-1" v-bind:class="(image)?'pt-500':'pt-none'">
        <div class="flex flex-wrap gap-x-100 gap-y-1">
            <p class="h5" v-text="name" />
            <strong class="font-heading text-primary-500">Fra {{ price }},-</strong>
        </div>
        <p class=" text-sm opacity-80" v-text="excerpt" />
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        name: "ServiceCard",
        props:{
            url: String,
            name: String,
            price: Number,
            excerpt: String,
            image: Object,
        }
    };
</script>