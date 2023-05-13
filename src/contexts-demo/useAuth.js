import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = () => {
  if (typeof window !== "undefined") {
    const { userConnections, ...rest } = useContext(AuthContext);

    return {
      ...rest,
      user: userConnections,
    };
  }
  return {
    userConnections: { instagram: "yasdasd" },
    updateConnections: () => {},
  };
};
