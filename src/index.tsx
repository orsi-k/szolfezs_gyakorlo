import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./routes/home";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/navbar-component";
import IntervalsPage from "./routes/intervals-page";
import IntervalsTestPage from "./routes/intervals-test-page";
import TriadsPage from "./routes/triads-page";
import TriadsTestPage from "./routes/triads-test-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="intervals" element={<IntervalsPage />} />
      <Route path="intervals/test" element={<IntervalsTestPage />} />
      <Route path="triads" element={<TriadsPage />} />
      <Route path="triads/test" element={<TriadsTestPage />} />
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
