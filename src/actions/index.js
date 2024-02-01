import { signInWithPopup, onAuthStateChanged } from "firebase/auth"; // Import signInWithPopup and GoogleAuthProvider from firebase/auth
import { auth, provider } from "../firebase";
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
