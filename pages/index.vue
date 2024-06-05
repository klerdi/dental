<script setup>
useSeoMeta({
    title: 'Dentisti in Albania - Turismo Dentale con Dentes',
    ogTitle: 'dentisti in albania, dentes, turismo dentale, turismo dentale in albania, turismo dentale albania recensioni, clinica dentale in albania, dentisti a tirana',
    description: 'Dentisti in Albania con Dentes: turismo dentale conveniente e professionale. Scopri i nostri servizi e leggi le recensioni dei nostri pazienti soddisfatti.',
    ogDescription: 'dentisti in albania, dentes, turismo dentale, turismo dentale in albania, turismo dentale albania recensioni, clinica dentale in albania, dentisti a tirana',
    ogImage: '',
    twitterCard: 'summary_large_image',
})
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
        title: 'Impianti Dentali',
        desc: 'Ripristina il tuo sorriso e migliora la funzione masticatoria con le nostre soluzioni all\'avanguardia di impianti dentali presso Dentes, i tuoi dentisti in Albania di fiducia.'
    },
    {
        title: 'Odontoiatria Estetica',
        desc: 'Ottieni il sorriso che hai sempre desiderato con i nostri servizi di odontoiatria estetica, inclusi sbiancamento dentale e faccette.'
    },
    {
        title: 'Ortodonzia',
        desc: 'Allinea il tuo sorriso con i nostri trattamenti ortodontici, inclusi apparecchi tradizionali e allineatori trasparenti. Scegli Dentes per dentisti affidabili in Albania.'
    },
    {
        title: 'Corone e Ponti Dentali',
        desc: 'Ripara denti danneggiati e sostituisci quelli mancanti con le nostre corone e ponti su misura, forniti da dentisti esperti in Albania.'
    },
    {
        title: 'Terapia Canalare',
        desc: 'Salva denti infetti o danneggiati dall\'estrazione con la nostra terapia canalare delicata ed efficace.'
    },
    {
        title: 'Dentures',
        desc: 'Regain confidence in your smile and ability to eat with our natural-looking denture solutions'
    },
]
const slides = [
    {
        name: 'Giovanni',
        img: 'Frame23.png',
        stars: 5,
        date: 'Marzo 2024',
        desc: 'Esperienza fantastica da Dentes. Staff cordiale, clinica moderna. Implantologia eccezionale, risparmiato molto rispetto a casa. Consigliatissimo!',
    },
    {
        name: 'Maria B',
        img: 'Frame232.png',
        stars: 5,
        date: 'Gennaio 2024',
        desc: 'Incredibile! Ricostruzione totale della bocca, risultato perfetto. Team professionale, location splendida. ',
    },
    {
        name: 'Lucia',
        img: 'Frame234.png',
        stars: 5,
        date: 'Maggio 2024',
        desc: 'Ero scettico, ma Dentes ha superato le aspettative. Faccette e sbiancamento eccellenti, risparmi notevoli. Qualità top. Clinica dentale in Albania raccomandata!',
    },
    {
        name: 'Enzo R.',
        img: '',
        stars: 5,
        date: '',
        desc: 'Lavoro eccezionale con i miei impianti dentali. Ho finalmente il sorriso che desideravo da anni. Inoltre, durante la mia permanenza a Tirana, ho avuto l\'opportunità di esplorare il castello di Kruja e Preza. Consiglio vivamente Dentes per la loro professionalità e per l\'esperienza complessiva.',
    },
    {
        name: 'Antonio S.',
        img: '',
        stars: 5,
        date: '',
        desc: 'Il mio sorriso è molto più luminoso e naturale. Come bonus, ho approfittato della mia permanenza per esplorare la vibrante città di Tirana',
    },
]
const myCarousel = ref(null)
</script>

<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div style="padding: 0 8dvw 0 8dvw">
                <h1 class="font-extrabold xl:5xl lg:text-4xl text-3xl lg:pt-16 md:pt-12 pb-8">
                    Dentisti in Albania - Dentes,
                    <b class="coloBlue">Il Tuo Partner</b>
                    di Fiducia per il Turismo Dentale
                </h1>
                <div class="md:text-sm text-xs text-gray-400">
                    Scopri i vantaggi del turismo dentale in Albania con Dentes. Ti aiutiamo a ottenere il sorriso che desideri grazie ai nostri servizi dentali professionali.
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
                    Prestazioni odontoiatriche
                </div>
                <div class="text-sm mb-12">
                    Che tu stia cercando cure preventive di routine o trattamenti restaurativi avanzati, il nostro team esperto è dedicato a fornire cure personalizzate in un ambiente confortevole e accogliente. Di seguito alcuni dei servizi che offriamo:
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
                    Turismo dentale Albania Recensioni
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
                                <img v-for="star in slide.stars" src="/icon/star.svg" alt="" style="max-width: 20px">
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
