import React from "react";
import Navbar from "./navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
    </>
  );
};

export default layout;
