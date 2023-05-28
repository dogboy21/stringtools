import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/arya-orange/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import '@fontsource/raleway'
import '@fontsource/jetbrains-mono'

import StyleClass from 'primevue/styleclass'
import Ripple from 'primevue/ripple'

import Textarea from 'primevue/textarea'

import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue, { ripple: true })

app.directive('styleclass', StyleClass)
app.directive('ripple', Ripple)

app.component('Textarea', Textarea)

app.mount('#app')
