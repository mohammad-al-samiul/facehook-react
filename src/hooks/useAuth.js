import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider!");
  }

  useDebugValue(context.auth, (auth) =>
    auth?.user ? "User Logged in" : "User Logged out"
  );

  return context;
};
