<script setup lang="ts">

</script>

<template>
<div style="background: linear-gradient(0, #EEF5FF 50%, #FEFEFE 50%)">
<div class="bookApp">
    <div class="text-5xl font-extrabold text-white mb-8">Book an Appointment</div>
    <div class="grid md:grid-cols-2 mb-8">
        <div class="grid grid-cols-2 gap-5">
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
                <option v-for="(item, idx) in 12" value="idx + 8">{{ idx + 8 + ':00 - ' }}{{ idx + 9 + ':00' }}</option>
            </select>
            </div>
        </div>
        <div class="text-white py-8 md:pl-16">
            <div class="text-sm mb-8">
                Share your concerns with us, schedule an appointment, and receive expert advice from specialists in the field associated with this project
            </div>
            <div class="flex flex-wrap gap-20">
                <div>
                    <div class="font-extrabold text-lg mb-2">
                        Mail
                    </div>
                    <div class="text-sm">
                        lorem ipsum
                    </div>
                </div>
                <div>
                    <div class="font-extrabold text-lg mb-2">
                        Phone
                    </div>
                    <div class="text-sm">
                        0XX XXXXXXX
                    </div>
                </div>
                <div>
                    <div class="font-extrabold text-lg mb-2">
                        Location
                    </div>
                    <div class="text-sm">
                        lorem ipsum
                    </div>
                </div>
            </div>

        </div>
    </div>

    <button class="mainButton">Book</button>
</div>
</div>
</template>

<style scoped>
label{
    color: white;
    font-weight: 500;
    font-size: 15px;
}
select, input{
    margin-top: 0.5rem;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    width: 100%;
}
.bookApp{
    background: #0A80FD;
    border-radius: 33px;
    padding: 5dvw;
    margin: 0 5dvw;
}
</style>