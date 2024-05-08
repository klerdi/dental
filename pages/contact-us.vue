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
    <div style="max-width: 100rem" class="mx-auto my-16 px-8">
        <div class="text-5xl font-extrabold mb-8">Contact Us</div>
        <div class="grid lg:grid-cols-3" >
            <div class="lg:col-span-2">
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
                <iframe class="mt-auto-auto"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1059.2840728686945!2d19.818970994996146!3d41.328267745370944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310ffc27b939%3A0x91829d7013798f15!2sSheshi%20Sk%C3%ABnderbej!5e0!3m2!1ssq!2sus!4v1715104816743!5m2!1ssq!2sus"
                    width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="m-auto pt-8">
                <div class="bookApp" style="max-width: 22rem;">
                    <div class="text-md text-center font-extrabold text-white mb-6">Get in Touch</div>
                    <div>
                        <label for="name">Full Name</label><br>
                        <input type="text" id="name">
                    </div>
                    <div>
                        <label for="phone">Your Phone</label><br>
                        <input type="text" id="phone">
                    </div>
                    <div>
                        <label for="treatment">Type of Treatment</label><br>
                        <select id="treatment" name="treatmentlist" form="treatmentform">
                            <option value="dentalImplants">Dental Implants</option>
                            <option value="cosmeticDentistry">Cosmetic Dentistry</option>
                            <option value="orthodontics">Orthodontics</option>
                            <option value="dentalCrownsAndBridges">Dental Crowns and Bridges</option>
                            <option value="rootCanalTreatment">Root Canal Treatment</option>
                            <option value="dentures">Dentures</option>
                        </select>
                    </div>

                    <div>
                        <label for="time">Time</label><br>
                        <select id="time" name="timelist" form="timeform">
                            <option v-for="(item, idx) in 12" value="idx + 8">{{ idx + 8 + ':00 - ' }}{{
                                    idx + 9 + ':00'
                                }}
                            </option>
                        </select>
                    </div>
                    <button class="mainButton w-full mt-4">Send</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
label {
    color: white;
    font-weight: 500;
    font-size: 15px;
}

select, input {
    margin-top: 0.5rem;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 1rem;
}

.bookApp {
    background: #0A80FD;
    border-radius: 16px;
    padding: 2rem;
    margin: 0 5dvw;
}
</style>
