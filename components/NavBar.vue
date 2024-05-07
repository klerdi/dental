<script setup>
const links = [
    {label: 'Home', link: '/'},
    {label: 'About us', link: '/about-us'},
    {label: 'Testimonials', link: '/testimonials'},
    {label: 'Contact Us', link: '/contact-us'},
    {label: 'Services', link: '/services'}
]
</script>

<template>
<div class="flex h[84px] p-4">
    <div style="line-height: 49px;">logo</div>
  <div class="m-auto gap-7 flex">
    <nuxt-link v-for="link in links" :to="link.link">{{ link.label }}</nuxt-link>
  </div>
    <button class="mainButton">Contact Us</button>
</div>
</template>

<style scoped>

</style>
