<template>
    <header class="text-white bg-gray-500 ">
        <div
            class="flex justify-between items-center  bg-gray-500 h-16 px-2 sticky md:static"
        >
            <h1 class="logo">
                <a href="/" class="logo__link">
                    <!-- <img class="logo__img" src="/img/logo.svg" alt="PON DESIGN"/>  -->
                    サンプルサイト
                </a>

            </h1>
            <div class="flex justify-between">
                <div :class="isOpen ? 'block' : 'hidden'" class="md:block">
                    <nav
                        class="mt-10 md:mt-0 h-full p-global-nav fixed   z-50 bg-gray-500 w-full left-0 md:static"
                    >
                        <ul class="flex flex-col md:flex-row items-center md:justify-end">
                            <li
                                class="p-global-nav__item block px-8 py-1 my-4 hover:bg-gray-600 rounded"
                            >
                                <!-- <a class="p-global-nav__link" href="news.html"
                                    >news</a
                                > -->
                                <NuxtLink to="/news">news</NuxtLink>
                            </li>
                            <li
                                class="p-global-nav__item block px-8 py-1 my-4 hover:bg-gray-600 rounded"
                            >
                                <!-- <a
                                    class="p-global-nav__link"
                                    href="service.html"
                                    >service</a
                                > -->
                                <NuxtLink to="/service">service</NuxtLink>
                            </li>
                            <li
                                class="p-global-nav__item block px-8 py-1 my-4 hover:bg-gray-600 rounded"
                            >
                                <a class="p-global-nav__link" href="works.html"
                                    >works</a
                                >
                            </li>
                            <li
                                class="p-global-nav__item block px-8 py-1 my-4 hover:bg-gray-600 rounded"
                            >
                                <a
                                    class="p-global-nav__link"
                                    href="company.html"
                                    >company</a
                                >
                            </li>
                            <li
                                class="p-global-nav__item block px-8 py-1 my-4 hover:bg-gray-600 rounded"
                            >
                                <a
                                    class="p-global-nav__link"
                                    href="recruit.html"
                                    >recruit</a
                                >
                            </li>
                            <li
                                class="p-global-nav__item block px-8 py-1 my-4 hover:bg-gray-600 rounded"
                            >
                                <a
                                    class="p-global-nav__link"
                                    href="contact.html"
                                    >contact</a
                                >
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button
                        @click="isOpen = !isOpen"
                        class="md:hidden focus:outline-none"
                    >
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
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
        </div>
        <!-- <button type="button" class="c-btn-menu js-btn-menu">
      <span class="c-btn-menu__line"></span>
    </button> -->
    </header>
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
