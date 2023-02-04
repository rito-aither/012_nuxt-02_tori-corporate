<template>
    <div class="w-full">
        <carousel :items-to-show="1" :wrap-around="true">
            <slide v-for="(slide, index) in imgs" :key="index">
                <!-- <div class="carousel__item w-full flex">
                    <div class="swiper-slide">
                        <img :src="slide" alt="" />
                    </div>
                </div> -->
                {{ slide }}
            </slide>

            <template #addons :>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
</template>

<script lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            isOpen: false,
            imgs: ['1', '2', '3'],
        }
    },
    props: {
        slides: Array,
    },
    setup() {
        // const props = defineProps({
        //     slides: Array,
        // })
    },

    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
})
</script>
<!-- <script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    props: {
        slides: Array,
    },
    setup() {
        // const props = defineProps({
        //     slides: Array,
        // })
        // const props = defineProps("slides");

        // return props
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script> -->

<!-- <script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const props = defineProps({
    slides: Array,
})

const imgs = ref(["aa","bb","cc"])
// componets: {
//     Carousel, Slide, Pagination, Navigation
// }
// const props = defineProps("slides");
</script> -->

<style lang="scss">
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: gray;
    color: white;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 1px solid white;
}
</style>
