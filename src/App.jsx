import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Tables from "./Pages/Tables";
import Forms from "./Pages/Forms";
import Charts from "./Pages/Charts";
import RouteLayout from "./RouteLayout";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "tables",
        element: <Tables />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
