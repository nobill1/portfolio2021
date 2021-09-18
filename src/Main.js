import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./App.css";
import "./Main.css";

function Main() {
  return (
    <>
      <div className="mt-20 mmd:px-3 flex hero container">
        <div className="presentation flex flex-col flex-1">
          <p className="text-primary font-body inline-block">Hi, I am</p>
          <h1 className="font-custom text-secondary inline-block mt-1 md:leading-snug sm:text-4xl mmd:leading-snug md:text-6xl break-words max-w-md xl:max-w-full selector">
            Nguimeya
          </h1>
          <h1
            className="font-custom text-secondary inline-block
           md:leading-snug sm:text-4xl mmd:leading-snug md:text-6xl break-words max-w-md xl:max-w-full"
          >
            Bill-gates
          </h1>
          <p className="font-body mt-1 max-w-lg">
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
          <img src="https://res.cloudinary.com/nobill/image/upload/v1624378081/portfolio2021/illustration.svg" className="illu w-full" alt="logo" />
        </div>
      </div>
      <section
        className="container flex mmd:flex-col section mt-40 px-6 h-max mmd:px-3"
        id="about"
      >
        <div className="about flex-1 justify-center px-4 mmd:px-0">
          <h2 className="font-body sectionHeading inline-block mb-4 font-bold">
            About Me
          </h2>
          <p className="font-body">
            Hi! My name is Bill-gates, self-taught web developer and graphic
            designer with over 4+ years of experiences in a wide range of design
            disciplines. Passionate about tech, design and how it influence our
            daily lives. I like learning skills that cover these fields,
            continue to challenge myself and do interesting things that matter.
          </p>
          <p className="font-body mt-2">
            A few technologies I have been working with recently:
          </p>
          <ul className="mt-2 list-inside list-disc font-mono grid grid-rows-2 grid-cols-2">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>NodeJS</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
        <div className="picture relative shadow-small hover:shadow-large mmd:m-3 h-full w-auto">
          <div id="overlay" className="w-full h-full absolute"></div>
          <img src="https://res.cloudinary.com/nobill/image/upload/v1631955604/portfolio2021/poster-01.png" alt="me" className="h-full w-auto" />
        </div>
      </section>
      <section className="container flex flex-col mmd:flex-col section mt-40 px-6 h-max mmd:px-3 mmd:mb-10">
        <div>
          <h2 className="font-body sectionHeading inline-block mb-4 font-bold">
            Stuff I've built
          </h2>
        </div>
        <div className="projects flex">
          <div className="w-4/6 pr-4">
            <CarouselProvider totalSlides={3}>
              <Slider>
                <Slide index={0}>
                  
                </Slide>
                <Slide index={1}>
                  
                </Slide>
                <Slide index={2}>
                  
                </Slide>
              </Slider>

              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
          </div>
          <div className="description flex-1">
            <h3 className="font-body">Project Name</h3>
          </div>
        </div>
      </section>
      <section className="container flex flex-col mmd:flex-col section mt-40 px-6 h-max mmd:px-3 mmd:mb-10">
        <div className="slg:text-center">
          <h2 className="font-body sectionHeading inline-block mb-4 font-bold">
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
