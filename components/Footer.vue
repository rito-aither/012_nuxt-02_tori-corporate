<template>
    <footer class="l-footer mt-10">
        <nav class="l-footer-nav bg-blue-300 text-slate-50  pb-5 text-base w-full " >
            <ul class="l-footer-nav__list flex justify-center flex-wrap mt-50">
                <li class="l-footer-nav__item">
                    <!-- <a class="l-footer-nav__link" href=".">HOME</a> -->
                    <NuxtLink to="/">home</NuxtLink>
                </li>
                <li class="l-footer-nav__item">
                    <!-- <a class="l-footer-nav__link" href="news.html">news</a> -->
                    <NuxtLink to="/news">news</NuxtLink>
                </li>
                <li class="l-footer-nav__item">
                    <!-- <a class="l-footer-nav__link" href="service.html"
                        >service</a
                    > -->
                    <NuxtLink to="/service">service</NuxtLink>
                </li>
                <li class="l-footer-nav__item">
                    <!-- <a class="l-footer-nav__link" href="works.html">works</a>
                     -->
                     <NuxtLink to="/works">works</NuxtLink>
                </li>
                <li class="l-footer-nav__item">
                    <!-- <a class="l-footer-nav__link" href="company.html"
                        >company</a
                    > -->
                    <NuxtLink to="/company">company</NuxtLink>
                </li>
                <li class="l-footer-nav__item">
                    <!-- <a class="l-footer-nav__link" href="contact.html"
                        >contact</a
                    > -->
                    <NuxtLink to="/contact">contact</NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="c-copyright">
            <a href="." class="c-copyright__link">&copy;tori</a>
        </div>
    </footer>
</template>
<style>
.l-footer-nav__item{
    margin: 10px;
    font-size: 16px;
}
</style>
