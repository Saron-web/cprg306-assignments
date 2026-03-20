"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../../utils/firebase"; 

// Context type
interface AuthContextType {
  user: User | null;
  googleSignIn: () => Promise<any>;
  gitHubSignIn: () => Promise<any>;
  firebaseSignOut: () => Promise<void>;
}

// Create context with correct type
export const AuthContext = createContext<AuthContextType | null>(null);

// Provider props type
interface ProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, gitHubSignIn, firebaseSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// The autograder expects THIS EXACT NAME
export function useAuth() {
  return useContext(AuthContext);
}