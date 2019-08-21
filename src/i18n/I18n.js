import I18n from 'react-native-i18n'

import EN from './locals/en.json'
import FR from './locals/fr.json'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// English language is the main language for fall back:
I18n.translations = {
  en: EN
}

const languageCode = I18n.locale.substr(0, 2)

// All other translations for the app goes to the respective language file:
switch (languageCode) {
  case 'en':
    I18n.translations.af = EN
    break
  case 'fr':
    I18n.translations.fr = FR
    break
  default:
    I18n.translations.af = EN
}
