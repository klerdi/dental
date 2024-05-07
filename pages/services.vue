<script setup>
const route = useRoute()
const services = [
    {
        title: 'Dental Implants',
        desc: 'Restore your smile and improve chewing function with our state-of-the-art dental implant solutions',
        img:'Frame352.png'
    },
    {
        title: 'Cosmetic Dentistry',
        desc: 'Get the smile you\'ve always wanted with our cosmetic dentistry services, including teeth whitening, veneers',
        img:'Frame354.png'
    },
    {
        title: 'Orthodontics',
        desc: 'Align your smile with our orthodontic treatments, including traditional braces and clear aligners',
        img:'Frame355.png'
    },
    {
        title: 'Dental Crowns and Bridges',
        desc: 'Repair damaged teeth and replace missing ones with our custom-made crowns and bridges',
        img:'Frame356.png'
    },
    {
        title: 'Root Canal Treatment',
        desc: 'Save infected or damaged teeth from extraction with our gentle and effective root canal therapy',
        img:'Frame357.png'
    },
    {
        title: 'Dentures',
        desc: 'Regain confidence in your smile and ability to eat with our natural-looking denture solutions',
        img:'Frame358.png'
    },
]
</script>

<template>
<div>
    <div class="px-8 mx-auto my-16 " style="max-width: 90rem">
        <div class="text-5xl font-extrabold mb-8">Testimonials</div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            <div v-for="item in services" class="m-auto" style="max-width: 447px">
                <img :src="`/services/${item.img}`" alt="">
                <div class="mb-3">
                    <div class="text-lg font-extrabold my-4">{{item.title}}</div>
                    <div class="text-sm">{{item.desc}}</div>
                </div>
            </div>
        </div>
    </div>
    <book-appointment/>

</div>
</template>

<style scoped>

</style>
