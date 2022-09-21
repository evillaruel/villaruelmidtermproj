import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from 'firebase/app'

loadFonts()
const firebaseConfig = {
  apiKey: "AIzaSyDz6AF4WPzAse4og-uAuUOnhvV3D4uGRyE",
  authDomain: "villaruelfinallab1.firebaseapp.com",
  projectId: "villaruelfinallab1",
  storageBucket: "villaruelfinallab1.appspot.com",
  messagingSenderId: "927631474956",
  appId: "1:927631474956:web:5b45054e688babde894929",
  measurementId: "G-JD8LMW4YG7"
};

initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
