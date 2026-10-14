import React, { useEffect, useState } from "react";
import './App.css'
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div>
      <Navbar />

      <h1>Welcome to My Website</h1>

      <ContactForm />
    </div>
  );
}

export default App;