import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./routes/home";
import { ChakraProvider } from "@chakra-ui/react";

import IntervalsPage from "./routes/intervals-page";
import IntervalsTestPage from "./routes/intervals-test-page";
import Sidebar from "./components/sidebar-component";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Sidebar />}>
      <Route index element={<Home />} />
      <Route path="intervals" element={<IntervalsPage />} />
      <Route path="intervals/test" element={<IntervalsTestPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
