import { isUserSignedIn } from "@/store/useAuthStore ";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  const isUser = isUserSignedIn();
  if (!isAuthenticated && !isUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};
