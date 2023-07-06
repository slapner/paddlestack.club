import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/error";
import { AuthProvider } from "./contexts/auth";
import LadingPage from "./pages/landingpage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LadingPage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "logout",
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}
