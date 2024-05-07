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
            <div class="grid md:grid-cols-4 grid-cols-2 pb-8 px-4" style="max-width: 90rem; border-bottom: 1px solid #99C3FF">
                <div class="col-span-2 md:col-span-1 mb-8">
                    logo
                </div>
                <div class="mb-8">
                    <div class="font-bold mb-8">Navigation</div>
                    <div v-for="link in navigation" class="mb-4">
                        <nuxt-link :to="link.link">{{ link.label }}</nuxt-link>
                        <br>
                    </div>
                </div>
                <div>
                    <div class="mb-8 font-bold">Policy</div>
                    <div v-for="link in policy" class="mb-4">
                        <nuxt-link :to="link.link">{{ link.label }}</nuxt-link>
                        <br>
                    </div>
                </div>
                <div>
                  <div class="font-bold mb-8">Contact</div>
                  <div class="mb-4">Phone.: 0XX XXXXXXX</div>
                  <div class="mb-4">Mon - Sat: 08:30 - 16:30</div>
                  <div class="mb-4">E-mail: lorem ipsum</div>
                    <div class="flex gap-5">
                        <img v-for="i in icons" :src="`/footer/${i.src}.svg`" alt="">
                    </div>
                </div>
            </div>
          <div class="text-center text-sm mt-12">2021 Relume. All right reserved.</div>

        </div>
    </div>
</template>

<style scoped>
.footer {
    background: #EEF5FF;
    padding: 9rem 0;
}
</style>
