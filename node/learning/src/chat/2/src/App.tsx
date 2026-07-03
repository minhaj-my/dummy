import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup,getAuth() } from "firebase/auth";
import "./App.css";
import { collection, query, orderBy, limit,getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4Kes2AgfkTDjuhXyjgd8Sy37GwRIC648",
  authDomain: "loctalk-deed0.firebaseapp.com",
  projectId: "loctalk-deed0",
  storageBucket: "loctalk-deed0.firebasestorage.app",
  messagingSenderId: "701560656628",
  appId: "1:701560656628:web:0df437b3b9fe04a61484a1",
  measurementId: "G-3DMRGV5PB4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header></header>
      <section>
      {user? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}
const SignIn = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (err) {
      console.error(err);
    }
  };
return(
  <button onClick={signInWithGoogle}>Sign in with Google</button>
)
}

const SignOut = () => {
  return (
    auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
  );
}

function ChatRoom() {

const messagesRef = collection(db, "messages");
const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));
const [messages] = useCollectionData(messagesQuery, { idField: "id" });

  return (
    <>
    </>
  );
}



export default App;
