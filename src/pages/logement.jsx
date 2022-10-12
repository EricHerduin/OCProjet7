import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LogementPage from "../components/logement";
import "../css/styles.css";

export default function Logement() {
  return (
    <div className="main">
      <div>
        <Header />
        <LogementPage />
      </div>
      <Footer />
    </div>
  );
}
