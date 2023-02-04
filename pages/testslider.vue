<template>
    <div class="relative w-full h-64">
        <div class="relative w-full h-full overflow-hidden">
            <transition-group name="slide" tag="div" class="w-full h-full">
                <img
                    v-for="(photo, index) in photos"
                    :key="index"
                    :src="photo"
                    class="absolute top-0 left-0 w-full h-full object-cover transition-all duration-700"
                    :style="{
                        transform: 'translateX(' + -100 * current + '%)',
                    }"
                />
            </transition-group>
        </div>
        <div class="absolute bottom-0 left-0 w-full p-4 text-center">
            <template v-for="(photo, index) in photos" :key="index">
                <button
                    :class="{
                        'bg-teal-500': index === current,
                        'bg-transparent': index !== current,
                    }"
                    class="w-6 h-6 rounded-full mx-2 focus:outline-none hover:bg-teal-500"
                    @click="goToSlide(index)"
                />
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photos: [
                'https://picsum.photos/id/1/600/400',
                'https://picsum.photos/id/10/600/400',
                'https://picsum.photos/id/100/600/400',
            ],
            current: 0,
        }
    },
    methods: {
        goToSlide(index) {
            this.current = index
        },
    },
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}
</style>
