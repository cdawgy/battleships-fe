import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import Join from "./pages/Join";
import Create from "./pages/Create";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/join" Component={Join} />
        <Route path="/create" Component={Create} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
