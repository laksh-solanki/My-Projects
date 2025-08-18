import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import gAuthPlugin from 'vue3-google-oauth2'
let gauthClientId = '1083394004423-ao30gcul6p5fc9ui7fsiqlurm5qii0c0.apps.googleusercontent.com'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: 'email',
  prompt: 'consent',
})

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.bundle'

let docTitle = document.title;
window.addEventListener("blur",() => {
    document.title = "Come back!";
});
window.addEventListener("focus",() => {
    document.title = docTitle;
});