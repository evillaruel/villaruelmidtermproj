<template>
      <v-parallax
    dark
    src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=826&t=st=1663748122~exp=1663748722~hmac=8c5fecf2b256217c1467163d0bfe873437775fbd8e50fa189791fd73551017dc"
    >
<v-container fluid>
<v-card
    color="#80DEEA">
     <v-container>
  <v-card-title> String Manipulator </v-card-title>

   <v-text-field label="Enter a String" v-model="text"></v-text-field>

   <v-card-actions  >
   <v-btn @click="doResult" >
        Results
   </v-btn>
   </v-card-actions>
     
Vowels: {{ vowels }} <br>
                         Numbers: {{ numbers }} <br>
                         Consonants: {{ consonants }} <br>
                         Modified: {{ converted }} <br>
     </v-container>

 </v-card>  
</v-container>
 
</v-parallax>
</template>

<script setup>
import { ref } from 'vue'

const text = ref()
const vowels = ref(0)
const numbers = ref(0)
const consonants = ref(0)
const converted = ref()

function doResult() {
     vowels.value = text.value.match(/[aeiou]/gi).length; // match to AEIOU
     numbers.value = text.value.match(/\d/g)?.length || 0; //match to digits otherwise 0
     consonants.value = text.value.match(/[bcdfghjklmnpqrstvwxyz]/gi).length; //match to consonant
     converted.value = text.value.replace(/[aeiou]/gi, '*');
     return vowels.value, numbers.value, consonants.value, converted.value
}


</script>
