import { signInWithPopup, onAuthStateChanged } from "firebase/auth"; // Import signInWithPopup and GoogleAuthProvider from firebase/auth
import { auth, provider } from "../firebase"; // import auth and provider directly from firebase
import db, { storage } from "../firebase"; // import db and storage directly from firebase
import { ref, uploadBytesResumable } from "firebase/storage"; // import only ref and uploadBytes from firebase/storage
import { getDownloadURL } from "firebase/storage"; // import getDownloadURL from firebase/storage
import { collection } from "firebase/firestore"; // import collection from firebase/firestore
import { addDoc } from "firebase/firestore";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});
export const SignInApi = () => {
  return (dispatch) =>
    signInWithPopup(auth, provider) // Use signInWithPopup directly from firebase/auth
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => {
        console.error(error.message);
        // Optionally show an alert message to the user
        // alert(error.message);
      });
};

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOUtApi() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function postArticleAPI(payload) {
  return async (dispatch) => {
    if (payload.image != "") {
      const file = `images/${payload.image.name}`;
      const file1 = payload.image;
      const storeageref = ref(storage, file);
      const upload = uploadBytesResumable(storeageref, file1);

      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await getDownloadURL(upload.snapshot.ref);
          await addDoc(collection(db, "articles"), {
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
        }
      );
    } else if (payload.video) {
      addDoc(collection(db, "articles"), {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      console.log("DONE");
    }
  };
}
