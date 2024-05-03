<script setup>
const icons = [
    {src: 'fb', link: '/'},
    {src: 'insta', link: '/about-us'},
    {src: 'tiktok', link: '/testimonials'},
    {src: 'twitter', link: '/contact-us'},
    {src: 'linkedin', link: '/services'}
]
const navigation = [
    {label: 'Home', link: '/'},
    {label: 'About us', link: '/about-us'},
    {label: 'Testimonials', link: '/testimonials'},
    {label: 'Contact Us', link: '/contact-us'},
    {label: 'Services', link: '/services'}
]
const policy = [
    {label: 'Privacy Policy', link: '/privacy-policy'},
    {label: 'Terms of Service', link: '/terms-of-service'},
    {label: 'Cookies Settings', link: '/cookies-settings'}
]
</script>

<template>
    <div>
        <div class="form"></div>
        <div class="footer justify-center grid">
            <div class="grid grid-cols-4" style="max-width: 90rem">
                <div>
                    logo
                </div>
                <div>
                    <b>Navigation</b>
                    <div v-for="link in navigation" class="mt-8">
                        <nuxt-link :to="link.src" class="mb-4">{{ link.label }}</nuxt-link>
                        <br>
                    </div>
                </div>
                <div>
                    <b>Policy</b>
                    <div v-for="link in policy" class="mt-8">
                        <nuxt-link :to="link.link" class="mb-4">{{ link.label }}</nuxt-link>
                        <br>
                    </div>
                </div>
                <div>
                    <b>Contact</b> <br>
                    Phone.: 0XX XXXXXXX<br>
                    Mon - Sat: 08:30 - 16:30<br>
                    E-mail: lorem ipsum<br>
                    <div class="flex gap-5">
                        <img v-for="i in icons" :src="`/footer/${i.src}.svg`" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    background: #EEF5FF;
    padding: 9rem 0;
}
</style>