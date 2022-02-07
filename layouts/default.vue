<template>
  <div id="body">
    <client-only>
      <PreviewBanner />
    </client-only>
    <SiteHead />
    <main>
      <Nuxt />
      <SitePrefoot />
    </main>
    <SiteFoot />
  </div>
</template>

<script>

import SiteHead from "@/components/SiteHead";
import SitePrefoot from "@/components/SitePrefoot";
import SiteFoot from "@/components/SiteFoot";
import PreviewBanner from "@/components/PreviewBanner";

export default {
  components: {SiteHead,PreviewBanner,SitePrefoot,SiteFoot},
}
</script>
<style>
  /* .backdrop-filter{backdrop-filter: blur(20px) !important;} */
  body{
    @apply bg-primary-200 font-base
  }
</style>