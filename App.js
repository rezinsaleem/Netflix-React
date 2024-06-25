import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/pages/Home";
import Error from "./src/pages/Error";
import Player from "./src/pages/Player";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";


const App = () => {
  return (
    <div className="app">
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'player/:id',
        element: <Player />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
