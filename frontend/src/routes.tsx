import { createBrowserRouter } from "react-router";
import RootLayout from "./assets/RootLayout";
import ErrorNotFound from "./pages/ErrorNotFound";
import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ListCoworking from "./pages/coworking/ListCoworking";
import DetailCoworking from "./pages/coworking/DetailCoworking";
import DetailUser from "./pages/users/DetailUser";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/coworkings",
        element: <ListCoworking />,
      },
      {
        path: "/coworkings/:id",
        element: <DetailCoworking />,
      },
      {
        path: "/profil/:id",
        element: <DetailUser />,
      },
    ],
  },
]);
