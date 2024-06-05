<script setup lang="ts">
import {services} from '../constants/services'
const route : any = useRoute().fullPath.split('/')[1].replace(/-/g, "")
const data = services[route]
if (!data)
   await navigateTo('/')

console.log(!data,'routeroute')
</script>

<template>
   <div style="max-width: 1922px" class="m-auto">
   <div class="grid grid-cols-1 md:grid-cols-2">
      <div style="padding: 6dvw">
         <h1 class="font-extrabold md:text-5xl text-4xl lg:pt-12 pt-4 pb-4">{{ data.title1 }}</h1>
         <div  class="lg:text-md text-sm " style="margin-bottom: 0.5rem">

         </div>
         <div class="lg:text-sm text-xs">
            {{ data.desc1 }}
         </div>

      </div>
      <div style="padding: 0 0 0 3dvw">
         <img :src="data.src1" alt="img" style="border-radius: 25rem  0 0 25rem ;">
      </div>
   </div>
   <div class="grid grid-cols-1 md:grid-cols-2 py-16">
      <div class="pr-8">
         <img :src="data.src2" alt="" style="border-radius: 0 25rem  25rem  0;">
      </div>
      <div style="padding: 4rem 7dvw">
         <div class="md:text-5xl text-3xl font-extrabold mb-12">
            {{ data.title2 }}
         </div>
         <div class="text-sm mb-6 font-extrabold">
            {{data.title22}}
         </div>
         <div class="text-sm mb-8">
            {{data.desc22}}
         </div>
         <div class="text-sm mb-6 font-extrabold">
            {{data.title222}}
         </div>
         <div class="text-sm">
            {{data.desc222}}
         </div>
      </div>
   </div>
   <div class="bgLightBlue grid grid-cols-1 md:grid-cols-2 py-16">
      <div style="padding: 6dvw">
         <h1 class="font-extrabold md:text-5xl text-4xl lg:pt-12 pt-4 pb-4">{{ data.title3 }}</h1>
         <div  class="lg:text-md text-sm font-extrabold" style="margin-bottom: 0.5rem">
            {{ data.title33 }}
         </div>
         <div class="lg:text-sm text-xs">
            {{ data.desc33 }}
         </div>
         <div  class="lg:text-md text-sm font-extrabold" style="margin-bottom: 0.5rem" v-if="data.title333">
            {{ data.title333 }}
         </div>
         <div class="lg:text-sm text-xs" v-if="data.desc333">
            {{ data.desc333 }}
         </div>

      </div>
      <div style="padding: 0 0 0 3dvw">
         <img :src="data.src3" alt="img" style="border-radius: 25rem  0 0 25rem; margin-left: auto;">
      </div>
   </div>
   <div class="grid grid-cols-1 md:grid-cols-2 py-16">
      <div class="pr-8">
         <img :src="data.src4" alt="" style="border-radius: 0 25rem  25rem  0;">
      </div>
      <div style="padding: 4rem 7dvw">
         <div class="md:text-5xl text-3xl font-extrabold mb-12">
            {{ data.title4 }}
         </div>
         <div class="text-sm mb-6 font-extrabold" v-if="data.title44">
            {{data.title44}}
         </div>
         <div class="text-sm mb-8">
            {{data.desc44}}
         </div>
         <div class="text-sm mb-6 font-extrabold" v-if="data.title444">
            {{data.title444}}
         </div>
         <div class="text-sm" v-if="data.desc444">
            {{data.desc444}}
         </div>
      </div>
   </div>
   <div class="text-center mb-5" v-html="data.notes"></div>
   </div>

   <book-appointment/>

</template>

<style scoped>

</style>