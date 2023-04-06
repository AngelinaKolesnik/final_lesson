import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./constants/Routers";
import { Main } from "./pages/Main";
import { Facts } from "./pages/Facts";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Main />,
  },
  {
    path: Routes.FACTS,
    element: <Facts />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
