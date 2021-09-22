import gsap from "gsap";
import SplitText from "./utils/Split3.min";
import React, { useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./App.css";
import "./Main.css";
import Illustration from "./Illustration";

function Main() {
  useEffect(() => {
    const split = new SplitText("#Nguimeya", {
      type: "lines",
      linesClass: "lineChildren",
    });

    gsap.to(split.lines, {
      duration: 1,
      x: 0,
      opacity: 1,
      stagger: 0.4,
      ease: "power2",
    });
  });

  return (
    <>
      <div className="mt-20 mmd:px-3 flex hero container" data-scroll-section>
        <div className="presentation flex flex-col flex-1">
          <p className="text-primary font-body inline-block" id="Nguimeya">
            Hi, I am
          </p>
          <h1
            className="font-custom text-secondary inline-block mt-1 md:leading-snug sm:text-4xl mmd:leading-snug md:text-6xl break-words max-w-md xl:max-w-full msm:text-5xl block"
            id="Nguimeya"
          >
            Nguimeya Bill-gates
          </h1>
          <p className="font-body mt-1 max-w-lg msm:w-4/6">
            front end developer and graphic designer from{" "}
            <span className="text-secondary">Yaounde</span>, Cameroon. I
            specialize Web development and occasionally designing digital
            experiences.
          </p>
          <div className="mt-3 py-md">
            <a
              href="https://resume.io/r/7bUEJMzgT"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body p-md bg-primary text-white-150 border-4 border-secondary border-dashed shadow-small hover:shadow-large hover:border-primary hover:bg-secondary button"
            >
              Resume
            </a>
          </div>
          <div className="flex mt-5">
            <a
              href="https://www.linkedin.com/in/nguimeya-bill-gates-9b614b146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mr-2 hover:text-secondary icon"
            >
              <i className="lni lni-linkedin text-2xl"></i>
            </a>
            <a
              href="https://codepen.io/Bill1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mr-2 hover:text-secondary icon"
            >
              <i className="lni lni-codepen text-2xl"></i>
            </a>
            <a
              href="https://github.com/nobill1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mr-2 hover:text-secondary icon"
            >
              <i className="lni lni-github text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/go_bill_go"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mr-2 hover:text-secondary icon"
            >
              <i className="lni lni-twitter text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/go_bill_go/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary icon"
            >
              <i className="lni lni-instagram-original text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="ill mmd:hidden flex flex-1">
          <img
            src="https://res.cloudinary.com/nobill/image/upload/v1631969346/portfolio2021/illustration.svg"
            className="illu w-full"
            alt="illustration"
          />
          {/* <Illustration className="illu w-full"/> */}
        </div>
      </div>
      <section
        className="container flex mmd:flex-col section mt-40 px-6 h-max mmd:px-3"
        id="about"
        data-scroll-section
      >
        <div className="about flex-1 justify-center px-4 mmd:px-0">
          <h2 className="font-body sectionHeading inline-block mb-4 font-bold text-primary">
            About Me
          </h2>
          <p className="font-body msm:5/6">
            Hi! My name is Bill-gates, self-taught web developer and graphic
            designer with over 4+ years of experiences in a wide range of design
            disciplines. Passionate about tech, design and how it influence our
            daily lives. I like learning skills that cover these fields,
            continue to challenge myself and do interesting things that matter.
          </p>
          <p className="font-body mt-2">
            A few technologies I have been working with recently:
          </p>
          <ul className="mt-2 list-inside list-disc font-mono grid grid-rows-2 grid-cols-2 msm:grid-cols-1">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>NodeJS</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
        <div className="picture relative shadow-small hover:shadow-large mmd:my-3 h-full w-auto msm:w-auto">
          <div id="overlay" className="w-full h-full absolute"></div>
          <img
            src="https://res.cloudinary.com/nobill/image/upload/v1631955604/portfolio2021/poster-01.png"
            alt="me"
            className="h-full w-auto"
          />
        </div>
      </section>
      <section
        className="container flex flex-col mmd:flex-col section mt-40 px-6 h-max mmd:px-3 mmd:mb-10"
        data-scroll-section
      >
        <div>
          <h2 className="font-body sectionHeading inline-block mb-4 font-bold text-primary">
            Technologies
          </h2>
        </div>
        <div class="tech-grid">
        <div className="flex justify-center items-center flex-col tech-items py-3"><i class="lni lni-react text-5xl text-secondary mb-1"></i><p className="font-body">React</p></div>
        <div className="flex justify-center items-center flex-col tech-items py-3"><i class="lni lni-javascript text-5xl text-secondary mb-1"></i><p className="font-body">Javascript</p></div>
        <div className="flex justify-center items-center flex-col tech-items py-3"><i class="lni lni-html5 text-5xl text-secondary mb-1"></i><p className="font-body">HTML5</p></div>
        <div className="flex justify-center items-center flex-col tech-items py-3"><i class="lni lni-css3 text-5xl text-secondary mb-1"></i><p className="font-body">CSS3</p></div>
        <div className="flex justify-center items-center flex-col tech-items py-3"><i class="lni lni-adobe text-5xl text-secondary mb-1"></i><p className="font-body">Adobe Suite</p></div>
        <div className="flex justify-center items-center flex-col tech-items py-3"><i class="lni lni-git text-5xl text-secondary mb-1"></i><p className="font-body">Git</p></div>
        <div className="flex justify-center items-center flex-col tech-items py-3"><i class="lni lni-ux text-5xl text-secondary mb-1"></i><p className="font-body">UI/UX</p></div>
        <div className="flex justify-center items-center flex-col tech-items py-3"><i class="lni lni-figma text-5xl text-secondary mb-1"></i><p className="font-body">Figma</p></div>
        
</div>
<div className="mt-3 text-center"><p className="font-body">And many more...</p></div>
                 
      </section>
      <section
        className="container flex flex-col mmd:flex-col section mt-40 px-6 h-max mmd:px-3 mmd:mb-10"
        data-scroll-section
      >
        <div>
          <h2 className="font-body sectionHeading inline-block mb-4 font-bold text-primary">
            Stuff I've built
          </h2>
        </div>
        <div className="parent">
          <div className="div1 bg-white-300 relative">
            <div className="description flex-1 absolute m-4 p-3 w-auto opacity-0">
              <h3 className="font-body">Project Name</h3>
              <p className="font-body">
                Talks about the project.
              </p>
              <ul className="mt-2 list-inside list-disc font-mono grid grid-rows-2 grid-cols-2">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
          <div className="div2 bg-white-300"> </div>
          <div className="div3 bg-white-300"> </div>
        </div>
      </section>
      <section
        className="container flex flex-col mmd:flex-col section mt-40 px-6 h-max mmd:px-3 mmd:mb-10"
        data-scroll-section
      >
        <div className="slg:text-center">
          <h2 className="font-body sectionHeading inline-block mb-4 font-bold text-primary">
            Contact me
          </h2>
        </div>
        <div className="slg:text-center">
          <p className="font-body w-3/5 mlg:w-auto slg:mx-auto">
            Need help or just want to say hi? Go ahead! Don't be shy.
          </p>
        </div>

        <div className="mt-3 py-md flex slg:justify-center">
          <a
            href="mailto:bnguimeya007@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body p-md bg-primary text-white-150 border-4 border-secondary border-dashed shadow-small hover:shadow-large hover:border-primary hover:bg-secondary button"
          >
            Get in touch!
          </a>
        </div>
      </section>
    </>
  );
}

export default Main;
