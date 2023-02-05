import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import pt from 'vuetify/lib/locale/pt'
import colors from 'vuetify/lib/util/colors'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    primary: colors.teal.darken1,
    accent: colors.indigo.darken1,
    info: colors.blue,
    error: colors.pink.darken2,
    success: colors.teal.darken1,
    warning: colors.purple.darken1
  },
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'md'
  }
})
