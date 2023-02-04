<template>
    <div class="w-full">
        <carousel :items-to-show="1" :wrap-around="true">
            <slide v-for="(slide, index) in slides" :key="index">
                <div class="carousel__item bg-slate-400 flex flex-col">
                    <img :src="slide" alt="" />
                    <!-- <img :src="slide" alt="" /> -->
                </div>
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

<style lang="scss">
.carousel__item {
    min-height: 200px;
    // width: 100%;
    // background-color: gray;
    color: white;
    font-size: 20px;
    border-radius: 8px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
}
.carousel__slide {
    padding: 10px;
    width: 100%;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 1px solid white;
}
</style>
