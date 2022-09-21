<template>
     <v-parallax
    dark
    src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=826&t=st=1663748122~exp=1663748722~hmac=8c5fecf2b256217c1467163d0bfe873437775fbd8e50fa189791fd73551017dc"
    >
    <v-container fluid class="">
        <center>
            <v-card class="vcard" max-width="600px" max-length="1000px"  color="#5485b4">
        <h1 class="text-center font-weight-bold text-h2 mt-16 mb-10 text-blue-black-darken-3">
            Register
        </h1>
    </v-card>
        </center>
        <v-card color="#80DEEA" class="border-rounded mx-auto" style="width: 600px">
            <v-container>
                <center> <v-card-text class="text-body-1 font-weight-bold mb-5">
                    Enter your email and password to start using the app</v-card-text></center> 
                <v-text-field type="text" placeholder="Email" v-model="email"></v-text-field>
                <v-text-field type="password" placeholder="Password" v-model="password"></v-text-field>
                <v-btn @click="register" class="text-white me-3" color="blue-grey-darken-1">Register</v-btn>
                <!-- <v-btn @click="signInWithGoogle" class="text-blue me-3" color="">Google Sign in</v-btn> -->
               <!-- // <v-btn @click="loadUsers" class="" color="">load users console</v-btn> -->
            </v-container>
        </v-card>
    </v-container>
</v-parallax>
</template>

<script setup>
import { ref } from "vue";
import { getFirestore, collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
//import Swal from "sweetalert2";

const email = ref("");
const password = ref("");
const router = useRouter();
const db = getFirestore();
const userRef = collection(db, "users");

function register() {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            // addDoc(userRef, { email: email.value, score: 0 });
            setDoc(doc(db, "users", email.value), { email: email.value, score: 0 });
            registerSuccess();
            router.push("/axiosDemo");
        })
        .catch((error) => {
            registerFailed(error);
        });
}
function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            registerSuccess();
            router.push("/axiosDemo");
        })
        .catch((error) => {
            registerFailed(error);
        });
}

function registerSuccess() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Registered successfully",
        text: "You can now play the quiz!",
        showConfirmButton: true,
        timer: 5000,
    });
}
function registerFailed(error) {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Registration failed",
        text: error.message,
        showConfirmButton: true,
        timer: 5000,
    });
}
function loadUsers() {
    getDocs(userRef).then((snap) => {
        snap.forEach((doc) => {
            console.log(doc.id);
            console.log(doc.data());
        });
    });
}
</script>
<style scoped>

</style>