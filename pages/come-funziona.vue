<script setup>
import pageTop from "~/components/PageTop.vue";
useSeoMeta({
   title: 'Come Funziona il Turismo Dentale con Dentes',
   ogTitle: 'prenotazione e consulenza, pianificazione del trattamento, viaggio e alloggio, supporto post-trattamento, procedure del turismo dentale, organizzazione del viaggio dentale, trattamenti dentali all\'estero, assistenza dentale in Albania',
   description: 'Scopri come funziona il turismo dentale con Dentes. Prenotazione, pianificazione del trattamento, viaggio, alloggio e supporto post-trattamento a Tirana.',
   ogDescription: 'prenotazione e consulenza, pianificazione del trattamento, viaggio e alloggio, supporto post-trattamento, procedure del turismo dentale, organizzazione del viaggio dentale, trattamenti dentali all\'estero, assistenza dentale in Albania',
   ogImage: '',
   twitterCard: 'summary_large_image',
})
let pageTopData = {
   title: 'Come Funziona',
   second: 'Come Funziona il Turismo Dentale con Dentes',
   desc: 'Scopri come funziona il turismo dentale con Dentes. Prenotazione, pianificazione del trattamento, viaggio, alloggio e supporto post-trattamento a Tirana.',
   src: '/comeFunziona/Frame 14.png'
}
const cards = [
   {
      title: 'Prenotazione e Consulenza ',
      desc: 'Il primo passo per iniziare il tuo viaggio dentale è contattarci. Puoi compilare il modulo sul nostro sito o chiamarci per richiedere informazioni sui trattamenti disponibili. La nostra squadra ti risponderà prontamente per fornirti tutte le informazioni necessarie. Una volta ricevuta la tua richiesta, organizzeremo una consulenza personalizzata. Durante questa fase, i nostri specialisti esamineranno la tua situazione dentale attraverso foto, radiografie o videochiamate, per elaborare un piano di trattamento su misura per te.',
   },
   {
      title: 'Pianificazione del Trattamento ',
      desc: 'Dopo la consulenza iniziale, i nostri dentisti elaboreranno un piano di trattamento dettagliato. Questo piano includerà tutte le procedure necessarie, i tempi previsti e i costi. Ti forniremo tutte le informazioni necessarie per prendere una decisione informata. Una volta approvato il piano di trattamento, ti assisteremo nell\'organizzazione del viaggio. Ti aiuteremo a prenotare il volo, scegliere l\'alloggio e pianificare il tuo soggiorno a Tirana, garantendo che tutto sia pronto per il tuo arrivo.',
   },
   {
      title: 'Viaggio e Alloggio',
      desc: 'Al tuo arrivo a Tirana, il nostro team ti accoglierà e ti accompagnerà presso il tuo alloggio. Offriamo una gamma di opzioni di alloggio per soddisfare tutte le esigenze, dal comfort economico alle soluzioni di lusso. Organizziamo tutti i trasferimenti necessari tra l\'aeroporto, l\'alloggio e la nostra clinica dentale. Il nostro obiettivo è rendere il tuo soggiorno il più piacevole e privo di stress possibile, permettendoti di concentrarti sul trattamento.',
   },
   {
      title: 'Supporto Post-Trattamento',
      desc: 'Dopo aver completato il trattamento, il nostro supporto non si ferma. Offriamo assistenza continua per assicurarti una completa guarigione e il mantenimento dei risultati ottenuti. Sarai in contatto con il nostro team per qualsiasi necessità o domanda. Per garantire il successo a lungo termine dei trattamenti, organizzeremo follow-up e controlli periodici. Potrai inviarci aggiornamenti e ricevere consigli su come prenderti cura del tuo nuovo sorriso anche dopo il ritorno a casa.',
   },
]
</script>

<template>
   <div>
      <page-top :data="pageTopData"/>
      <div style="padding: 0px 6dvw;">
         <h1 class="font-extrabold md:text-5xl text-4xl lg:pt-12 pt-4 pb-4 mb-5">
            Come Funziona il Turismo Dentale con Dentes
         </h1>
         <div class="lg:text-sm text-xs">
            Sei interessato a ricevere cure dentali di alta qualità all'estero? Scopri come funziona il turismo dentale con Dentes. Dal primo contatto alla pianificazione del trattamento e oltre, ti offriamo un'esperienza senza stress e completamente organizzata. Vuoi sapere di più su come funziona il turismo dentale con Dentes? Contattaci oggi stesso per una consulenza personalizzata e inizia il tuo percorso verso un sorriso perfetto con la sicurezza di un servizio professionale e completo.
         </div>
         <div class="flex flex-wrap mt-5 justify-center mb-10" style="gap: 3dvw;">
            <div v-for="(item, idx) in cards" class="card">
               <div class="flex gap-5">
                  <div class="font-extrabold text-6xl" style="color: #0A80FD">{{idx+1}}</div>
                  <div>
                     <div class="font-extrabold">{{ item.title }}</div>
                     <div class="text-sm mt-5">{{item.desc}}</div>
                  </div>
               </div>
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