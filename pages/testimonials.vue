<script setup>
const route = useRoute()
const reviews = [
    {
        name: 'Alice Johnson',
        img: 'Frame23.png',
        stars: 5,
        date: 'May 2024',
        desc: 'Dr. Smith and his team at Bright Smiles Dental are amazing! I got dental implants done, and the process was smooth from start to finish. They were very informative and made sure I was comfortable throughout the procedure. The results are fantastic, and I couldn\'t be happier. Highly recommend them for anyone needing dental implants.'
    },
    {
        name: 'Michael Thompson',
        img: 'Frame23.png',
        stars: 5,
        date: 'April 2024',
        desc: 'I am extremely satisfied with the cosmetic dentistry work done at Perfect Smile Clinic. Dr. Johnson and the staff were friendly and professional. I had veneers and teeth whitening done, and the results are beyond my expectations. My smile looks natural and beautiful. Thank you, Perfect Smile Clinic, for boosting my confidence!'
    },
    {
        name: 'Sophia Davis',
        img: 'Frame23.png',
        stars: 5,
        date: 'March 2024',
        desc: 'I recently completed my orthodontic treatment at Bright Smiles Dental, and I couldn\'t be happier with the results. Dr. Smith and his team were fantastic throughout the process. They explained everything thoroughly, and the treatment was very effective. My smile looks amazing now! I highly recommend Bright Smiles Dental for orthodontic care.'
    },
    {
        name: 'David Lee',
        img: 'Frame23.png',
        stars: 5,
        date: 'February 2024',
        desc: 'I had dental crowns and bridges done at Perfect Smile Clinic, and I\'m thrilled with the outcome. Dr. Johnson and the entire staff were professional and attentive. They explained the process clearly, and the results are fantastic. My smile feels and looks great. Highly recommend Perfect Smile Clinic for dental crowns and bridges.'
    },
    {
        name: 'Sarah Miller',
        img: 'Frame23.png',
        stars: 5,
        date: 'January 2024',
        desc: 'My experience at Tooth Perfect Clinic for dentures was excellent. Dr. Anderson and his team were very caring and professional. They took the time to understand my needs and provided me with comfortable dentures that fit perfectly. I can smile confidently again. Thank you, Tooth Perfect Clinic!'
    },
    {
        name: 'Daniel Wilson',
        img: 'Frame23.png',
        stars: 5,
        date: 'December 2023',
        desc: 'I had dental implants placed at Bright Smiles Dental, and I couldn\'t be happier with the results. Dr. Smith and his team were outstanding. They made me feel comfortable throughout the entire process, and the results are amazing. My new implants look and feel natural. I highly recommend Bright Smiles Dental for dental implants.'
    },
    {
        name: 'Emma Roberts',
        img: 'Frame23.png',
        stars: 5,
        date: 'November 2023',
        desc: 'I visited Perfect Smile Clinic for cosmetic dentistry, and I\'m thrilled with the outcome. Dr. Johnson and his team were exceptional. They listened to my concerns and provided personalized care. I got veneers and teeth whitening done, and my smile looks perfect now. I highly recommend Perfect Smile Clinic for cosmetic dentistry.'
    },
    {
        name: 'Jason Brown',
        img: 'Frame23.png',
        stars: 5,
        date: 'October 2023',
        desc: 'I had orthodontic treatment at Tooth Perfect Clinic, and the results are fantastic. Dr. Anderson and his team were professional and caring throughout the process. They addressed all my concerns and made the experience pleasant. My smile looks great now, and I couldn\'t be happier. Highly recommend Tooth Perfect Clinic for orthodontics.'
    },
    {
        name: 'Olivia White',
        img: 'Frame23.png',
        stars: 5,
        date: 'September 2023',
        desc: 'I recently got dental crowns and bridges done at Bright Smiles Dental, and the results are outstanding. Dr. Smith and his team were wonderful. They explained everything clearly and made sure I was comfortable throughout the process. My new crowns and bridges look natural and feel great. Highly recommend Bright Smiles Dental!'
    },
    {
        name: 'Ethan Clark',
        img: 'Frame23.png',
        stars: 5,
        date: 'August 2023',
        desc: 'My experience at Perfect Smile Clinic for dentures was excellent. Dr. Johnson and his team were very professional and caring. They listened to my concerns and provided me with high-quality dentures that fit perfectly. I\'m very happy with the result. Highly recommend Perfect Smile Clinic for dentures.'
    },
    {
        name: 'Ava Baker',
        img: 'Frame23.png',
        stars: 5,
        date: 'July 2023',
        desc: 'I had dental implants placed at Tooth Perfect Clinic, and I\'m thrilled with the outcome. Dr. Anderson and his team were fantastic. They explained the process thoroughly and made me feel comfortable. The results are excellent, and my implants feel very natural. Highly recommend Tooth Perfect Clinic for dental implants.'
    },
    {
        name: 'William Evans',
        img: 'Frame23.png',
        stars: 5,
        date: 'June 2023',
        desc: 'My experience at Bright Smiles Dental for cosmetic dentistry was amazing. Dr. Smith and his team were very professional and friendly. They listened to my concerns and provided me with the perfect solution. I got veneers and teeth whitening done, and I\'m extremely happy with the results. Highly recommend Bright Smiles Dental for cosmetic dentistry.'
    },
    {
        name: 'Sophie Harris',
        img: 'Frame23.png',
        stars: 5,
        date: 'May 2023',
        desc: 'I had orthodontic treatment at Perfect Smile Clinic, and I\'m delighted with the results. Dr. Johnson and his team were excellent. They explained everything clearly and made me feel comfortable throughout the process. My smile looks amazing now, and I couldn\'t be happier. Highly recommend Perfect Smile Clinic for orthodontics.'
    },
    {
        name: 'Lucas Martinez',
        img: 'Frame23.png',
        stars: 5,
        date: 'April 2023',
        desc: 'I visited Tooth Perfect Clinic for dental crowns and bridges, and the experience was fantastic. Dr. Anderson and his team were professional and caring. They did an excellent job explaining the process and making sure I was comfortable. My new crowns and bridges look natural and feel great. Highly recommend Tooth Perfect Clinic!'
    },
    {
        name: 'Isabella Clark',
        img: 'Frame23.png',
        stars: 5,
        date: 'March 2023',
        desc: 'I recently got dentures at Bright Smiles Dental, and I\'m very satisfied with the results. Dr. Smith and his team were amazing. They provided personalized care and made sure my dentures fit perfectly. I can smile confidently again. Highly recommend Bright Smiles Dental for dentures.'
    },
    {
        name: 'Noah Thompson',
        img: 'Frame23.png',
        stars: 5,
        date: 'February 2023',
        desc: 'My experience at Perfect Smile Clinic for dental implants was excellent. Dr. Johnson and his team were professional and knowledgeable. They explained the procedure thoroughly and made me feel comfortable. The results are fantastic, and my implants feel very natural. Highly recommend Perfect Smile Clinic for dental implants.'
    },
    {
        name: 'Lily Wilson',
        img: 'Frame23.png',
        stars: 5,
        date: 'January 2023',
        desc: 'I had cosmetic dentistry done at Tooth Perfect Clinic, and I\'m extremely happy with the results. Dr. Anderson and his team were fantastic. They listened to my concerns and provided me with the perfect solution. My smile looks beautiful now, and I feel more confident. Highly recommend Tooth Perfect Clinic for cosmetic dentistry.'
    },
    {
        name: 'Oscar Taylor',
        img: 'Frame23.png',
        stars: 5,
        date: 'December 2022',
        desc: 'I visited Bright Smiles Dental for orthodontic treatment, and the experience was excellent. Dr. Smith and his team were very professional and caring. They explained everything clearly and made the process comfortable. My smile looks great now, and I couldn\'t be happier. Highly recommend Bright Smiles Dental for orthodontics.'
    },
    {
        name: 'Ella Brown',
        img: 'Frame23.png',
        stars: 5,
        date: 'November 2022',
        desc: 'I recently got dental crowns and bridges done at Perfect Smile Clinic, and I\'m thrilled with the results. Dr. Johnson and his team were fantastic. They provided personalized care and made sure I was comfortable throughout the process. My new crowns and bridges look natural and feel great. Highly recommend Perfect Smile Clinic!'
    }
];


</script>

<template>
    <div>
        <div class="md:px-20 px-4">
            <div class="text-5xl font-extrabold mb-8">Testimonials</div>
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
                            <img v-for="star in slide.stars" src="/icon/star.svg" alt="">
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
