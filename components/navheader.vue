<template>
    <div>
        <div class="bg-gray-500">
            <header class="container mx-auto text-white">
                <div
                    class="flex justify-between items-center fixed w-full left-0 bg-gray-500 h-16 px-2 md:static"
                >
                    <h1 class="text-4xl font-semibold">HR</h1>
                    <div>
                        <button
                            @click="isOpen = !isOpen"
                            class="md:hidden focus:outline-none"
                        >
                            <svg
                                class="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    v-show="!isOpen"
                                    d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                                />
                                <path
                                    v-show="isOpen"
                                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    :class="isOpen ? 'block' : 'hidden'"
                    class="fixed md:block bg-gray-500 md:block w-full left-0 md:block md:static mt-16 md:mt-0 h-full md:overflow-visible"
                >
                    <ul class="md:flex md:justify-end">
                        <li class="border-b md:border-none">
                            <a
                                href="#"
                                class="block px-8 py-2 my-4 hover:bg-gray-600 rounded"
                                >HRとは</a
                            >
                        </li>
                        <li class="border-b md:border-none">
                            <a
                                href="#"
                                class="block px-8 py-2 my-4 hover:bg-gray-600 rounded"
                                >機能一覧</a
                            >
                        </li>
                        <li class="border-b md:border-none">
                            <a
                                href="#"
                                class="block px-8 py-2 my-4 hover:bg-gray-600 rounded"
                                >料金プラン</a
                            >
                        </li>
                        <li class="border-b md:border-none">
                            <a
                                href="#"
                                class="block px-8 py-2 my-4 hover:bg-gray-600 rounded"
                                >お知らせ</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block px-8 py-2 my-4 hover:bg-gray-600 rounded"
                                >お問い合わせ</a
                            >
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            isOpen: false,
        }
    },
    setup() {},
})
</script>
