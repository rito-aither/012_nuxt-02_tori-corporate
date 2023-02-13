<template>
    <SubHero title="contact" title-content="問い合わせ"></SubHero>

    <main class="l-contents">
        <section class="p-contact-form l-section w-full">
            <div class="p-contact-form__inner l-inner flex flex-col items-center">
                <div class="p-contact-form__lead mb-36">
                    Webサイトの制作のご依頼やお見積りなど、<br
                        class="u-sp-only"
                    />お気軽にご相談ください。
                </div>
                <div class="p-contact-form__body w-full">
                    <form class="c-form bg-slate-100 md:mx-36 mx-3 flex flex-col">
                        <div class="c-form__item ">
                            <div class="c-form__title">
                                お問い合わせ種別<span class="c-form__require"
                                    >*必須</span
                                >
                            </div>
                            <span class="c-form__radio">
                                <input
                                    type="radio"
                                    id="type01"
                                    name="type"
                                    value="お仕事のご依頼・ご相談"
                                    checked
                                /><label for="type01"
                                    >お仕事のご依頼・ご相談</label
                                ></span
                            >
                            <span class="c-form__radio"
                                ><input
                                    type="radio"
                                    id="type02"
                                    name="type"
                                    value="お見積りのご依頼"
                                /><label for="type02"
                                    >お見積りのご依頼</label
                                ></span
                            >
                            <span class="c-form__radio"
                                ><input
                                    type="radio"
                                    id="type03"
                                    name="type"
                                    value="採用について"
                                /><label for="type03">採用について</label></span
                            >
                            <span class="c-form__radio"
                                ><input
                                    type="radio"
                                    id="type04"
                                    name="type"
                                    value="その他"
                                /><label for="type04">その他</label></span
                            >
                        </div>

                        <div class="c-form__item flex flex-col ">
                            <label for="name" class="c-form__title"
                                >お名前<span class="c-form__require"
                                    >*必須</span
                                ></label
                            >
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                class="c-form__input"
                            />
                        </div>
                        <div class="c-form__item flex flex-col">
                            <label for="company" class="c-form__title"
                                >会社名<span class="c-form__require"
                                    >*必須</span
                                ></label
                            >
                            <input
                                type="text"
                                id="company"
                                name="company"
                                required
                                class="c-form__input"
                            />
                        </div>
                        <div class="c-form__item flex flex-col">
                            <label for="email" class="c-form__title"
                                >メールアドレス<span class="c-form__require"
                                    >*必須</span
                                ></label
                            >
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                class="c-form__input"
                            />
                        </div>
                        <div class="c-form__item flex flex-col">
                            <label for="tel" class="c-form__title"
                                >電話番号<span class="c-form__note"
                                    >（半角数字ハイフンなし）</span
                                ></label
                            >
                            <input
                                type="tel"
                                id="tel"
                                name="tel"
                                class="c-form__input"
                            />
                        </div>

                        <div class="c-form__item flex flex-col">
                            <label for="comment" class="c-form__title"
                                >お問い合わせ内容</label
                            >
                            <textarea
                                id="comment"
                                name="comment"
                                placeholder="お問い合わせ内容を具体的にご記入くださいませ。"
                                class="c-form__textarea"
                            ></textarea>
                        </div>

                        <div class="c-form__item flex flex-col">
                            <label for="job" class="c-form__title"
                                >PON DESIGNをどちらでお知りになりましたか？<span
                                    class="c-form__require"
                                    >*必須</span
                                ></label
                            >
                            <select
                                id="job"
                                name="job"
                                required
                                class="c-form__select"
                            >
                                <option value="">選択してください</option>
                                <option value="Google/Yahoo検索">
                                    Google/Yahoo検索
                                </option>
                                <option value="SNS">SNS</option>
                                <option value="ブログ">ブログ</option>
                                <option value="友人や知人">友人や知人</option>
                                <option value="その他">その他</option>
                            </select>
                        </div>
                        <div class="c-form__btn">
                            <button type="submit" class="c-btn">
                                送信する
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
.c-form__item:not(:last-child) {
    margin-bottom: 30px;
}
.c-form__input, .c-form__select {
    /* width: 250px; */
    margin-left: 10px;
    margin-right: 10px;
    padding: 8px;
    border: solid 1px #aaa;
    border-radius: 5px;
    background-color: #fff;
}
.c-form__title{
    margin-right: 10px;
}
.c-form__textarea {
    /* min-width: 600px; */
    margin-left: 10px;
    margin-right: 10px;
    min-height: 200px;
    padding: 8px;
    resize: both;
    border: solid 1px #aaa;
    border-radius: 5px;
    background-color: #fff;
}
</style>
