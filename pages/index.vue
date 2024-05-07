<script setup>
const settings = {
    itemsToShow: 1,
    snapAlign: 'center',
}
const breakpoints = {
    // 700px and up
    650: {
        itemsToShow: 1.5,
        snapAlign: 'center',
    },
    950: {
        itemsToShow: 3,
        snapAlign: 'center',
    },
}
const services = [
    {
        title: 'Dental Implants',
        desc: 'Restore your smile and improve chewing function with our state-of-the-art dental implant solutions'
    },
    {
        title: 'Cosmetic Dentistry',
        desc: 'Get the smile you\'ve always wanted with our cosmetic dentistry services, including teeth whitening, veneers'
    },
    {
        title: 'Orthodontics',
        desc: 'Align your smile with our orthodontic treatments, including traditional braces and clear aligners'
    },
    {
        title: 'Dental Crowns and Bridges',
        desc: 'Repair damaged teeth and replace missing ones with our custom-made crowns and bridges'
    },
    {
        title: 'Root Canal Treatment',
        desc: 'Save infected or damaged teeth from extraction with our gentle and effective root canal therapy'
    },
    {
        title: 'Dentures',
        desc: 'Regain confidence in your smile and ability to eat with our natural-looking denture solutions'
    },
]
const slides = [
    {
        name: 'John Smith',
        img: 'Frame23.png',
        stars: 5,
        date: 'March 2024',
        desc: 'I had a fantastic experience at SmileBright Dental Clinic during my dental tourism trip. The staff was incredibly friendly and accommodating, and the clinic itself was modern and clean. I underwent dental implant surgery, and the results exceeded my expectations. Not only did I save money compared to getting the procedure done in my home country, but the quality of care was exceptional. I highly recommend SmileBright Dental Clinic to anyone considering dental tourism!',
    },
    {
        name: 'Emily Jones',
        img: 'Frame232.png',
        stars: 5,
        date: 'January 2024',
        desc: 'I can\'t say enough good things about ToothCare International. I traveled from the UK for a full mouth reconstruction, and I couldn\'t be happier with the results. The team was professional, skilled, and made me feel comfortable throughout the entire process. The communication was seamless, and I appreciated how they tailored the treatment plan to meet my specific needs. Plus, the location was stunning, making my dental tourism experience truly enjoyable. Thank you, ToothCare International, for giving me a reason to smile again!',
    },
    {
        name: 'Mary Chang',
        img: 'Frame234.png',
        stars: 5,
        date: 'December 2023',
        desc: 'As someone who was hesitant about dental tourism, I can confidently say that BrightSmile Clinic exceeded my expectations. From the moment I reached out for a consultation to the final follow-up appointment, the level of care and attention to detail was unmatched. I underwent cosmetic dentistry procedures, including veneers and teeth whitening, and the results were life-changing. Not only did I save money compared to quotes I received back home, but the quality of work was top-notch. I wouldn\'t hesitate to recommend BrightSmile Clinic to anyone considering dental tourism.',
    },
]
const myCarousel = ref(null)
</script>

<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div style="padding: 0 8dvw 0 8dvw">
                <h1 class="font-extrabold xl:text-6xl lg:text-4xl text-3xl lg:pt-16 md:pt-12 pb-8">Your Guide to <b
                    class="coloBlue">Dental</b> Tourism Excellence</h1>
                <div class="md:text-sm text-xs text-gray-400">Let us be your trusted companion in unlocking the benefits of dental
                    tourism
                    and helping you achieve your perfect smile, wherever your adventures take you
                </div>
                <div class="flex flex-wrap gap-5 lg:mt-16 mt-8">
                    <button class="secondaryButton">Book now</button>
                    <div class="flex gap-2 leading-9 w-[148px]">
                        Explore more
                        <img src="/icon/arrow2.svg" alt=""></div>
                </div>
            </div>
            <div style="padding: 0 8dvw 0 8dvw" class="relative">
                <div class="absolute frameStyle font-medium" style="bottom: 23dvw; right: 3dvw;">
                    <img src="/icon/userTick.svg" alt="">
                    3293 <br> Happy Patients
                </div>
                <img src="/home/Frame4.png" alt="img">
                <div class="absolute frameStyle font-medium" style="bottom: 10dvw; left: 3dvw;">
                    <img src="/icon/calendar.svg" alt="">
                    Easy Online <br> Appointment
                </div>
            </div>
        </div>
        <div class="bgLightBlue grid grid-cols-1 md:grid-cols-2 py-16">
            <div class="pr-8">
                <img src="/home/Frame14.png" alt="">
            </div>
            <div style="padding: 4rem 7dvw">
                <div class="md:text-5xl text-3xl font-extrabold mb-12">
                    Services
                </div>
                <div class="text-sm mb-12">
                    Whether you're seeking routine preventive care or advanced restorative treatments, our experienced
                    team is dedicated to providing personalized care in a comfortable and welcoming environment. Below
                    are some of the services we offer:
                </div>
                <div class="grid grid-cols-2 gap-5">
                    <div v-for="service in services">
                        <div class="text-lg font-extrabold">{{ service.title }}</div>
                        <div class="text-xs">{{ service.desc }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="padding: 8rem 7dvw">
            <div class="flex mb-12">
                <div class="md:text-5xl text-3xl font-extrabold">
                    What they say?
                </div>
                <div class="ml-auto flex gap-5">
                    <button @click="myCarousel.prev()"><img style="transform: scaleX(-1)" src="/icon/arrow3.svg" alt="<"></button>
                    <button @click="myCarousel.next()"><img src="/icon/arrow3.svg" alt=">"></button>
                </div>
            </div>
            <carousel v-bind="settings" :wrap-around="true" ref="myCarousel" :breakpoints="breakpoints">
                <Slide v-for="slide in slides" :key="slide">
                    <div class="carousel__item">
                        <div class="flex flex-wrap">
                            <div class="flex mr-auto">
                                <img :src="`/home/${slide.img}`" alt="" class="mr-4">
                                <div class="text-left">
                                    <div class=" text-lg font-extrabold">{{ slide.name }}</div>
                                    <div class="text-xs">{{ slide.date }}</div>
                                </div>
                            </div>
                            <div class="flex gap-1">
                                <img v-for="star in slide.stars" src="/icon/star.svg" alt="">
                            </div>
                        </div>
                        <div class="text-left text-xs mt-4">
                            {{ slide.desc }}
                        </div>
                    </div>
                </Slide>
            </carousel>
        </div>
        <book-appointment/>
    </div>
</template>

<style scoped>
.carousel__item {
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0 0 12px #00000022;
    border-radius: 16px;
}

.frameStyle {
    border-radius: 12px;
    padding: 8px;
    display: flex;
    width: 170px;
    height: 60px;
    background: #FEFEFE;
    box-shadow: 0 0 15px #0000000D;
    font-size: 14px;
    gap: 10px;
}
</style>
