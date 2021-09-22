import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import useLocoScroll from "./hooks/useLocoScroll";

function App() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(2);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }
  useLocoScroll(!preloader);

  useEffect(()=>{
    id.current = window.setInterval(()=>{
      setTimer((timer) => timer-1)
    }, 1000)
  },[])

  useEffect(()=>{
    if (timer === 0) {
      clear();
    }
  },[timer])

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <img src="https://res.cloudinary.com/nobill/image/upload/v1624378077/portfolio2021/logo.svg" className="logo" alt="logo" />
        </div>
      ) : (
        <div className="grid w-full h-full" id="main-container" data-scroll-container>
          <Navbar className="row-start-1 row-end-2" />
          <Main className="row-start-3 row-end-4" id="Main" />
          <Footer className="row-start-5 row-end-6" />
        </div>
      )}
    </>
  );
}

export default App;
