<template>
  <nav>
      <v-toolbar app color="cyan">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Web Activities (Midterm)</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Activities
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn @click="handleSignOut" v-if="isLoggedIn">
        <span>Sign Out</span>
      </v-btn>
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="150">
            <v-img src="/pic1.jpg"></v-img>
          </v-avatar>
          <p class="white--text subheading text-center">Engel Bert Villaruel</p>
        </v-flex>
      </v-layout>
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { onMounted,ref } from 'vue';
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const isLoggedIn = ref(false);
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/' },
           { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-help-box', path: '/stringApp'},
           { title: 'Vuetify', icon: 'mdi-vuejs', path: '/vuetifyApp'},
           { title: 'About Me', icon: 'mdi-account', path: '/aboutmeApp'},
           { title: 'Axios Quiz App', icon: 'mdi-account', path: '/axiosdemoApp'},
           { title: 'About Web', icon: 'mdi-account', path: '/aboutwebApp'},
           { title: 'User Create', icon: 'mdi-account', path: '/usercreateApp'},
           { title: 'Sign In', icon: 'mdi-account', path: '/signIn'},
        ])

        let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      const info = user.email;
      console.log(info);
    } else {
      isLoggedIn.value = false;
      console.log("not logged in");
    }
  });
});
function toggleDrawer() {
  return (drawer.value = !drawer.value);
}
const handleSignOut = () => {
  signOut(auth).then(() => {
    logOutSuccess();
    router.push("/signIn");
  });
};
function logOutSuccess() {
  // Swal.fire({
  //   position: "center",
  //   icon: "success",
  //   title: "You logged out",
  //   text: "Thank you for playing",
  //   showConfirmButton: false,
  //   timer: 3000,
  // });
}



</script>
