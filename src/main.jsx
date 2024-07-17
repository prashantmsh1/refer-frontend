import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PageContextProvider from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <PageContextProvider>
        <App />
    </PageContextProvider>
);
