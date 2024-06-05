<script setup>
const route = useRoute()

const reviews = [
   {
      name: 'Nicola',
      stars: 5,
      date: 'Febbraio 2024',
      desc: 'Sono stato a Tirana per una chirurgia orale con Dentes e l\'esperienza è stata molto positiva. L\'intervento è stato eseguito con grande professionalità e mi sono sentito sempre a mio agio. L\'unica pecca è stata la lingua, poiché non tutto il personale parlava perfettamente l\'italiano, ma con un po\' di pazienza ci siamo sempre capiti. Consiglio Dentes a chiunque cerchi cure dentali di qualità all\'estero.'
   },
   {
      name: 'Bea',
      stars: 5,
      date: 'Marzo 2024',
      desc: 'Ho scelto Dentes e sono molto contenta della mia scelta. Il team è stato estremamente accogliente e professionale. Il trattamento è stato efficiente e mi hanno sempre spiegato tutto nei minimi dettagli. Un piccolo problema è stato il costo aggiuntivo per alcune procedure non incluse nel preventivo iniziale, ma ne è valsa comunque la pena.'
   },
   {
      name: 'Savio',
      stars: 5,
      date: 'Aprile 2024',
      desc: 'Le nuove protesi sono perfette. Grazie!'
   },
   {
      name: 'Gianni',
      stars: 5,
      date: 'Maggio 2024',
      desc: 'Trattamento eccellente e personale molto gentile. Consigliato!'
   },
   {
      name: 'Chiara',
      stars: 5,
      date: 'Giugno 2024',
      desc: 'Clinica moderna e personale molto competente. Ho potuto godermi anche un concerto all\'aperto nel centro di Tirana! Bellooo!'
   },
   {
      name: 'Giovanni',
      stars: 5,
      date: 'Marzo 2024',
      desc: 'Esperienza fantastica da Dentes. Staff cordiale, clinica moderna. Implantologia eccezionale, risparmiato molto rispetto a casa. Consigliatissimo!'
   },
   {
      name: 'Maria B.',
      stars: 5,
      date: 'Gennaio 2024',
      desc: 'Incredibile! Ricostruzione totale della bocca, risultato perfetto. Team professionale, location splendida.'
   },
   {
      name: 'Luca',
      stars: 5,
      date: 'Maggio 2024',
      desc: 'Ero scettico, ma Dentes ha superato le aspettative. Faccette e sbiancamento eccellenti, risparmi notevoli. Qualità top. Clinica dentale in Albania raccomandata!'
   },
   {
      name: 'Enzo R.',
      stars: 5,
      date: 'Febbraio 2024',
      desc: 'Lavoro eccezionale con i miei impianti dentali. Ho finalmente il sorriso che desideravo da anni. Inoltre, durante la mia permanenza a Tirana, ho avuto l\'opportunità di esplorare il castello di Kruja e Preza. Consiglio vivamente Dentes per la loro professionalità e per l\'esperienza complessiva.'
   },
   {
      name: 'Antonio S.',
      stars: 5,
      date: 'Aprile 2024',
      desc: 'Il mio sorriso è molto più luminoso e naturale. Come bonus, ho approfittato della mia permanenza per esplorare la vibrante città di Tirana.'
   }
];



</script>

<template>
    <div>
        <div class="md:px-20 px-4">
            <div class="text-5xl font-extrabold mb-8">Esperienze dei Pazienti</div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 mb-16">
                <div v-for="(slide, idx) in reviews" class="rev">
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
            </div>
        </div>
        <book-appointment/>
    </div>
</template>

<style scoped>
.rev {
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0 0 12px #00000022;
    border-radius: 16px;
}
</style>
