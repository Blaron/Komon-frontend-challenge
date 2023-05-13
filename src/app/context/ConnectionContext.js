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
      user: "Komon-instagram",
      postImg: {
        id: 1,
        title: "demo title",
        img: "https://picsum.photos/200/300",
      },
    },
    twitter: {
      isConnected: false,
      user: "Komon-twitter",
      post: {
        id: 1,
        twit: "demo twit",
      },
    },
    facebook: {
      isConnected: true,
      user: "Komon-facebook",
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
