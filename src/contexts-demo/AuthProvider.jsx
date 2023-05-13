import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [userConnections, setUserConnections] = useState(Object);

  useEffect(() => {
    const retriveConnections = {
      instagram: {
        isConnected: true,
        user: "Komon-instagram",
      },
      twitter: {
        isConnected: true,
        user: "Komon-twitter",
      },
      facebook: {
        isConnected: true,
        user: "Komon-facebook",
      },
    };
    setUserConnections(retriveConnections);
  });

  const updateConnections = (connection) => {
    if (connection != null) {
      setUserConnections(connection);
    }
  };

  return (
    <AuthContext.Provider value={{ userConnections, updateConnections }}>
      {children}
    </AuthContext.Provider>
  );
};
