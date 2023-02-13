// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ssgにする
    // ssr: false,
    app: {
        head: {
            charset: 'utf-8',
            // viewport: 'width=500, initial-scale=1',
            title: 'My App',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' },
            ],
            // link: [
            //     {
            //         href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
            //         rel: 'stylesheet',
            //     },
            // ],
        },
    },
    modules: ['@nuxtjs/tailwindcss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: '@import "@/assets/css/setting.scss";',
                    // additionalData: '@import "/assets/sass/style.scss";',
                },
            },
        },
    },
})
