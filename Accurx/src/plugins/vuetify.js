// src/plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { VApp, VMain, VBreadcrumbs, VSkeletonLoader } from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components: {
    ...components,
    VApp,
    VMain,
    VBreadcrumbs,
    VSkeletonLoader,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})
