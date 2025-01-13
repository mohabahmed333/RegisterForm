import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import { Toaster } from "./components/ui/toaster";
const RenderDocument = document.getElementById("root");
if (RenderDocument) {
  createRoot(RenderDocument).render(
    <StrictMode>
      <Toaster />
      <App />
    </StrictMode>,
  );
}
