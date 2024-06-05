<script setup>
import pageTop from "~/components/PageTop.vue";
let pageTopData = {
    title: 'Perché l\'Albania',
    second: 'Turismo Dentale | Trattamenti Dentali di Qualità con Dentes',
    desc: 'Scopri il turismo dentale con Dentes. Viaggi per cure dentali di alta qualità e a prezzi accessibili in Albania. Prenota ora e contattaci per informazioni.',
    src: '/perche/Frame 14.png'
}
const cards = [
    {
        title: 'Vantaggi Economici - Prezzi Competitivi ',
        desc: 'Uno dei principali motivi per scegliere l\'Albania è il costo significativamente inferiore delle cure dentali rispetto a molti altri paesi. A Tirana, puoi risparmiare fino al 70% sui trattamenti senza compromettere la qualità.',
        src: '/icon/price.svg',
    },
    {
        title: 'Alta Qualità delle Cure Dentali ',
        desc: 'Nonostante i prezzi ridotti, le cure dentali in Albania sono di alta qualità. I nostri dentisti a Tirana sono altamente qualificati e utilizzano attrezzature moderne per garantire i migliori risultati possibili.',
        src: '/icon/tooth.svg',
    },
    {
        title: 'Facilità di Accesso e Tempo - Viaggi Comodi dall\'Italia ',
        desc: 'Tirana è facilmente raggiungibile dall\'Italia con voli brevi e frequenti. Questo rende l\'Albania una scelta conveniente per chi cerca cure dentali di qualità senza dover affrontare lunghi viaggi.',
        src: '/icon/location.svg',
    },
    {
        title: 'Tempistiche Ridotte ',
        desc: 'Grazie all\'efficienza dei nostri servizi, i trattamenti dentali in Albania richiedono spesso meno tempo rispetto ad altri paesi. Questo ti permette di completare le cure durante una breve vacanza.',
        src: '/icon/time.svg',
    },
    {
        title: 'Scoprire le attrazioni turistiche in Albania',
        desc: 'Oltre a ricevere cure dentali eccellenti, puoi approfittare della tua visita per esplorare le bellezze dell\'Albania. Dalle spiagge incontaminate del sud ai siti storici e culturali di Tirana, l\'Albania offre numerose attrazioni turistiche.',
        src: '/icon/shqipe.svg',
    },
    {
        title: 'Esperienze Culturali e Gastronomiche ',
        desc: 'L\'Albania è ricca di cultura e tradizioni. Durante il tuo soggiorno, puoi gustare la deliziosa cucina locale, visitare musei e partecipare a eventi culturali, rendendo il tuo viaggio una vera e propria esperienza a tutto tondo.',
        src: '/icon/idk.svg',
    },
]
</script>

<template>
<div>
    <page-top :data="pageTopData"/>
    <div style="padding: 0px 6dvw;">
        <h1 class="font-extrabold md:text-5xl text-4xl lg:pt-12 pt-4 pb-4 mb-5">
            Perché scegliere l'Albania per il Turismo Dentale?
        </h1>
        <div class="lg:text-sm text-xs">
            L'Albania è diventata una meta popolare per il turismo dentale grazie ai suoi prezzi competitivi, alla qualità delle cure dentali e alle numerose attrazioni turistiche. Scopri perchè sempre più persone scelgono l'Albania per migliorare il loro sorriso con Dentes. Contattaci oggi stesso per maggiori informazioni sui nostri pacchetti e prenota una consulenza per iniziare il tuo viaggio verso un sorriso più sano e bello.
        </div>
        <div class="flex flex-wrap mt-5 justify-center mb-10" style="gap: 3dvw;">
            <div v-for="item in cards" class="card">
                <div class="flex gap-5">
                    <div><img :src="item.src" alt=""></div>
                    <div class="font-extrabold">{{ item.title }}</div>
                </div>
                <div class="text-sm mt-5">{{item.desc}}</div>
            </div>
        </div>
    </div>
    <book-appointment/>
</div>
</template>

<style scoped>
.card {
    padding: 2rem 1rem;
    max-width: 26rem;
    background: #FEFEFE;
    box-shadow: 0 2px 13px #00000017;
}
</style>