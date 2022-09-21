<template>
    <v-parallax
    dark
    src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=826&t=st=1663748122~exp=1663748722~hmac=8c5fecf2b256217c1467163d0bfe873437775fbd8e50fa189791fd73551017dc"
    >
    <v-container>
        <v-card class="rounded-lg mx-auto " style="width:100%;" color="#80DEEA">
            <v-form>
                <v-container>
                    <img src="/public/font1.webp" alt="Engel" class="img">
                    <v-card-text>
                        <br>
                        <center><h3> Simple Calculator  </h3>
                        </center>
                        <br>
                            <center>Two simple field entry that shows the Sum, Difference, Product, Quotient, and Average when the result is clicked.
                        </center>
                    </v-card-text>
                    <v-card-text>
                        <center> <h3>String App </h3>
                        </center>
                       <br>
                       <center> A text manipulator that shows the vowels, numbers, consonants, and even modifies vowels to asterisk when the result is clicked.
                    </center>
                    </v-card-text>
                    <v-card-text>
                        <center><h3>Quiz App</h3>
                        </center> 
                        <br>
                        <center>Generates facts about sports.</center>
                    </v-card-text>
                    <v-card-text>
                        <center><h3>Vuetify Research </h3>
                        </center>
                       <br>
                       <center>
                       A research work about vuetify.
                    </center>
                    </v-card-text>
                    <v-card-text>
                        <center> <h3>About Me</h3>
                        </center>
                        <br>
                        <center>A small biography of the creator.
                          </center>
                    </v-card-text>
                </v-container>
            </v-form>
        </v-card>
    </v-container>

</v-parallax>
</template>

<script>

</script>
<style>
.img {
     display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
</style>