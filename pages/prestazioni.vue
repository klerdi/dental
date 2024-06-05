<script setup>
const route = useRoute()
const services = [
    {
        title: 'Implantologia Dentale a Tirana',
        desc: 'La nostra clinica offre impianti dentali di alta qualità a Tirana, Albania. Gli impianti dentali sono la soluzione ideale per sostituire i denti mancanti, garantendo una lunga durata e un aspetto naturale. Utilizziamo le tecnologie più avanzate per garantire risultati eccellenti.',
        img:'Frame352.png',
       link:'/impianti-dentali-in-albania'
    },
    {
        title: 'Ortodonzia',
        desc: 'Offriamo trattamenti ortodontici personalizzati per correggere le malocclusioni e migliorare l\'allineamento dei denti. I nostri ortodontisti a Tirana utilizzano apparecchi tradizionali e invisibili per soddisfare le esigenze di ogni paziente.',
        img:'Frame355.png',
       link:'/visita-ortodontica-a-tirana'
    },
   {
      title: 'Sbiancamento Dentale',
      desc: 'Il nostro servizio di sbiancamento dentale a Tirana ti permette di ottenere un sorriso luminoso e brillante. Utilizziamo metodi sicuri ed efficaci per rimuovere le macchie dai denti e restituire la loro naturale brillantezza.',
      img:'Frame351.png',
      link:'/sbiancamento-dentale'
   },
    {
        title: 'Endodonzia',
        desc: 'I nostri esperti in endodonzia a Tirana offrono terapiei canalari professionali per salvare denti gravemente danneggiati o infetti. Utilizziamo tecniche avanzate per garantire la massima precisione e comfort.',
        img:'Frame357.png',
       link:'/endodonzia'
    },
   {
      title: 'Protesi Dentali',
      desc: 'Le nostre protesi dentali sono progettate su misura per ogni paziente, garantendo una perfetta vestibilità e funzionalità. Offriamo una gamma completa di protesi, dalle parziali alle totali.',
      img:'Frame356.png',
      link:'/protesi-dentali'
   },
   {
      title: 'Chirurgia Orale',
      desc: 'I nostri chirurghi orali eseguono interventi sicuri ed efficaci per trattare una varietà di condizioni dentali. Siamo specializzati in estrazioni complesse, biopsie e altre procedure chirurgiche.',
      img:'Frame353.png',
      link:'/chirurgia-orale'
   },
   {
      title: 'Odontoiatria Estetica a Tirana',
      desc: 'La nostra clinica offre trattamenti di odontoiatria estetica per migliorare l\'aspetto del tuo sorriso. Utilizziamo le tecniche più recenti per correggere imperfezioni e ottenere risultati naturali.',
      img:'Frame354.png',
      link:'/odontoiatria-estetica'
   },
    {
        title: 'Parodontologia - Salute delle Gengive',
        desc: 'I nostri specialisti in parodontologia a Tirana si occupano della salute delle gengive, trattando e prevenendo le malattie parodontali. Offriamo cure complete per mantenere le tue gengive sane e forti',
        img:'Frame358.png',
       link:'/parodontologia'
    },
]
</script>

<template>
<div>
    <div class="px-8 mx-auto my-16 " style="max-width: 90rem">
        <div class="text-5xl font-extrabold mb-8">PRESTAZIONI</div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            <div v-for="item in services" class="m-auto" style="max-width: 447px; min-height: 25rem;">
                <nuxt-link :to="item.link">
                    <img :src="`/services/${item.img}`" alt="">
                </nuxt-link>
                <div class="mb-3">
                    <div class="text-lg font-extrabold my-4">{{item.title}}</div>
                    <div class="text-sm">{{item.desc}}</div>
                </div>
            </div>
        </div>
    </div>
    <book-appointment/></div>
</template>

<style scoped>

</style>
