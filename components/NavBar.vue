<script setup>
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanMd = breakpoints.smaller('md') // only smaller than lg
let showMenu = ref(false)
const links = [
    {label: 'Home', link: '/'},
    {label: 'About us', link: '/about-us'},
    {label: 'Testimonials', link: '/testimonials'},
    {label: 'Contact Us', link: '/contact-us'},
    {label: 'Services', link: '/services'}
]
</script>

<template>
    <div class="bg-white z-10">
        <div class="flex h[84px] p-4">
            <div style="line-height: 49px;">logo</div>
            <button v-if="smallerThanMd" class="ml-auto" @click="showMenu = !showMenu"><img :src="`/icon/${showMenu ? 'x.svg' : '=.svg'}`" alt=""></button>
            <div class="m-auto gap-7 flex" v-else>
                <nuxt-link v-for="link in links" :to="link.link">{{ link.label }}</nuxt-link>
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

</style>
