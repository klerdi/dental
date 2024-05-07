<script setup>
const route = useRoute()
const icons = [
    {src: 'fb', link: '/'},
    {src: 'insta', link: '/about-us'},
    {src: 'tiktok', link: '/testimonials'},
    {src: 'twitter', link: '/contact-us'},
    {src: 'linkedin', link: '/services'}
]
</script>

<template>
    <div class="grid grid-cols-3 m-auto" style="max-width: 100rem">
        <div class="px-8 mx-auto my-16 col-span-2">
            <div class="text-5xl font-extrabold mb-8">Contact Us</div>
            <div class="text-md mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus
                porttitor tortor, non dignissim purus rutrum sed. Phasellus sodales, sapien efficitur dictum vehicula,
                neque purus rhoncus lorem, non sodales nibh dolor sed urna
            </div>
            <div class="flex flex-wrap gap-5">
                <div class="mb-4"><b>Mail</b><br>lorem ipsum</div>
                <div class="mb-4"><b>Phone</b><br>0XX XXXXXXX</div>
                <div class="mb-4 mr-auto"><b>Location</b><br> lorem ipsum</div>
                <div class="flex gap-5">
                    <img v-for="i in icons" :src="`/footer/${i.src}.svg`" alt="">
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1059.2840728686945!2d19.818970994996146!3d41.328267745370944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310ffc27b939%3A0x91829d7013798f15!2sSheshi%20Sk%C3%ABnderbej!5e0!3m2!1ssq!2sus!4v1715104816743!5m2!1ssq!2sus" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
            <div class=""></div>
        </div>
    </div>
</template>

<style scoped>

</style>
