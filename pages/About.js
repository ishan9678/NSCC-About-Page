import { useCallback, useState, forwardRef } from "react";
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Footer from "@/components/Footer";

function About() {
  return (
    <div>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default About;
