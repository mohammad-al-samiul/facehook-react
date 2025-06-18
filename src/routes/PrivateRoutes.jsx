import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/common/Navbar";

export const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <>
          <Navbar />
          <main className="mx-auto max-w-[1400px] py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <>
          <Navigate to="/login" />
        </>
      )}
    </>
  );
};
