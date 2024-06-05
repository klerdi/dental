<script setup >
const props = defineProps(['data'])
const data  = props.data
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div style="padding: 0 6dvw 0 6dvw">
            <h1 class="font-extrabold md:text-5xl text-4xl lg:pt-12 pt-4 pb-4">{{ data.title}}</h1>
            <div v-if="data.second" class="lg:text-md text-sm font-bold" style="margin-bottom: 0.5rem">
                {{ data.second}}
            </div>
            <div class="lg:text-sm text-xs">
                {{ data.desc}}
            </div>
            <div class="flex flex-wrap gap-5 lg:mt-16 md:mt-8 my-4 ">
                <nuxt-link to="/contact-us" class="secondaryButton">Contact</nuxt-link>
                <nuxt-link to="/prestazioni" class="flex gap-2 leading-9 w-[145px]">
                    Services
                    <img src="/icon/arrow2.svg" alt=""></nuxt-link>
            </div>
        </div>
        <div style="padding: 0 0 0 3dvw">
            <img :src="data.src" alt="img">
        </div>
    </div>
</template>

<style scoped>

</style>