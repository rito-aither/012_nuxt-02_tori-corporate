<template>
    <nav2></nav2>
    <div class="p-hero flex items-center justify-center w-full">
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
                class="p-news__inner l-inner flex flex-col items-center md:flex-row"
            >
                <div class="p-news__heading">
                    <h2 class="c-heading-primary">news</h2>
                    <span class="c-heading-primary__sub">お知らせ</span>
                </div>
                <div class="p-news__body">
                    <div class="p-news-list">
                        <ul class="p-news-list__list w-full flex flex-col">
                            <!-- <div v-for="(data,index) in news"
                                :key="index"> -->
                            <li
                                v-for="(data, index) in news"
                                :key="index"
                                class="p-news-list__item flex flex-col md:flex-row m-3 mt-10 text-lg"
                            >
                                <div class="p-news-list__heading flex">
                                    <time
                                        :datetime="data.date"
                                        class="p-news-list__date"
                                        >{{ data.date }}</time
                                    >
                                    <div class="p-news-list__label ml">
                                        <span
                                            class="c-label-category bg-gray-300 rounded-3xl pl-2 pr-2 p-1"
                                            >{{ data.type }}</span
                                        >
                                    </div>
                                </div>
                                <div class="p-news-list__body">
                                    <a
                                        href="news-article.html"
                                        class="p-news-list__link"
                                        >{{ data.content }}</a
                                    >
                                </div>
                            </li>
                            <!-- </div> -->
                            <!-- <li class="p-news-list__item flex-col md:flex-row">
                                <div class="p-news-list__heading">
                                    <time
                                        datetime="2020-02-01"
                                        class="p-news-list__date"
                                        >2030.01.25</time
                                    >
                                    <div class="p-news-list__label">
                                        <span class="c-label-category"
                                            >制作実績</span
                                        >
                                    </div>
                                </div>
                                <div class="p-news-list__body">
                                    <a href="#" class="p-news-list__link"
                                        >Smoothiesta様のWebサイトを制作いたしました</a
                                    >
                                </div>
                            </li>
                            <li class="p-news-list__item flex-col md:flex-row">
                                <div class="p-news-list__heading">
                                    <time
                                        datetime="2020-02-01"
                                        class="p-news-list__date"
                                        >2030.01.20</time
                                    >
                                    <div class="p-news-list__label">
                                        <span class="c-label-category"
                                            >採用</span
                                        >
                                    </div>
                                </div>
                                <div class="p-news-list__body">
                                    <a href="#" class="p-news-list__link"
                                        >Webデザイナーを１名募集中です！</a
                                    >
                                </div>
                            </li> -->
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
        <Contact></Contact>
    </main>
    <Footer></Footer>
</template>

<style lang="scss">
.p-hero {
    height: 100vh;
    color: #fff;
    background-image: url(img/hero.jpg);
}
.l-inner {
    margin-top: 50px;
}
.c-heading-primary {
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #391e88;
    font-size: 36px;
    font-size: 2.25rem;
}
.p-message__heading {
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    margin-bottom: 40px;
    font-size: 40px;
    font-size: 2.5rem;
}
.p-message__underline {
    background: linear-gradient(transparent 70%, #f5f534 0%);
}
section {
    margin-top: 50px;
}

.c-btn {
    margin-top: 30px;
    position: relative;
    font-weight: bold;
    line-height: 1.4;
    display: inline-block;
    width: 220px;
    padding: 18px 0;
    transition: 0.3s;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    border-radius: 50px;
    background-image: linear-gradient(
        to right,
        #7633a4 0%,
        #250d65 51%,
        #7633a4 100%
    );
    background-size: 200% auto;
    font-size: 14px;
    font-size: 0.875rem;
}
.c-btn--transparent {
    border: 1px solid #fff;
    background: none;
}

.c-card{
    margin :24px

}
.c-card__body{
    margin-top :24px
}
.c-card__text{
    text-align: start;
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
const slides = ref([
    '/img/works/smoothiesta.jpg',
    '/img/works/web-conference.jpg',
    '/img/works/lamina.jpg',
])

const news = ref([
    {
        type: 'お知らせ',
        date: '2030/01/01',
        content: 'Webデザインニュースサイト「〇〇」に取材いただきました',
    },
    {
        type: '制作実績',
        date: '2030/01/01',
        content: '〇〇様のWebサイトを制作いたしました',
    },
])
</script>
