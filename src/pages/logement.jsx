import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LogementPage from "../components/logement";
import "../CSS/styles.css";

export default function Logement() {
  return (
    <div className="main">
      <Header />
      <LogementPage />
      <Footer />
    </div>
  );
}
