<template>
    <div class=" container-wrapper">
        <div class="relative pt-900 pb-800">
            <div class="space-y-200 measure-50">
                <p class="h2" v-text="site.cta.headline" />
                <p class="opacity-70" v-text="site.cta.text" />
            </div>
            <form class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-600" name="newsletter sign up" method="POST" action="/tak-newsletter.html" netlify-honeypot="bot-field" data-netlify="true">
                <label>
                    <input class="w-full bg-transparent border-0 border-b border-primary-300 px-0 pb-50 text-400 placeholder-secondary-900 placeholder-opacity-100 focus:border-primary-400 focus:ring-1 focus:ring-transparent" type="text" name="Navn" placeholder="Dit navn" required>
                    <span class="text-xs uppercase opacity-40 mt-10 block">Navn</span>
                </label>
                <label>
                    <input class="w-full bg-transparent border-0 border-b border-primary-300 px-0 pb-50 text-400 placeholder-secondary-900 placeholder-opacity-100 focus:border-primary-400 focus:ring-1 focus:ring-transparent" type="tel" name="Tel" placeholder="Telefonnummer" required>
                    <span class="text-xs uppercase opacity-40 mt-10 block">Telefon.NR</span>
                </label>
                <label>
                    <input autocomplete="email" class="w-full bg-transparent border-0 border-b border-primary-300 px-0 pb-50 text-400 placeholder-secondary-900 placeholder-opacity-100 focus:border-primary-400 focus:ring-1 focus:ring-transparent" type="email" name="E-mail" placeholder="Din e-mail" required>
                    <span class="text-xs uppercase opacity-40 mt-10 block">E-mail</span>
                </label>
                <div>
                    <button class="btn w-full" data-type="tertiary">Tilmeld dig her</button>
                </div>
                <p class="hidden">
                    <label>Don’t fill this out if you're human:
                        <input name="bot-field"/>
                    </label>
                </p>
            </form>
            <PatternSvg class="text-primary-300 fill-current h-[500px] absolute -top-1.5 right-0 z-[-1]" />
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
import PatternSvg  from "@/components/svg/PatternSvg"

export default {
    name: "SitePrefoot",
    components: {PatternSvg},
    computed:{
        ...mapState('sanity',{
        site: 'siteSettings'
        })
    }
}
</script>