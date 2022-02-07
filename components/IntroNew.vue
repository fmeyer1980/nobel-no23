<template>
    <div>
        <div class="relative bg-[#111E30] after:bg-gradient-to-b from-transparent to-secondary-700 after:h-1100 after:w-full after:absolute after:bottom-0 after:z-10">
            <img class="absolute top-0 left-0 h-full object-contain tttg"
                :src="$urlFor(home.intro.backgroundImage).width('1920').auto('format').quality('70')" 
                alt="Alt text"
            />
            <div class="container-wrapper relative text-primary-100 flex justify-end">
                <div class="intro relative bg-gradient-to-r from-transparent via-[#111E30]/90 to-[#111E30] max-w-[40rem] space-y-300 md:pl-900">
                    <span class="uppercase font-heading font-weight-light tracking-wider">{{ home.intro.topHeadline }}</span>
                    <h1>{{ home.intro.headline }}</h1>
                    <hr class="w-700 h-0.5 bg-primary-400 border-0">
                    <p class="text-200 opacity-80 measure-50">{{ home.intro.text }}</p>
                    <div class="flex gap-100 items-center pt-200">
                        <a v-for="item in home.intro.links" :key="item.item" class="btn text-50" :data-type="item.linkType" href="">
                            <div v-html="item.icon" />
                            {{ item.linkText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-b from-secondary-700 via-secondary-600 to-secondary-800 text-primary-100 relative z-10 pt-400 pb-900 lg:pb-400 container-wrapper grid gap-800 [ lg:grid-cols-2 ]">
            <div class="space-y-700 ">
                <div class="space-y-400">
                    <h2 class="text-650 font-light measure-30" v-text="home.about.headline" />
                    <div class="text-200 opacity-80 measure-60">
                        <SanityContent :blocks="home.about.text" />
                    </div>
                </div>
                <hr class="bg-none border-dashed border-primary-100/20" >
                <ul class="space-y-700 pt-100">
                    <li v-for="item in home.about.benefitsList" :key="item._id" class="flex space-x-400">
                        <CheckmarkSvg class="text-primary-400 fill-current w-650 h-650 flex-shrink-0" width="auto" height="auto" />
                        <div class="space-y-em-0.6">
                            <p class="h5">{{ item.headline }}</p>
                            <p class="opacity-80">{{ item.text }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="intro__images ml-200 -mt-1200 relative hidden lg:block">
            <div class="test-trigger"></div>
                <div class="item image-border offset-border--big image-overlay intro__mobil-product" v-for="item in home.about.gallery" :key="item._key">
                    <img loading="lazy" class="shadow-2xl" :src="$urlFor(item).width('674').height('748').auto('format').quality('70')"  alt="Alt tekst">
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
import CheckmarkSvg from "@/components/svg/CheckmarkSvg"

import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default {
    name: "IntroNew",
    components: { SanityContent, CheckmarkSvg },
    props:{
        home: Object
    },
    mounted()
		{

			if(process.client)
			{
				if(document.querySelectorAll('.test-trigger').length > 0)
				{
					if (window.innerWidth > 992)
					{
						this.$gsap.registerPlugin(ScrollTrigger)
						var options = {
							scrollTrigger: {
								trigger: ".test-trigger",
								pin: ".test-trigger",
								scrub: true,
								markers: false
							}
						}
						let tl = this.$gsap.timeline(options);
						tl.to(".item:nth-child(2)", {
							bottom: -40,
                            
							ease: 'sine.inOut'
						});
 					    tl.to(".item:nth-child(3)", {
							opacity: 1,
                            bottom: 40,
                          
							ease: 'sine.inOut'
						}, 0);
                        tl.to(".item:nth-child(4)", {
							opacity: 1,
							bottom: 90,
                           
							ease: 'sine.inOut'
						}, 0.10);
					}
				}
			}
		}
}
</script>

<style lang="postcss">

.intro{
    /* padding-top: clamp(6.875rem, 25vw, 20rem);
    padding-bottom: clamp(4.5rem, 25vw, 30rem); */

    padding-top: 20vw;
    padding-bottom: 26vw;
}


.tttg{


    @media screen and (max-width: 1140px) {
    width: calc(100% - theme('spacing.600'));
    transform: translateX(-20%);
    
}
}

.test-trigger {
	height: 200%;
	width: 100%;
	position: absolute;
	top: -100%;
	left: 0;
    z-index: -20;
    visibility: hidden;
}

    .intro__images .item{
        
        width: 65%;
    }
 
    .intro__images .item:nth-child(2){
        @apply ml-1000
    }
    .intro__images .item:nth-child(3){
        @apply -mt-400 z-20
    }
    .intro__images .item:nth-child(3)::before{
        @apply bg-gradient-to-b from-secondary-700 via-secondary-600 to-transparent
    }
    .intro__images .item:nth-child(4){
        @apply -mt-400 ml-900 z-30
    }
</style>