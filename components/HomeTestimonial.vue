<template>
    <div class="bg-primary-300 pb-900">
        <div class="container-wrapper">
            <div class="bg-primary-400 relative -mt-900 rounded-2xl grid grid-cols-1 md:grid-cols-12 p-600 md:p-0">
                <div class="col-span-4">
                    <div class="h-full w-full md:transform md:translate-x-gutter md:translate-y-gutter image-border offset-border--big image-overlay before:border-primary-500 before:border-6">
                        <img loading="lazy" class="h-full w-full object-cover shadow-xl"
                        :src="$urlFor(home.testimonial.featuredTestimonial.profileImage).width('900').height('1000').auto('format').quality('70')" 
                        alt="Alt text"
                        />

                    </div>
                </div>
                <div class="col-span-6 pl-300 pt-700 space-y-500 [ md:pl-900 ]">
                    <p class="h2" v-text="home.testimonial.headline" />
                    <hr class="bg-none border-dashed border-secondary-900/20">
                    <div class="flex items-center gap-x-100">
                        <p class="h5" v-text="home.testimonial.featuredTestimonial.name" />
                        <ul class="flex gap-1.5">
                            <li v-for="index in home.testimonial.featuredTestimonial.stars" :key="index">
                                <StarSvg  class="fill-current w-100" />
                            </li>
                        </ul>
                    </div>
                    <SanityContent :blocks="home.testimonial.featuredTestimonial.text" />

                        <a class="btn tttd" data-type="tertiary" href="">Se alle vores udtalelser</a>
                    
                </div>
                <div class="col-span-2">
                    <div class="profile-images absolute rounded-full overflow-hidden" v-for="item in home.allTestimonial.slice(0, 6)" :key="item._id">
                          <img loading="lazy"  class="h-full w-full object-cover" width="50" height="50"
                        :src="$urlFor(item.profileImage).width('100').height('100').auto('format').quality('50')" 
                        alt="Alt text"
                        />
                    </div>
                </div>
            </div>
            
        </div>
  </div>
</template>

<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
import StarSvg from "@/components/svg/StarSvg"
export default {
    name: "HomeTestimonial",
    components: { SanityContent, StarSvg },
    props: {
        home: Object
    }
}
</script>

<style lang="postcss">
    
    .profile-images{


    }

    .profile-images:nth-child(1){
        @apply w-500 h-500 blur-[1px] opacity-30;
        top: 8%;
        right: 13%;
    }
    .profile-images:nth-child(2){
        @apply w-900 h-900 blur-[0.5px] opacity-50;
        top: 15%;
        right: 3%;
    }
    .profile-images:nth-child(3){
        @apply w-700 h-700 blur-[0.8px] opacity-40;
        top: 42%;
        right: 10%;
    }
    .profile-images:nth-child(4){
        @apply w-800 h-800 blur-[0.7px] opacity-40;
        top: 62%;
        right: 5%;
    }
    .profile-images:nth-child(5){
        top: 90%;
    }
    .profile-images:nth-child(6){
        top: 20%;
    }
</style>