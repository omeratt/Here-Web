import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({ wheelMultiplier: 0.7 });

lenis.on("scroll", (e: any) => {
  console.log(e);
});

function raf(time: any) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
