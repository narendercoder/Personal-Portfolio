import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ErrorPage from "./Pages/ErrorPage";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";


const Content = () =>{
  

  return (
     <BrowserRouter>
      <>
      
        <div className="container">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<Home />}>
                <Route index element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </>
      <Footer />
    </BrowserRouter>

  );
}

export default Content;
