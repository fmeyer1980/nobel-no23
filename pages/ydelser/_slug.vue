<template>
    <div class=" bg-secondary-800 text-primary-100 py-900">
        <div class="container-wrapper">
            <h1 v-text="services.name" />
            <div class="text-200 opacity-80 measure-60">
                <SanityContent :blocks="services.body" />
            </div>
        </div>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'


export default {
    async asyncData({ params, $sanity }) {
        const query = groq`*[_type == "services" && slug.current == "${params.slug}"] | order(_updatedAt desc) {
            meta{
                title,
                description
            },
            name,
            slug,
            headline,
            body
        }[0]`
        const services = await $sanity.fetch(query)
        return { services }
    },
    name: 'Services',
}

</script>