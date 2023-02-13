<template>
    <!-- <Nav2></Nav2> -->
<SubHero title="news" title-content="お知らせ"></SubHero>

    <main class="l-contents w-full">
        <section class="p-news-list-wrapper l-section">
            <div class="p-news-list-wrapper__inner l-inner">
                <div class="p-news-list-wrapper__body">
                    <div class="p-news-list">
                        <ul class="p-news-list__list w-full flex flex-col">
                            <!-- <div v-for="(data,index) in news"
                                :key="index"> -->
                            <li
                                v-for="(n, index) in data"
                                :key="index"
                                class="p-news-list__item flex flex-col md:flex-row m-3 mt-10 text-lg"
                            >
                                <div class="p-news-list__heading flex mb-3">
                                    <time
                                        :datetime="n.date"
                                        class="p-news-list__date"
                                        >{{ n.date }}</time
                                    >
                                    <div class="p-news-list__label ml-5">
                                        <span
                                            class="c-label-category bg-gray-300 rounded-3xl pl-2 pr-2 p-1"
                                            >{{ n.type }}</span
                                        >
                                    </div>
                                </div>
                                <div class="p-news-list__body md:ml-5">
                                    <a
                                        href="news-article.html"
                                        class="p-news-list__link"
                                        >{{ n.content }}</a
                                    >
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- <Contact></Contact> -->
    </main>
    <!-- <Footer></Footer> -->
</template>
<style>
.p-sub-hero {
    background-image: url(/img/hero.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
/* .c-heading-primary { */
    /* margin-bottom: 50px;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    /* color: #391e88; */
    /* font-size: 36px; */
    /* font-size: 2.25rem;  */
/* } */
</style>
<script setup lang="ts">
import { news } from '../data/news.json'
const data = ref(news)
</script>
