// routesConfig.ts
import { ProtectedRoute } from "@/components/publica&protectedRoutes/protectedRoutes";
import PublicRoute from "@/components/publica&protectedRoutes/publicRoutes";
import { lazy } from "react";

const RegisterPage = lazy(() => import("../pages/Auth/register"));
const LoginPage = lazy(() => import("../pages/Auth/login"));
const DashboardPage = lazy(() => import("../pages/dashboard"));
const NotFoundPage = lazy(() => import("../pages/notFound/page"));

// MainLayout routes
export const mainLayoutRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
];

// Public routes
export const publicRoutes = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
