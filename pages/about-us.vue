<script setup>
const route = useRoute()
const myCarousel = ref(null)
const settings = {
    itemsToShow: 1,
    snapAlign: 'center',
}
const breakpoints = {
    // 700px and up
    650: {
        itemsToShow: 2.5,
        snapAlign: 'center',
    },
    950: {
        itemsToShow: 4,
        snapAlign: 'start',
    },
}
const slides = [
    {
        name: 'Name of the doctor',
        title: 'Dental surgeon',
        img: 'doc1.png'
    },
    {
        name: 'Name of the doctor',
        title: 'Dental surgeon',
        img: 'doc2.png'
    },
    {
        name: 'Name of the doctor',
        title: 'Dental surgeon',
        img: 'doc3.png'
    },
    {
        name: 'Name of the doctor',
        title: 'Dental surgeon',
        img: 'doc4.png'
    },
]
</script>

<template>
<div>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div style="padding: 0 6dvw 0 6dvw">
            <h1 class="font-extrabold md:text-6xl text-4xl lg:pt-12 pt-4 pb-4">About us</h1>
            <div class="lg:text-sm text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus porttitor tortor, non dignissim purus rutrum sed. Phasellus sodales, sapien efficitur dictum vehicula, neque purus rhoncus lorem, non sodales nibh dolor sed urna. Quisque quis lorem ut ligula sollicitudin feugiat ut vel justo. Nulla aliquam lacinia enim, quis tincidunt dui dapibus eu. Integer elementum magna ut nisl pharetra congue. Nulla efficitur egestas lacinia. Nunc gravida diam et purus laoreet mattis. Cras vestibulum, lectus sit amet congue gravida, odio lacus molestie erat, nec semper neque massa nec nunc. Sed dictum a lectus non vulputate
            </div>
            <div class="flex flex-wrap gap-5 lg:mt-16 md:mt-8 mt-4">
                <button class="secondaryButton">Contact</button>
                <div class="flex gap-2 leading-9 w-[145px]">
                    Guarantees
                    <img src="/icon/arrow2.svg" alt=""></div>
            </div>
        </div>
        <div style="padding: 0 0 0 3dvw">
            <img src="/aboutUs/Frame14.png" alt="img">
        </div>
    </div>
    <div style="padding: 8rem 7dvw">
        <div class="flex mb-12">
            <div class="md:text-5xl text-3xl font-extrabold">
                Our doctors
            </div>
            <div class="ml-auto flex gap-5">
                <button @click="myCarousel.prev()"><img style="transform: scaleX(-1)" src="/icon/arrow3.svg" alt="<"></button>
                <button @click="myCarousel.next()"><img src="/icon/arrow3.svg" alt=">"></button>
            </div>
        </div>
        <carousel v-bind="settings" :wrap-around="true" ref="myCarousel" :breakpoints="breakpoints">
            <Slide v-for="slide in slides" :key="slide">
                <div class="carousel__item">
                    <div class="mx-2">
                            <img :src="`/aboutUs/${slide.img}`" alt="" class="mb-4">
                            <div class="text-center">
                                <div class="mb-2 text-lg font-extrabold">{{ slide.name }}</div>
                                <div class="text-xs">{{ slide.title }}</div>
                            </div>
                    </div>
                </div>
            </Slide>
        </carousel>
    </div>
    <div class="bgLightBlue grid grid-cols-1 md:grid-cols-2 py-16">
        <div class="pr-8">
            <img src="/aboutUs/Frame339.png" alt="">
        </div>
        <div style="padding: 20% 7dvw 4rem 7dvw">
            <div class="md:text-5xl text-3xl font-extrabold mb-12">
                Our method
            </div>
            <div class="text-sm mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus porttitor tortor, non dignissim purus rutrum sed. Phasellus sodales, sapien efficitur dictum vehicula, neque purus rhoncus lorem, non sodales nibh dolor sed urna. Quisque quis lorem ut ligula sollicitudin feugiat ut vel justo. Nulla aliquam lacinia enim, quis tincidunt dui dapibus eu. Integer elementum magna ut nisl pharetra congue. Nulla efficitur egestas lacinia. Nunc gravida diam et purus laoreet mattis. Cras vestibulum, lectus sit amet congue gravida, odio lacus molestie erat, nec semper neque massa nec nunc. Sed dictum a lectus non vulputate
            </div>

        </div>
    </div>
    <div class=" grid grid-cols-1 md:grid-cols-2 py-16">
        <div style="padding: 20% 7dvw 4rem 7dvw">
            <div class="md:text-5xl text-3xl font-extrabold mb-12">
                Our guarantees
            </div>
            <div class="text-sm mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus porttitor tortor, non dignissim purus rutrum sed. Phasellus sodales, sapien efficitur dictum vehicula, neque purus rhoncus lorem, non sodales nibh dolor sed urna. Quisque quis lorem ut ligula sollicitudin feugiat ut vel justo. Nulla aliquam lacinia enim, quis tincidunt dui dapibus eu. Integer elementum magna ut nisl pharetra congue. Nulla efficitur egestas lacinia. Nunc gravida diam et purus laoreet mattis. Cras vestibulum, lectus sit amet congue gravida, odio lacus molestie erat, nec semper neque massa nec nunc. Sed dictum a lectus non vulputate
            </div>
        </div>
        <div class="pl-8">
            <img src="/aboutUs/Frame342.png" alt="" class="ml-auto">
        </div>
    </div>
    <book-appointment/>
</div>
</template>

<style scoped>

</style>
