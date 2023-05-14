"use client";
import { createContext, useContext } from "react";

export const ConnectionContext = createContext();

export const useConnectData = () => {
  const context = useContext(ConnectionContext);

  if (!context) throw new Error("useConnectData must used within a provider");
  return context;
};

export const ConnectionProvider = ({ children }) => {
  // Here we can bring the information from somewhere ( supabase, firebase...)
  // For the challenge, we will use these data

  const conexiones = {
    instagram: {
      isConnected: false,
      user: {
        name: "Komon-instagram",
        profileImg: "../../../public/profile.png",
      },
      followers: 1500000,
      postImg: {
        id: 1,
        title: "demo title",
        img: "https://picsum.photos/200/300",
        likes: 420,
      },
    },
    twitter: {
      isConnected: false,
      user: {
        name: "Komon-twitter",
        profileImg: "../../../public/profile.png",
      },
      followers: 1200,
      post: {
        id: 1,
        twit: "demo twit",
        retweet: 23,
      },
    },
    facebook: {
      isConnected: true,
      user: {
        name: "Komon-facebook",
        profileImg: "../../../public/profile.png",
      },
      followers: 400,
      postImg: {
        id: 1,
        title: "demo title",
        img: "https://picsum.photos/200/300",
      },
    },
  };
  return (
    <ConnectionContext.Provider value={conexiones}>
      {children}
    </ConnectionContext.Provider>
  );
};
