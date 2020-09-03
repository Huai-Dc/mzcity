import Vue from 'vue'
import VueI18n from "vue-i18n";
import db from '@/utils/localstorage'
import elementZhLocal from 'element-ui/lib/locale/lang/zh-CN'
import elementEnLocal from 'element-ui/lib/locale/lang/en'
import zhLocal from './zh'
import enLocal from './en'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocal,
        ...elementEnLocal,
    },
    zh: {
        ...zhLocal,
        ...elementZhLocal,
    }
}

export function getLanguage(){
    const chooseLanguage = db.get('LANGUAGE', '')
    if(chooseLanguage) return chooseLanguage

    const language = (navigator.language || navigator.browserLanguage).toLowerCase();
    const locales = Object.keys(messages);
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale;
        }
    }
    return 'zh';
}

const i18n = new VueI18n({
    // set locale
    // options: en | zh | es
    locale: getLanguage(),
    // set locale messages
    messages,
    silentTranslationWarn: true,
});

export default i18n;
