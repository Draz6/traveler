
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

 const getData = async () => {
    try {
        await getDocs(collection(db, "")).then((querySnapshot) => {
     const newData = querySnapshot.docs.map((doc) => ({
       ...doc.data(),
       id: doc.id,
     }));
     return newData;
   });
    } catch (error) {
         throw new Error(error);
    }
 };

 export { getData };