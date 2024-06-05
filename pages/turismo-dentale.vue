<script setup>
import pageTop from "~/components/PageTop.vue";
useSeoMeta({
   title: 'Turismo Dentale | Trattamenti Dentali di Qualità con Dentes',
   ogTitle: 'turismo dentale, viaggi per cure dentali, turismo odontoiatrico, trattamenti dentali all\'estero, cure dentali di qualità, viaggi per trattamenti odontoiatrici, dentista all\'estero, turismo dentale in Albania',
   description: 'Scopri il turismo dentale con Dentes. Viaggi per cure dentali di alta qualità e a prezzi accessibili in Albania. Prenota ora e contattaci per informazioni.',
   ogDescription: 'turismo dentale, viaggi per cure dentali, turismo odontoiatrico, trattamenti dentali all\'estero, cure dentali di qualità, viaggi per trattamenti odontoiatrici, dentista all\'estero, turismo dentale in Albania',
   ogImage: '',
   twitterCard: 'summary_large_image',
})
let pageTopData = {
   title: 'Turismo Dentale',
   second: 'Trattamenti Dentali di Qualità con Dentes',
   desc: 'Il turismo dentale è una soluzione conveniente per chi cerca cure dentali di alta qualità a prezzi accessibili. Con Dentes, puoi combinare i tuoi trattamenti odontoiatrici con una piacevole esperienza di viaggio, ricevendo cure eccellenti da professionisti qualificati.  Scopri il turismo dentale con Dentes. Viaggi per cure dentali di alta qualità e a prezzi accessibili in Albania. Prenota ora e contattaci per informazioni.',
   src: '/turismoDentale/Frame 14.png'
}
</script>

<template>
   <div>
      <page-top :data="pageTopData"/>
      <div class="flex-wrap flex bgLightBlue justify-center" style="padding: 2rem 2rem 0 2rem">
         <div style="max-width: 28rem; padding-top: 6dvw">
            <div class="md:text-5xl text-3xl font-extrabold mb-12">
               Cos'è il Turismo Dentale?
            </div>
            <div class="text-sm">
               Il turismo dentale implica viaggiare all'estero per ricevere trattamenti odontoiatrici. Molti pazienti scelgono questa opzione per risparmiare sui costi senza compromettere la qualità delle cure. A Tirana, offriamo pacchetti completi che includono trattamenti e assistenza durante tutto il soggiorno.
               <br style="margin-bottom: 1rem;">
               Garantiamo trattamenti dentali di alta qualità in una cornice accogliente e professionale.
            </div>
         </div>
         <img src="/turismoDentale/Frame 143.png" alt="" class="mx-8">
         <div style="max-width: 28rem; padding: 6dvw 0">
            <div class="md:text-5xl text-3xl font-extrabold mb-12">
               Benefici del Turismo Odontoiatrico
            </div>
            <div class="flex">
               <div><img src="/icon/dollar.svg" alt=""></div>
               <div style="margin: 0 0 1rem 0.5rem">Costi ridotti</div>
            </div>
            <div class="flex">
               <div><img src="/icon/ppl.svg" alt=""></div>
               <div style="margin: 0 0 1rem 0.5rem">Accesso a specialisti esperti </div>
            </div>
            <div class="flex">
               <div><img src="/icon/plane.svg" alt=""></div>
               <div style="margin: 0 0 1rem 0.5rem">La possibilità di combinare le cure dentali con una vacanza</div>
            </div>
         </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 py-16">
         <div class="pr-8">
            <img src="/turismoDentale/Frame 142.png" alt="" style="border-radius: 0 25rem  25rem  0;">
         </div>
         <div style="padding: 4rem 7dvw">
            <div class="md:text-5xl text-3xl font-extrabold mb-12">
               Trattamenti Dentali di Qualità all'Estero
            </div>
            <div class="text-sm mb-6 font-extrabold">
               Cure Dentali di Alta Qualità
            </div>
            <div class="text-sm mb-8">
               Presso la nostra clinica a Tirana, forniamo trattamenti dentali all'avanguardia utilizzando le ultime tecnologie. I nostri dentisti altamente qualificati assicurano che ogni paziente riceva cure personalizzate e di alta qualità.
            </div>
            <div class="text-sm mb-6 font-extrabold">
               Viaggi per Trattamenti Odontoiatrici
            </div>
            <div class="text-sm">
               Organizzare un viaggio per trattamenti odontoiatrici è semplice con Dentes. Offriamo supporto completo, inclusi trasferimenti, alloggi e assistenza durante il soggiorno, per garantire un'esperienza senza stress.
               <br style="margin-bottom: 1rem;">
               Contattaci oggi stesso per scoprire come il turismo dentale con Dentes può migliorare il tuo sorriso e offrire un'esperienza di viaggio unica.
               <br style="margin-bottom: 1rem;">
               Prenota una consulenza!
            </div>
         </div>
      </div>
      <book-appointment/>
   </div>
</template>

<style scoped>
.card {
   padding: 2rem 1rem;
   max-width: 38rem;
   background: #FEFEFE;
   box-shadow: 0 2px 13px #00000017;
}
</style>