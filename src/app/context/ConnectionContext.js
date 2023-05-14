"use client";
import { createContext, useContext, useState } from "react";

export const ConnectionContext = createContext();
//let conexiones = {};
export const useConnectData = () => {
  const context = useContext(ConnectionContext);

  if (!context) throw new Error("useConnectData must used within a provider");
  return context;
};

export function disconnectUser() {
  // TODO
}
export const ConnectionProvider = ({ children }) => {
  // Here we can bring the information from somewhere ( supabase, firebase...)
  // For the challenge, we will use these data

  const [conexiones, setConexiones] = useState([
    {
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
        isConnected: true,
        user: {
          name: "Komon-twitter",
          profileImg: "http://xsgames.co/randomusers/avatar.php?g=male",
        },
        followers: 1200,
        post: [
          {
            id: 1,
            twit: "demo twit",
            retweet: 23,
          },
          { id: 2, twit: "demo twit 2 ", retweet: 123 },
          { id: 3, twit: "demo twit 3 ", retweet: 234 },
        ],
      },
      facebook: {
        isConnected: true,
        user: {
          name: "Komon-facebook",
          profileImg: "http://xsgames.co/randomusers/avatar.php?g=female",
        },
        followers: 400,
        postImg: [
          {
            id: 1,
            title: "demo title",
            img: "https://picsum.photos/420/300",
            description: "Lorem ipsum dolor sit amet, ♥😽",
            likes: 244,
          },
          {
            id: 2,
            title: "demo title 2",
            img: "https://picsum.photos/420/301",
            description: "Lorem ipsum dolor sit amet, ♥🐶",
            likes: 167,
          },
        ],
      },
    },
  ]);

  const createPostFB = (id, title, img, description, likes) => {
    setConexiones([
      ...conexiones,
      {
        id,
        title,
        img,
        description,
        likes,
      },
    ]);
  };

  const createPostTwitter = (id, twit, retweet) => {
    setConexiones([...conexiones, { id, twit, retweet }]);
    console.log(conexiones);
  };

  return (
    <ConnectionContext.Provider
      value={{ conexiones, createPostFB, createPostTwitter }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
