import { signInWithPopup } from "firebase/auth"; // Import signInWithPopup and GoogleAuthProvider from firebase/auth
import { auth, provider } from "../firebase";

export const SignInApi = () => {
  return (dispatch) =>
    signInWithPopup(auth, provider) // Use signInWithPopup directly from firebase/auth
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error.message);
        // Optionally show an alert message to the user
        // alert(error.message);
      });
};
