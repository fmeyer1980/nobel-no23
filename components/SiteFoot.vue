<template>
    <div class="px-gutter pb-gutter text-[14px] text-primary-100/80">
        <div class="container-wrapper bg-secondary-800 rounded-lg py-800 grid grid-cols-4">
            <div class="space-y-300">
                <nuxt-link class="h-700" :to="{name:'index'}" aria-label="Gå til forsiden">
                    <LogoSvg class="fill-current h-500" />
                </nuxt-link>
                <div>
                    <p v-text="site.address" />
                    <p v-text="site.zip" />
                </div>
                <ul>
                    <li>Tlf: <a :href="'tel:' + site.phone">{{ site.phone }}</a></li>
                    <li>Email: <a :href="'mailto:' + site.mail">{{ site.mail }}</a></li>
                </ul>
                <ul class="flex gap-2">
                    <li v-for="item in site.socialmedia" :key="item._key">
                        <a class="border border-primary-100/80 w-500 h-500 flex items-center justify-center rounded-[.2em] hover:bg-primary hover:border-primary hover:text-secondary-900 transition-all duration-300" target="_blank" :href="item.url.current">
                            <component class="fill-current h-100" v-bind:is="item.type + 'Svg'" />
                        </a>
                    </li>
                </ul>
            </div>
             <div>
                <div class="h-700">
                    <p class="h5 text-200 text-primary-100">Nyttige links</p>
                </div>
                <ul class="space-y-2">
                    <li v-for="item in site.mainMenu" :key="item._key">
                        <nuxt-link class="" :to="{name:'slug',params:{slug:item.slug.current}}">{{ item.name }}</nuxt-link>
                    </li>
                </ul>
            </div>
            <div>
                <div class="h-700">
                    <p class="h5 text-200 text-primary-100">Åbningstider</p>
                </div>
                <ul class="space-y-2">
                    <li v-for="(item, index) in site.openingHours" >
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div>
                <div class="h-700">
                    <p class="h5 text-200 text-primary-100">Online bestilling</p>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import {mapState} from "vuex";
import LogoSvg from "@/components/svg/LogoSvg"
import FacebookSvg from "@/components/svg/socialmedia/FacebookSvg"
import TwitterSvg from "@/components/svg/socialmedia/TwitterSvg"
import LinkedinSvg from "@/components/svg/socialmedia/LinkedinSvg"

export default {
    components: {LogoSvg, FacebookSvg, TwitterSvg,LinkedinSvg},
    computed:{
        ...mapState('sanity',{
        site: 'siteSettings'
        })
    }
}
</script>