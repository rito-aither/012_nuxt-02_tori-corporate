<template>
    <Nav2></Nav2>
    <slot></slot>
    <Contact></Contact>
    <Footer></Footer>
</template>
<style lang="scss">
section {
    margin-top: 100px;
}
.c-btn {
    margin-top: 50px;
    position: static;
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
.c-heading-primary {
    margin-bottom: 50px;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #391e88;
    font-size: 36px;
    font-size: 2.25rem;
}
.c-btn--transparent {
    border: 1px solid #fff;
    background: none;
}

.c-card {
    margin: 24px;
}
.c-card__body {
    margin-top: 24px;
}
.c-card__text {
    text-align: start;
}
</style>
