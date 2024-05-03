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
<div>
    <div>logo</div>
    <nuxt-link v-for="link in links" :to="link.link">{{ link.label }}</nuxt-link>
    <button ></button>
</div>
</template>

<style scoped>

</style>