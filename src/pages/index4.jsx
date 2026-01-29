import React, { useState } from "react";
import CircularText from "../components/CircularText";
import CardSwap, { Card } from "../components/CardSwap";
import FloatingLines from "../components/FloatingLines";
import Plasma from "../components/Plasma";
import DarkVeil from "../components/DarkVeil";
import LightPillar from "../components/LightPiller";
import GradientText from "../components/GradientText";

import { MdOutlineLightMode } from "react-icons/md";
import { PiHandWavingFill } from "react-icons/pi";
import LogoLoop from "../components/LogoLoop";
import ProjectShowcase from "../components/ProjectShowcase";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Project data for better maintainability
const projects = [
  {
    id: 1,
    title: "AutoHire",
    description: "Vehicle Rental System",
    image: "./images/autohire.png",
    bgColor: "bg-yellow-500",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "CoreHr",
    description: "Employee Management System",
    image: "./images/corehr.png",
    bgColor: "bg-purple-500",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "ParkBay",
    description: "Parking Management System",
    image: "./images/parkbay.png",
    bgColor: "bg-indigo-500",
    githubUrl: "#",
    liveUrl: "#"
  }
];

// Extracted ProjectCard component for better code organization
const ProjectCard = ({ project }) => (
  <Card>
    <div className="flex flex-col justify-start gap-6 sm:gap-8 md:gap-10 w-full h-full rounded-xl overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[100px] opacity-30" />
      
      {/* Project image */}
      <img 
        src={project.image} 
        alt={`${project.title} preview`}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      
      {/* Project info */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 px-4 sm:px-6 md:px-10 pb-4">
        <div className="flex flex-col justify-center flex-1">
          <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
          <p className="text-sm sm:text-base text-gray-200">{project.description}</p>
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-3 sm:gap-5 items-center">
          <a 
            href={project.githubUrl}
            className="flex justify-center items-center p-2 sm:py-2 sm:px-4 border-2 rounded-xl border-white hover:bg-white/10 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub size={20} />
          </a>
          <a 
            href={project.liveUrl}
            className={`flex justify-center items-center p-2 sm:py-2 sm:px-4 border-2 rounded-xl ${project.bgColor} hover:opacity-80 transition-opacity`}
            aria-label={`View ${project.title} live demo`}
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  </Card>
);

// Extracted GradientButton component for reusability
const GradientButton = ({ children, variant = "primary", className = "", ...props }) => {
  const gradients = {
    primary: "from-[#4079ff] to-[#40ffaa]",
    secondary: "from-[#dedede] to-[#3c3c3c]"
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${gradients[variant]} blur-xl opacity-40`} />
      
      {/* Button with gradient border */}
      <div className={`relative inline-block w-full p-[1px] rounded-lg bg-gradient-to-br ${gradients[variant]}`}>
        <button 
          className="w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors"
          {...props}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-black px-4 sm:px-8 md:px-16 py-6 overflow-hidden">
        {/* Navigation - Improved responsive behavior */}
        <nav className="w-full flex justify-center" role="navigation" aria-label="Main navigation">
          <div className="flex flex-wrap items-center justify-between sm:justify-center gap-4 sm:gap-8 md:gap-16 bg-blue-500/5 border border-white/10 backdrop-blur-md rounded-3xl px-4 sm:px-6 py-2 w-full sm:w-auto">
            <img src="/images/LOGO.png" alt="Portfolio Logo" className="w-7 sm:w-8" />

            <ul className="flex gap-4 sm:gap-6 md:gap-8 text-sm text-gray-200">
              <li>
                <a href="#projects" className="hover:text-white transition-colors cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>

            <button 
              className="p-2 rounded-full text-blue-400 hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              <MdOutlineLightMode size={20} />
            </button>
          </div>
        </nav>

        {/* Hero Content - Improved spacing and responsive typography */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col gap-6 sm:gap-8 relative z-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="flex items-center gap-2 text-sm sm:text-base text-gray-300 font-light tracking-tight mb-2">
              <PiHandWavingFill size={22} className="sm:w-6 sm:h-6" aria-hidden="true" /> 
              Hey I'm Amila,
            </span>

            <span className="block text-gray-200 tracking-wide">Software</span>
            <span>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={20}
                showBorder={false}
                className="custom-class"
              >
                Developer
              </GradientText>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Crafting modern, interactive web experiences.
          </p>

          {/* Tech stack logos - Improved responsive container */}
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[45%]">
            <div className="h-32 sm:h-40 md:h-48 lg:h-[200px] relative overflow-hidden">
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={40}
                gap={50}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Technology stack"
              />
            </div>
          </div>

          {/* CTA Buttons - Fixed spacing and responsive widths */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10">
            <GradientButton 
              variant="secondary"
              className="w-full sm:w-auto min-w-[140px]"
              aria-label="Contact me"
            >
              Contact Me
            </GradientButton>
            
            <GradientButton 
              variant="primary"
              className="w-full sm:w-auto min-w-[140px]"
              aria-label="View GitHub profile"
            >
              GitHub
            </GradientButton>
          </div>
        </div>

        {/* Background decorative images - Improved positioning */}
        <img
          className="absolute right-0 -bottom-2 w-[60%] sm:w-[50%] md:w-[42%] z-0 opacity-5 pointer-events-none"
          src="./images/LOGO.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="absolute right-0 bottom-0 w-[50%] sm:w-[40%] md:w-[35%] z-10 brightness-80 pointer-events-none"
          src="./images/fiverr.png"
          alt=""
          aria-hidden="true"
        />
      </section>

      {/* Projects Section - Improved layout and accessibility */}
      <section 
        id="projects"
        className="relative w-full min-h-screen bg-black px-4 sm:px-8 md:px-16 py-12 sm:py-16 overflow-hidden"
      >
        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tl from-[#4079ff] to-[#40ffaa] blur-[150px] sm:blur-[200px] opacity-50" />
        
        {/* Project cards - Better responsive positioning */}
        <div
          className="hidden lg:block absolute bottom-20 xl:bottom-35 right-10 xl:right-30"
          style={{ height: "600px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
          >
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </CardSwap>
        </div>

        {/* Section content */}
        <div className="h-full flex flex-col items-start justify-start gap-8 sm:gap-10 mt-8 sm:mt-16 md:mt-20 lg:mt-40">
          <h2 className="text-lg sm:text-xl font-normal flex items-center gap-2 py-3 border-b border-white/20 px-4 opacity-80">
            Recent
            <span className="font-bold">Work</span>
          </h2>

          <div className="w-full">
            <ProjectShowcase paused={isPaused} />
          </div>
        </div>
      </section>

      {/* CTA Section - Improved responsive spacing */}
      <section 
        id="contact"
        className="w-full min-h-[400px] sm:min-h-[500px] lg:h-[600px] px-4 sm:px-8 md:px-16 lg:px-32 py-12 sm:py-16 bg-black flex justify-center items-center"
      >
        <div className="relative w-full h-full bg-gray-950 rounded-3xl lg:rounded-[2rem] overflow-hidden p-8 sm:p-12 md:p-16">
          {/* Decorative gradients */}
          <div className="absolute right-0 top-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-[#4079ff] to-[#40ffaa] blur-[100px] sm:blur-[150px]" />
          <div className="absolute left-0 bottom-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-[#4079ff] to-[#40ffaa] blur-[100px] sm:blur-[150px]" />
          
          {/* Content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 w-full px-4">
            <h2 className="w-full max-w-2xl text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
              <span className="bg-gradient-to-br from-[#4079ff] to-[#40ffaa] text-transparent bg-clip-text">
                Let's make
              </span>{" "}
              your next big idea{" "}
              <span className="bg-gradient-to-br from-[#4079ff] to-[#40ffaa] text-transparent bg-clip-text">
                Real
              </span>
            </h2>
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 text-white border-2 font-medium border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Footer - New addition matching design system */}
      <footer className="w-full bg-black border-t border-white/10 px-4 sm:px-8 md:px-16 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand column */}
            <div className="flex flex-col gap-4">
              <img src="/images/LOGO.png" alt="Logo" className="w-10" />
              <p className="text-sm text-gray-400 max-w-xs">
                Building modern web experiences with passion and precision.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm">Quick Links</h3>
              <nav className="flex flex-col gap-2" aria-label="Footer navigation">
                <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </a>
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm">Connect</h3>
              <div className="flex gap-4">
                <a 
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label="GitHub profile"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label="Twitter profile"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label="Email contact"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Amila. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;