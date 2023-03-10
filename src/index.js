import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Routes/App.jsx"


const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
    <App />
    </StrictMode>
);
