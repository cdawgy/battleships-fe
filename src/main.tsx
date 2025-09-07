import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import Join from "./pages/Join";
import Lobby from "./pages/Create";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/join" Component={Join} />
      <Route path="/lobby/:roomId" Component={Lobby} />
    </Routes>
  </BrowserRouter>
);
