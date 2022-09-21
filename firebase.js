import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
    apiKey: "AIzaSyDz6AF4WPzAse4og-uAuUOnhvV3D4uGRyE",
    authDomain: "villaruelfinallab1.firebaseapp.com",
    projectId: "villaruelfinallab1",
    storageBucket: "villaruelfinallab1.appspot.com",
    messagingSenderId: "927631474956",
    appId: "1:927631474956:web:5b45054e688babde894929",
    measurementId: "G-JD8LMW4YG7"
  };
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};