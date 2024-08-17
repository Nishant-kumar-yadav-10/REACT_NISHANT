import React from "react";
import ReactDom from "react-dom/client";
const heading=React.createElement("h1",{className:"heading1"},"nishant!!");
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);