<script setup>
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanMd = breakpoints.smaller('md') // only smaller than lg
let showMenu = ref(false)
let hovering = ref('false')
const links = [
    {label: 'Home', link: '/'},
   {
      label: 'Prestazioni', link: '/prestazioni',
      children:[
         {label: 'Implantologia', link: '/impianti-dentali-in-albania'},
         {label: 'Ortodonzia', link: '/visita-ortodontica-a-tirana'},
         {label: 'Sbiancamento Dentale', link: '/sbiancamento-dentale'},
         {label: 'Endodonzia', link: '/endodonzia'},
         {label: 'Protesi Dentali', link: '/protesi-dentali'},
         {label: 'Chirurgia Orale', link: '/chirurgia-orale'},
         {label: 'Odontoiatria Estetica', link: '/odontoiatria-estetica'},
         {label: 'Parodontologia', link: '/parodontologia'},
      ]
   },
   {label: 'About us', link: '/about-us'},
    {
       label: 'Turismo Dentale', link: '/turismo-dentale',
       children:[
          {label: 'Testimonials', link: '/testimonials'},
          {label: 'Come funziona', link: '/come-funziona'},
          {label: 'Perché l\'Albania', link: '/perche-albania'},
       ]
    },
    {label: 'Contact Us', link: '/contact-us'},
]
</script>

<template>
    <div class="bg-white z-10">
        <div class="flex h[84px] p-4">
            <div style="line-height: 49px;">logo</div>
            <button v-if="smallerThanMd" class="ml-auto" @click="showMenu = !showMenu"><img :src="`/icon/${showMenu ? 'x.svg' : '=.svg'}`" alt=""></button>
            <div class="m-auto gap-7 flex" v-else>
                <nuxt-link v-for="link in links" :to="link.link" class="flex relative" @mouseover="hovering = link.label" @mouseleave="hovering = ''">
                   <div style="width: max-content">{{ link.label }}</div>
                   <img class="ml-1 max-w-max" v-if="link.children" src="/icon/arrowDown.svg" alt="">
                   <div class="dropdown" v-show="hovering === link.label && link.children">
                      <div v-for="item in link.children">
                      <nuxt-link style="min-width: 11rem; display: block; color: black !important; font-weight: 400 !important;" :to="item.link">
                         {{item.label}}
                      </nuxt-link>
                         <br>
                      </div>
                   </div>
                </nuxt-link>
            </div>
            <button v-if="!smallerThanMd" class="mainButton">Contact Us</button>
        </div>
        <div class="block bg-white text-center w-full h-full absolute" v-show="showMenu && smallerThanMd">
            <div v-for="link in links" class="mb-8">
            <nuxt-link :to="link.link">{{ link.label }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
   .dropdown{
      position: absolute;
      background: white;
      top: 23px;
      padding: 1rem;
      box-shadow: 0 0 12px #00000022;
   }
</style>
