/**
 * 翻译 router.meta.title, 作用于 breadcrumb sidebar tagsview 组件
 * @param title
 * @returns {VueI18n.TranslateResult|TranslateResult|*}
 */
export function generateTitle(title) {
    const hasKey = this.$te('route.' + title);

    if (hasKey) {
        // $t :this method from vue-i18n, inject in @/lang/index.js
        const translatedTitle = this.$t('route.' + title);

        return translatedTitle;
    }
    return title;
}
