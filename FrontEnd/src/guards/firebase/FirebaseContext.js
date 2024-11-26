import { createContext, useEffect, useReducer } from 'react';
import { firebase } from './Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Db } from './Firebase';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === 'AUTH_STATE_CHANGED') {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }
  return state;
};

const AuthContext = createContext({
  ...initialState,
  platform: 'Firebase',
  signup: () => Promise.resolve(),
  signin: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  onceGetUsers: () => Promise.resolve(),
  CreateUser: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {

        const roleDocRef = doc(Db, 'Roles', user.uid);
        const roleDoc = await getDoc(roleDocRef);

        let userRole = null;
        let isAdmin = false;
        if (roleDoc.exists()) {
          userRole = roleDoc.data(); // Contains role information (e.g., { Admin: true })
          isAdmin = userRole.Admin;
        }


        dispatch({
          type: 'AUTH_STATE_CHANGED',
          payload: {
            isAuthenticated: true,
            user: {
              id: user.uid,
              avatar: user.photoURL,
              email: user.email,
              isAdmin: userRole.Admin
                
            },
          },
        });
      } else {
        localStorage.removeItem('userRole');
        dispatch({
          type: 'AUTH_STATE_CHANGED',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  // Login with FB

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  };

  // Login with FB
  const loginWithFaceBook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  };

  const loginWithTwitter = () => {
    const provider = new firebase.auth.TwitterAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  };

  // Sign Up
  const signup = (email, password) =>{
    firebase.auth().createUserWithEmailAndPassword(email, password);

  }
  // Sign In
  const signin = async (email, password) => 
    firebase.auth().signInWithEmailAndPassword(email, password);
    

  // Sign out
  const logout = () => firebase.auth().signOut();
  localStorage.removeItem('userRole'); 
  const CreateUser = (id, username, email) =>
    firebase.database().ref(`users/${id}`).set({
      username,
      email,
    });
  const onceGetUsers = () => firebase.database().ref('users').once('value');

  return (
    <AuthContext.Provider
      value={{
        ...state,
        platform: 'Firebase',
        signup,
        signin,
        CreateUser,
        onceGetUsers,
        loginWithGoogle,
        loginWithFaceBook,
        loginWithTwitter,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
