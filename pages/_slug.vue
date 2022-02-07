<template>
    <div class="text-red-700">
        <h1 :v-text="name" />
        gddf
    </div>
</template>

<script>
import {mapState} from 'vuex'
import { groq } from '@nuxtjs/sanity'


export default {
    async asyncData({ params, $sanity }) {
        const query = groq`*[_type == "pages" && slug.current == "${params.slug}"] | order(_updatedAt desc) {
            meta{
                title,
                description
            },
            name,
            slug,
            headline,
        }[0]`
        const pages = await $sanity.fetch(query)
        return { pages }
    },
    name: 'Pages',
    validate({ params, store, query }) {
        // If FALSE redirect to 404 page
        return (
           query.preview === 'true' || store.state.pagesSlugs.includes(params.slug)
        )
    },
    computed:{
        ...mapState('sanity',{
            site: 'siteSettings'
        })
    },
    
}

</script>