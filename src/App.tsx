import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import MainLayout from "./components/layout/mainLayout";
import { mainLayoutRoutes, publicRoutes } from "./confegrations/routesConfig";
import { LanguageDirection } from "./components/layout/direction";

// Lazy-loaded pages

function App() {
  return (
    <LanguageDirection>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<MainLayout />}>
              {mainLayoutRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
            <Route element={<MainLayout />}>
              {publicRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </LanguageDirection>
  );
}

export default App;
