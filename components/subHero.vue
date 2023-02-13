<template>
    <div class="p-sub-hero flex justify-center items-center h-80 text-slate-50">
        <div
            class="p-sub-hero__inner text-5xl flex flex-col w-full items-center"
        >
            <h2 class="c-heading-primary--white">{{props.title}}</h2>
            <span class="c-heading-primary__sub text-2xl mt-5">{{ props.titleContent }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    titleContent: String,
})
</script>
