"use client"
import React, { useState, useEffect } from "react";
import { IoCloseSharp, IoLogoCss3, IoLogoReact, IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { FaBootstrap, FaGitAlt, FaGithub, FaHtml5, FaInstagram, FaLinkedinIn, FaNodeJs } from "react-icons/fa6";
import { TbBrandJavascript, TbBrandMysql, TbBrandVscode } from "react-icons/tb";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop, SiMongodb, SiVercel } from "react-icons/si";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Apply dark mode on page load if previously enabled
      const savedMode = localStorage.getItem("darkmode");
      if (savedMode === "active") {
        setDarkMode(true);
        document.body.classList.add("darkmode");
      }
      // Define sections and navLinks
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("header nav a");

      // Scroll event listener
      const handleScroll = () => {
        sections.forEach((sec) => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute("id");

          if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              const currentLink = document.querySelector(
                `header nav a[href*="${id}"]`
              );
              if (currentLink) currentLink.classList.add("active");
            });
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkmode", "disabled");
    } else {
      setDarkMode(true);
      document.body.classList.add("darkmode");
      localStorage.setItem("darkmode", "active");
    }
  };


  const onButtonClick = () => {
    const pdfUrl = "/Jai Singh Resume.pdf"; // Path to your PDF file in the public folder
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
  };

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (

    <div>
      <header className="header">
        <a href="#home" className="logo">Jai <span>Singh</span></a>

        {isNavbarOpen ? (
          <IoCloseSharp className="menu-icon close" id="menu-icon" onClick={toggleNavbar} />
        ) : (
          <IoMenu className="menu-icon" id="menu-icon" onClick={toggleNavbar} />
        )}
        <nav className={`navbar ${isNavbarOpen ? 'active' : ''}`}>
          <a href="#home" className="active">Home</a>
          <a href="#education">Education</a>
          <a href="#skill">Skill</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button id="theme-button" onClick={toggleDarkMode}>
            {darkMode ? <IoSunny id="theme-icon" /> : <IoMoon id="theme-icon" />}
          </button>
        </nav>

      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Hello, It&apos;s <span>Jai Singh</span></h1>
          <h3 className="text-animation">I&apos;m a <span></span></h3>
          <p>
            dedicated software developer with a bachelor&apos;s degree in Information
            Technology. I have a good background in the technologies of HTML, CSS, JavaScript, React and Next.js, which I harness to develop catchy and responsive web
            interfaces.I am also specialized in React, which lets me build dynamic
            and high-performance user experiences.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/jai-singh-24b24a298/"
              target="_blank"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a href="github.com/jai-singh5" target="_blank" className="social-icon">
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/rajput_jai005/"
              target="_blank"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="btn-group">
            <a href="#" className="btn" id="resume" onClick={onButtonClick} value="download">Resume</a>
            <a onClick={openModal} className="btn">Contact</a>

          </div>
        </div>
        <div className="home-img">
          <img src="home-img.png" alt="" />
        </div>
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <h2>Contact Details</h2>
              <p>Email: jaisingh09520@gmail.com</p>
              <p>Phone: +91 98191 84556</p>
              <button onClick={closeModal} className="close-button">
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              2018
            </div>
            <div className="timeline-content">
              <h3>Junior College</h3>
              <p>I completed my junior college with a stream of Science (Information Technology) and achieved a score of 56%.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              2022
            </div>
            <div className="timeline-content">
              <h3>Graduation</h3>
              <p>Bachelor in Science in Information Technology</p>
              <p>I completed my Bachelor&apos;s degree in Information Technology from the University of Mumbai with a CGPA of 8.3.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              2023
            </div>
            <div className="timeline-content">
              <h3>Job 1</h3>
              <p>Worked as a Customer Relationship Executive at ICICI Lombard General Insurance, handling customer inquiries and providing information about products and services. Responsibilities included answering queries, processing transactions, and delivering service-related details. Also managed customer feedback to enhance service quality.</p>
            </div>
          </div>

        </div>

      </section>

      <section className="skill" id="skill">
        <h2 className="heading">Skill</h2>
        <div className="skill-container">
          <div className="skill-box">
            <div className="skill-info">
              <h4>FRONTEND</h4>
              <div className="skill-list">
                <p><i className="bx bxl-javascript bx-tada"></i><TbBrandJavascript className="icon-tada" /> JavaScript</p>
                <p><i className="bx bxl-html5 bx-tada"></i><FaHtml5 /> HTML5</p>
                <p><i className="bx bxl-css3 bx-tada"></i><IoLogoCss3 /> CSS3</p>
                <p><i className="bx bxl-react bx-tada"></i><IoLogoReact /> React</p>
                <p><i className="bx bxl-bootstrap bx-tada"></i><FaBootstrap /> Bootstrap</p>
                <p><i className="bx bxl-tailwind-css bx-tada"></i><RiTailwindCssFill /> Tailwind CSS</p>
                <p><i className="bx bxl-adobe bx-tada"></i><SiAdobephotoshop /> Adobe Photoshop</p>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-info">
              <h4>BACKEND</h4>
              <div className="skill-bar">
                <p><FaNodeJs /> Node.js</p>
                <p><RiNextjsFill /> Nest.js</p>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-info">
              <h4>DATABASE</h4>
              <div className="skill-bar">
                <p><SiMongodb /> Mongo DB</p>
                <p><TbBrandMysql /> SQL</p>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-info">
              <h4>OTHER</h4>
              <div className="skill-bar">
                <p><FaGitAlt /> Git</p>
                <p><TbBrandVscode />VS Code</p>
                <p><SiVercel /> Vercel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="project-container">
          <div className="project-box">
            <a href="https://github.com/jai-singh5/Fuel-My-Work.git">
              <img src="Fuel My Work!.png" alt="" />
              <h3>Fuel My Work!</h3>
              <p>Fuel My Work is a crowdfunding platform built with Next.js and Tailwind CSS, designed for fans to financially support their favorite creators projects. It empowers creators developers, artists, and influencers to bring their ideas to life with the backing of their community.</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/Spotify-Clone.git">
              <img src="Spotify clone.png" alt="" />
              <h3>Spotify UI Clone</h3>
              <p>Made a Project on music streaming application built using JavaScript, HTML, and CSS. It features a sleek, user-friendly interface that mimics the look and feel of Spotify. Users can browse and play tracks, view playlists, and enjoy a seamless listening experience.</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/X-Twitter-.git">
              <img src="X.png" alt="" />
              <h3>Twitter(X) UI Clone</h3>
              <p>This project is a simple clone of the X (formerly Twitter) UI using only HTML and Tailwind CSS. The goal is to replicate the main user interface of X while leveraging Tailwind CSS for utility-first styling. Features</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/Snake-Game.git">
              <img src="Snake Game.png" alt="" />
              <h3>Snake Game</h3>
              <p>This classic Snake Game is built with JavaScript, HTML, and CSS. It features smooth gameplay and a responsive design, offering a nostalgic gaming experience. Players navigate the snake to collect food while avoiding collisions with the walls and the snake&apos;s own tail.</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/Rock-Paper-Scissor.git">
              <img src="SPS game.png" alt="" />
              <h3>Rock Paper Scissor</h3>
              <p>This is a simple implementation of the classic Rock, Paper, Scissors game using HTML, CSS, and JavaScript. The user plays against the computer, and the game keeps track of the scores.</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/Tic-Tac-Toe.git">
              <img src="Tic-Tac-Toe.png" alt="" />
              <h3>Tic-Tac-Toe</h3>
              <p>Welcome to the Tic-Tac-Toe game, a simple and fun project built using HTML, CSS, and JavaScript! This is the classic game where two players take turns marking spaces in a 3x3 grid, aiming to be the first to get three marks in a row (horizontally, vertically, or diagonally).</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/Currency-Converter.git">
              <img src="Currency Converter.png" alt="" />
              <h3>Currency Converter</h3>
              <p>A simple, user-friendly web-based currency converter that allows users to convert between multiple currencies using real-time exchange rates fetched from the ExchangeRate-API.</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/Calculator.git">
              <img src="Calculator.png" alt="" />
              <h3>Calculator</h3>
              <p>A simple, user-friendly calculator built using HTML, CSS, and JavaScript. This calculator performs basic arithmetic operations including addition, subtraction, multiplication, and division.</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/To-Do-List.git">
              <img src="To-Do List.png" alt="" />
              <h3>To-Do List</h3>
              <p>This project is a simple yet functional To-Do List application developed using JavaScript, HTML, and CSS. It allows users to add, edit, and remove tasks with ease.The simple interface and responsive design ensure a smooth user experience.</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/Portfolio.git">
              <img src="Portfolio.png" alt="" />
              <h3>Portfolio</h3>
              <p>This portfolio website, built with React.js, showcases my projects, skills in a sleek and interactive format. With responsive design and layout, it highlights my expertise in web development. This site demonstrates my ability to create dynamic and professional web applications.</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/News-Panda.git">
              <img src="News Panda.png" alt="" />
              <h3>News Panda</h3>
              <p>News Panda is a responsive news web application built with React that fetches real-time news using the News API. Users can browse through various categories of news including business, entertainment, health, science, sports, and technology, with the option to load more articles through infinite scrolling.</p>
            </a>
          </div>
          <div className="project-box">
            <a href="https://github.com/jai-singh5/J-Mart.git">
              <img src="J-Mart.png" alt="" />
              <h3>J-Mart</h3>
              <p>Welcome to J-MART, an e-commerce platform built with React and Bootstrap. J-MART offers a seamless shopping experience with a modern user interface and dynamic functionalities. This project demonstrates a clean and responsive design for online shopping.</p>
            </a>
          </div>

        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <form action="">
          <div className="input-group">
            <div className="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="input-group-2">
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn" />
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="social">
          <a href="https://www.linkedin.com/in/jai-singh-24b24a298/" target="_blank"><FaLinkedinIn /></a>
          <a href="https://www.github.com/jai-singh5" target="_blank"><FaGithub /></a>
          <a href="https://www.instagram.com/rajput_jai005/" target="_blank"><FaInstagram /></a>
        </div>
        <ul className="list">
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skill">Skill</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="copyright">&copy; Jai Singh | All Rights Reserved</p>
      </footer>
    </div>
  );
}
