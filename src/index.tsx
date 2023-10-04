import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import { ChakraProvider } from "@chakra-ui/react";

import IntervalsPage from "./routes/intervals-page";
import IntervalsTestPage from "./routes/intervals-test-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "intervals",
        element: <IntervalsPage />,
      },
      {
        path: "intervals/test",
        element: <IntervalsTestPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
