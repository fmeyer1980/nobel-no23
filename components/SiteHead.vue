<template>
    <header class="absolute container-wrapper text-light-glare z-50 h-1000 w-full flex items-center gap-600">
        <nuxt-link class="h-700" :to="{name:'index'}" aria-label="Gå til forsiden">
            <LogoSvg class="fill-current h-full" width="auto" height="auto" />
        </nuxt-link>
        <ul class="flex flex-wrap gap-x-500 gap-y-1 ml-auto">
            <li v-for="item in site.mainMenu" :key="item._key">
                <nuxt-link class="font-heading text-50 font-bold" :to="{name:'slug',params:{slug:item.slug.current}}">{{ item.name }}</nuxt-link>
            </li>
        </ul>
        <a class="btn text-25" data-type="primary" href=""><CalendarSvg class="fill-current h-em-1 -mt-0.5 w-auto" width="auto" height="auto" />Online booking</a>
    </header>
</template>

<script>
import {mapState} from "vuex";
import LogoSvg from "@/components/svg/LogoSvg"
import CalendarSvg from "@/components/svg/CalendarSvg"

export default {
    name: "SiteHead",
    components: {LogoSvg, CalendarSvg},
    computed:{
        ...mapState('sanity',{
        site: 'siteSettings'
        })
    }
}
</script>