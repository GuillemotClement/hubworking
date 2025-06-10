import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./Index.css"; // chargement du fichier css qui contient les import de tailwind
import { router } from "./routes"; // contiens les routes de l'application

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
