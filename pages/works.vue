<template>
    <SubHero title="works" title-content="製作実績"></SubHero>

    <!-- <div class="p-breadcrumb">
        <div class="l-inner">
            <ol
                itemscope
                itemtype="https://schema.org/BreadcrumbList"
                class="p-breadcrumb__list"
            >
                1つめ
                <li
                    itemprop="itemListElement"
                    itemscope
                    itemtype="https://schema.org/ListItem"
                    class="p-breadcrumb__item"
                >
                    <a itemprop="item" href="." class="p-breadcrumb__link">
                        <span itemprop="name">HOME</span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>
                2つめ
                <li
                    itemprop="itemListElement"
                    itemscope
                    itemtype="https://schema.org/ListItem"
                    class="p-breadcrumb__item"
                >
                    <span itemprop="item" href="works.html">
                        <span itemprop="name">works</span>
                    </span>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </div>
    </div> -->

    <main class="l-contents">
        <section class="p-works-list-wrapper l-section">
            <div class="l-inner">
                <div
                    class="p-works-list c-card-wrapper c-card-wrapper--col3 flex flex-col items-center"
                >
                    <div class="c-card">
                        <a href="#" class="c-card__link">
                            <div class="c-card__img-wrapper">
                                <img
                                    class="c-card__img"
                                    src="/img/works/smoothiesta.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="c-card__body">
                                <div class="c-card__caption">
                                    Smoothiesta 様
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="c-card">
                        <a href="#" class="c-card__link">
                            <div class="c-card__img-wrapper">
                                <img
                                    class="c-card__img"
                                    src="/img/works/web-conference.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="c-card__body">
                                <div class="c-card__caption">
                                    Web Conference 様
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="c-card">
                        <a href="#" class="c-card__link">
                            <div class="c-card__img-wrapper">
                                <img
                                    class="c-card__img"
                                    src="/img/works/lamina.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="c-card__body">
                                <div class="c-card__caption">LAMINA 様</div>
                            </div>
                        </a>
                    </div>

                    <div class="c-card">
                        <a href="#" class="c-card__link">
                            <div class="c-card__img-wrapper">
                                <img
                                    class="c-card__img"
                                    src="/img/works/citylab.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="c-card__body">
                                <div class="c-card__caption">CITYLab 様</div>
                            </div>
                        </a>
                    </div>

                    <div class="c-card">
                        <a href="#" class="c-card__link">
                            <div class="c-card__img-wrapper">
                                <img
                                    class="c-card__img"
                                    src="/img/works/tabilog.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="c-card__body">
                                <div class="c-card__caption">TABILOG 様</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
.c-card {
    margin: 30px;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>
