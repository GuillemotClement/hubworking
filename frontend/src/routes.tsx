import { createBrowserRouter } from "react-router";
import RootLayout from "./assets/RootLayout";
import ErrorNotFound from "./pages/ErrorNotFound";
import Homepage from "./pages/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
    ],
  },
]);
