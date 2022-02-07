<template>
<div>
  <IntroNew :home="home" />
  <div class="container-wrapper bg-secondary-800 text-primary-100 space-y-700 pb-1100 relative">
    <p class="h3">Se vores ydelser og priser</p>
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
      <li v-for="item in home.featuredServices" :key="item._id">
        <ServiceCard 
          :url="item.slug.current"
          :name="item.name"
          :price="item.price"
          :image="item.mainImage"
          :excerpt="item.excerpt"
        />
      </li>
    </ul>
    <div class="flex relative z-50">
      <div class="w-600 border-r border-dashed border-primary-100/20">
        <p class="vertical-rl uppercase text-base font-heading tracking-wider">Se elle vores priser</p>
      </div>
      <ul class="auto-grid auto-size-small gap-x-gutter pl-400 ttt">
        <li class="py-500 border-t border-dashed border-primary-100/20" v-for="item in home.servicesList" :key="item._id">
          <ServiceCard
            :url="item.slug.current"
            :name="item.name"
            :price="item.price"
            :excerpt="item.excerpt"
          />
        </li>
      </ul>
    </div>
  </div>
  <HomeTestimonial :home="home" />
  <CoolLightBox :items="home.allTestimonialImages" :index="index" @close="index = null"></CoolLightBox>
  <div class="gallery container-wrapper relative z-10 bg-primary-300 py-700 split">
    <div class="gallery__content space-y-400">
        <p class="h3">Find inspiration til din næste frisyre</p>
        <p>Nobel er en lille unik salon i en af Esbjergs hyggelige sidegader. Fra det øjeblik du træder ind i salonen, vil vi gøre vores bedste, for at du bliver en oplevelse rigere.</p>
        <a class="btn" data-type="primary" href="">Se flere billeder</a>
    </div>
    <ul class="gallery__thumbs reel gap-400 pb-600">
        <li class="relative cursor-pointer w-2/5 image-border offset-border--small image-overlay group"  v-for="(image, imageIndex) in home.allTestimonial" :key="imageIndex" @click="index = imageIndex">
        <div class="absolute bg-secondary-800/80 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl grid place-items-center z-[100]">
          <plusSvg class="text-primary fill-current h-800" />
        </div>
        <img loading="lazy" :src="$urlFor(image.profileImage).width('674').height('748').auto('format').quality('70')" alt="">
        </li>
    </ul>
  </div>
</div>
</template>

<script>


import { groq } from '@nuxtjs/sanity'
import IntroNew from "@/components/IntroNew";
import ServiceCard from "@/components/ServiceCard";
import HomeTestimonial from "@/components/HomeTestimonial";
import PlusSvg from "@/components/svg/PlusSvg"

import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  components: {IntroNew,ServiceCard,HomeTestimonial,CoolLightBox,PlusSvg},
  async asyncData({ $sanity }) {
      const query = groq`*[_type == "home"]{
      meta{
        title,
        description
      },
      intro{
        topHeadline,
        headline,
        text,
        backgroundImage{
          ...,
          asset->{
            ...
          }	
        },
        links[]{
          ...
        }
      },
      about{
        ...,
      },
      testimonial{
        headline,
          featuredTestimonial->{
            ...,
          profileImage{
          ...,
          asset->
        }
        }
      },
      "allTestimonial": *[_type == "testimonials"]{
        ...,
        profileImage{
          ...,
          asset->
        }
      },
      "allTestimonialImages": *[_type == "testimonials"].profileImage.asset->.url,
      "featuredServices": *[_type == "services" && featured == true] {
        ...
      },
      "servicesList": *[_type == "services" && featured != true && defined(slug)] {
        ...
      }
    }[0]`
    const home = await $sanity.fetch(query)
    return { home }
  },
  data() {
    return{
      images: [
        '/one.jpg', '/two.jpg'
      ],
      index: null,
    }
  }
}

</script>

<style>
  .ttt{
    width: calc(100% - theme('spacing.600'));
  }
  .vertical-rl { 
    writing-mode: vertical-rl; 
    transform: rotate(-180deg);
  }

  .gallery{
    display: flex;
    flex-wrap: wrap;
    gap: var(--size-800);

  }

  .gallery__content{
    flex-basis: 0;
    flex-grow: 999;
    min-width: 20%;
  }

  .gallery__thumbs{
    flex-basis: 50rem;
  }
</style>