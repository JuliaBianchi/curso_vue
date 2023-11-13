import { createApp } from 'vue'
// The Create App function is what will create the application. 
import App from './App.vue'
import Greeting from "@/components/Greeting.vue"

let vm = createApp(App)

vm.component("Greeting", Greeting)

vm.mount('#app')
