<template>
    <!-- <nav2></nav2> -->
    <div class="p-hero flex items-center justify-center w-full text-slate-50">
        <div class="p-hero__inner text-center text-xl">
            <div class="p-hero__heading">
                <div class="p-hero__title text-5xl">WEB DESIGN SPECIALIST</div>
                <div class="p-hero__subtitle mt-10">
                    お客様の夢を叶える<br class="u-sp-only" />Webサイトを制作
                </div>
            </div>
            <div class="p-hero__link">
                <a href="contact.html" class="c-btn c-btn--transparent"
                    >contact</a
                >
            </div>
        </div>
        <!-- <span class="p-hero__scroll">SCROLL</span> -->
    </div>

    <main class="l-contents m-10">
        <section class="">
            <div
                class="p-news__inner l-inner flex flex-col items-center md:flex-row md:mx-12"
            >
                <div class="p-news__heading md:mr-10">
                    <h2 class="c-heading-primary">news <br>
                        <span class="c-heading-primary__sub text-lg">お知らせ</span>
                    </h2>

                </div>
                <div class="p-news__body">
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
        <section>
            <div class="p-service__inner l-inner flex flex-col items-center">
                <div class="p-service__heading">
                    <h2 class="c-heading-primary">
                        service<span class="c-heading-primary__sub"
                            >事業内容</span
                        >
                    </h2>
                </div>
                <div class="p-service__body">
                    <div
                        class="c-card-wrapper c-card-wrapper--col3 flex flex-col md:flex-row text-center"
                    >
                        <div class="c-card">
                            <div class="c-card__img-wrapper">
                                <img
                                    class="c-card__img"
                                    src="/img/service01.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="c-card__body">
                                <div class="c-card__title">Webサイト制作</div>
                                <div class="c-card__text">
                                    <p>
                                        新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="c-card">
                            <div class="c-card__img-wrapper">
                                <img
                                    class="c-card__img"
                                    src="/img/service02.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="c-card__body">
                                <div class="c-card__title">Webサイト運用</div>
                                <div class="c-card__text">
                                    <p>
                                        サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案をいたします。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="c-card">
                            <div class="c-card__img-wrapper">
                                <img
                                    class="c-card__img"
                                    src="/img/service03.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="c-card__body">
                                <div class="c-card__title">アプリ開発</div>
                                <div class="c-card__text">
                                    <p>
                                        スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-service__link">
                    <a href="service.html" class="c-btn">more</a>
                </div>
            </div>
        </section>

        <section class="p-works l-inner l-section text-center">
            <div><slider :slides="slides"></slider></div>

            <!-- <div class="p-works__img-wrapper">
                        <div class="swiper-container js-swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img
                                        src="/img/works/smoothiesta.jpg"
                                        alt=""
                                    />
                                </div>
                                <div class="swiper-slide">
                                    <img
                                        src="/img/works/web-conference.jpg"
                                        alt=""
                                    />
                                </div>
                                <div class="swiper-slide">
                                    <img src="/img/works/lamina.jpg" alt="" />
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div> -->
            <div class="p-works__desc mt-10">
                <div class="p-works__heading">
                    <h2 class="c-heading-primary">
                        works<span class="c-heading-primary__sub"
                            >制作実績</span
                        >
                    </h2>
                </div>
                <div class="p-works__body">
                    <div class="p-works__text">
                        <p>
                            様々なジャンルのWebサイト制作が可能です。<br />
                            ご購入やお申込み数の増加などを実現します！
                        </p>
                    </div>
                </div>
                <div class="p-works__link">
                    <a href="works.html" class="c-btn">more</a>
                </div>
            </div>
        </section>

        <section class="p-company l-section">
            <div class="p-company__inner l-inner flex flex-col items-center">
                <div class="p-company__heading text-center">
                    <h2 class="c-heading-primary">company</h2>
                    <span class="c-heading-primary__sub">私たちについて</span>
                </div>
                <div class="p-company__body">
                    <div class="p-message text-center">
                        <div class="p-message__heading">
                            <span class="p-message__underline"
                                >サイトのゴール =
                                <br class="u-sp-only" />夢を叶えること</span
                            >
                        </div>
                        <div class="p-message__text">
                            <p>
                                お客様の夢を叶えること。<br />
                                それがWebサイトのゴールであり、<br
                                    class="u-sp-only"
                                />私たちが目指すことです。<br />
                                だからこそちゃんと成果を出すサイトを<br
                                    class="u-sp-only"
                                />全力でお作りします。<br />
                                お客様の笑顔を見たい。<br />
                                夢を実現する手助けをさせてください。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="p-company__link">
                    <a href="company.html" class="c-btn">more</a>
                </div>
            </div>
        </section>
        <!-- <Contact></Contact> -->
    </main>
    <!-- <Footer></Footer> -->
</template>

<style lang="scss">
section {
    margin-top: 100px;
}

.p-hero {
    height: 100vh;
    // color: #fff;
    background-image: url(/img/hero.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.l-inner {
    margin-top: 50px;
}


</style>
<!-- <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
    data() {
        return {
            slides:["img/works/smoothiesta.jpg","img/works/smoothiesta.jpg","img/works/smoothiesta.jpg"]
        }
    }
})
</script> -->
<!-- <script>
export default {
    setup() {
        ref({
            slides: [
                'img/works/smoothiesta.jpg',
                'img/works/smoothiesta.jpg',
                'img/works/smoothiesta.jpg',
            ],
        })
    },
}
</script> -->

<script setup lang="ts">
import { news } from '../data/news.json'
const slides = ref([
    '/img/works/smoothiesta.jpg',
    '/img/works/web-conference.jpg',
    '/img/works/lamina.jpg',
])

const findnews = [news[0],news[1],news[2]]
const data = ref(findnews)
</script>
