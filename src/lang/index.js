import Vue from 'vue'
import VueI18N from 'vue-i18n'
import en from './en.js'
import cn from './cn.js'
import { saveLocale, getLocale } from '../utils/localStorage.js'

Vue.use(VueI18N)

const messages = {
  en,
  cn
}

let locale = getLocale()
if (!locale) {
  locale = 'cn'
  saveLocale(locale)
}

const i18n = new VueI18N({
  locale,
  messages
})

export default i18n
