import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors';
import pt from 'vuetify/lib/locale/pt';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme:{
    primary: colors.red.darken1,
    secondary: colors.red.lighten4, 
    accent: colors.indigo.base,
    dark:true
  },
    lang: {
      locales: { pt },
      current: 'pt',
    },
  icons: {
    iconfont: 'md',
  },
});
