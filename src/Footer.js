import React from "react";
import "./App.css";
import "./Footer.css";

function Footer() {
  return (
    <section className="mx-auto justify-center flex mmd:px-3 mt-4 w-max h-auto" data-scroll-section>
      <div className="h-9 flex flex-col justify-center">
        <p className="font-body inline my-3 mx-auto text-center">
          © 2021. Coded by <span className="text-primary">Nguimeya Bill-gates</span> with React & TailwindCss
        </p>
      </div>
    </section>
  );
}

export default Footer;
