// src/Portfolio.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./index.css";

const projectsData = [
  {
    title: "Palang parkir otomatis berbasis arduino",
    desc: "This project uses an Arduino Uno microcontroller to control an automatic parking barrier system. An ultrasonic sensor is used to detect vehicles, and a servo motor is used to open or close the barrier. The LCD functions to display the parking status in real-time.",
    tech: ["c++", "arduino ide"],
    img: "hallo.jpg",
    demo: "#",
    repo: "https://github.com/Bayusukraa/konsep-oop-data-mahasiswa ",
  },
  {
    title: "UI aplikasi TOS",
    desc: "This project features an interface design for an online ticket booking application with a focus on ease of use and a modern look. The design is made responsive to ensure comfort across various devices and is equipped with smooth animations to provide an interactive and professional user experience.",
    tech: ["figma", "ui/ux"],
    img: "tos.png",
    demo: "https://www.figma.com/design/HOAHncP4s1IH4ty2DUdYQZ/Untitled?node-id=0-1&t=wyirDiCIXbkmpH1J-1",
    repo: "https://www.figma.com/design/HOAHncP4s1IH4ty2DUdYQZ/Untitled?node-id=0-1&t=wyirDiCIXbkmpH1J-1",
  },

  {
    title: "Website portofolio",
    desc: "This project is a personal portfolio website designed to showcase profiles, experiences, and a collection of projects in an interactive and professional manner. The website is built using React with a modern dark-themed design and smooth transition animations to create an elegant and dynamic appearance. In addition to serving as a personal branding medium.",
    tech: ["js", "Html", "css"],
    img: "porto.png",
    demo: "https://www.figma.com/design/HOAHncP4s1IH4ty2DUdYQZ/Untitled?node-id=0-1&t=tdjSft9RJ0CoxH9W-1",
    repo: "#",
  },

  
  
];

// ===== TypeWriter Component =====
// ===== TypeWriter Component (looping) =====
function TypeWriter({ text, typingSpeed = 200, deletingSpeed = 200, pause = 1000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText.length < text.length) {
      // mengetik
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === text.length) {
      // jeda setelah selesai mengetik
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText.length > 0) {
      // menghapus
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // jeda sebelum mulai mengetik lagi
      timer = setTimeout(() => setIsDeleting(false), pause);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pause]);

  return (
    <span
      className="pf-gradient"
      style={{
        display: "inline-block",
        whiteSpace: "nowrap",
        borderRight: "2px solid #fff",
      }}
    >
      {displayedText}
    </span>
  );
}






export default function Portfolio() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message)
      return alert("Tolong lengkapi form.");

    const mailto = `mailto:bayusukra45@email.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
      contact.name
    )}&body=${encodeURIComponent(
      contact.message +
        "\n\nFrom: " +
        contact.name +
        " <" +
        contact.email +
        ">"
    )}`;

    window.location.href = mailto;
    setSent(true);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pf-root">
      {/* NAV */}
      <motion.header
        className="pf-nav"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="pf-brand">
          bayusukra<span>Porto</span>
        </div>

        <button
          className="pf-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`pf-links ${menuOpen ? "active" : ""}`}>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      {/* HERO */}
      <section className="pf-hero" id="home">
        <motion.div
          className="pf-hero-left"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="pf-eyebrow">
            Frontend Developer • Gamer • UI/UX Designer
          </div>

          <h1>
            Hi, I'm <TypeWriter text="Bayu Sukra" speed={150} />
          </h1>

          <p className="pf-lead">
            I design and build simple yet modern web experiences, focusing on performance, accessibility, and smooth user interfaces.
          </p>

          <div className="pf-cta">
            <a className="btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn-outline" href="https://drive.google.com/file/d/1Ww7iQY7i5MY9_NJQR-Tlos10gMiAI1OB/view?usp=drivesdk">
              View My CV
            </a>
          </div>

          <div className="pf-socials" aria-label="social">
            <a aria-label="github" href="https://github.com/Bayusukraa" title="GitHub">
              <FaGithub />
            </a>
            <a aria-label="linkedin" href="https://www.linkedin.com/in/bayu-sukra-0a6645353a" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a aria-label="instagram" href="https://www.instagram.com/bayuskraa?igsh=MXYyZGdlaGFwMmc0Yw==" title="Instagram">
              <FaInstagram />
            </a>
            <a aria-label="whatsapp" href="https://wa.me/081998462528
" title="whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="pf-hero-right"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="pf-avatar-wrap">
            <img className="pf-avatar" src="/hy.jpg" alt="bayusukra" />
            <div className="pf-avatar-glow" />
          </div>

          <div className="pf-stats">
            <div className="pf-stat-card">
              <strong>21</strong>
              <span>Years old</span>
            </div>
            <div className="pf-stat-card">
              <strong>5+</strong>
              <span>Projects</span>
            </div>
            <div className="pf-stat-card">
              <strong>100%</strong>
              <span>mother's pray</span>
            </div>
          </div>
        </motion.div>
      </section>
<br>
</br>
<br>
</br>
<br>
</br>
      {/* SKILLS */}
      {/* SKILLS */}
<section id="skills" className="pf-section pf-skills-modern">
  <div className="pf-section-header">
    <div className="pf-line-decor" />
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Core Skills
    </motion.h2>
  </div>

  <motion.p
    className="pf-section-lead"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    Modern frontend stack, performance optimization, and UI/UX Designer.
  </motion.p>

  <div className="pf-skills-grid">
    {[
      { title: "React.js", width: "92%", tech: "" },
      { title: "Figma", width: "88%", tech: "" },
      { title: "Bootstrap", width: "85%", tech: "" },
      { title: "HTML", width: "90%", tech: "" },
      { title: "CSS", width: "90%", tech: "" },
      { title: "PHP", width: "87%", tech: "" },
      { title: "GitHub", width: "85%", tech: "" },
      { title: "Python", width: "80%", tech: "" },
      { title: "Wordpress", width: "80%", tech: "" },
    ].map((skill, i) => (
      <motion.div
        key={i}
        className="pf-skill pf-skill-modern"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="pf-skill-title">{skill.title}</div>
        <div className="pf-skill-bar">
          <div style={{ width: skill.width }} />
        </div>
        <div className="pf-skill-tech">{skill.tech}</div>
      </motion.div>
    ))}
  </div>
</section>
<br>
</br>
<br>
</br>
      
      {/* PROJECTS */}
<section id="projects" className="pf-section projects-modern">
  <div className="pf-section-header">
    <div className="pf-line-decor" />
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Selected Projects
    </motion.h2>
  </div>

  <motion.p
    className="pf-section-lead"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    Detailed, polished projects — built end-to-end with modern web stack.
  </motion.p>

  <div className="pf-projects-grid">
    {projectsData.map((p, i) => (
      <motion.article
        className="pf-project"
        key={i}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="pf-project-media">
          <img src={p.img} alt={p.title} />
        </div>
        <div className="pf-project-body">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="pf-tech">
            {p.tech.map((t, idx) => (
              <span key={idx}>{t}</span>
            ))}
          </div>
          <div className="pf-project-actions">
            <a className="link" href={p.demo} target="_blank" rel="noreferrer">
              Live Demo <FaExternalLinkAlt />
            </a>
            <a className="link" href={p.repo} target="_blank" rel="noreferrer">
              Repository
            </a>
          </div>
        </div>
      </motion.article>
    ))}
  </div>
</section>




      {/* CONTACT */}
      <section id="contact" className="pf-section pf-contact-modern">
  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Get in Touch
  </motion.h2>

  <motion.p
    className="pf-section-lead"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    Have a project in mind or want to collaborate? Feel free to reach out —
    I’m always open to discussing new ideas and opportunities.
  </motion.p>

  <div className="pf-contact-wrapper">
    {/* LEFT: FORM */}
    <motion.form
      className="pf-contact-card"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pf-input-group">
        <label>Name</label>
        <input
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="pf-input-group">
        <label>Email</label>
        <input
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </div>

      <div className="pf-input-group">
        <label>Message</label>
        <textarea
          name="message"
          value={contact.message}
          onChange={handleChange}
          placeholder="Write your message..."
          rows="5"
        />
      </div>

      <button type="submit" className="btn-modern">
        {sent ? "Opening mail..." : "Send Message"}
      </button>
    </motion.form>

    {/* RIGHT: INFO */}
    <motion.div
      className="pf-contact-info-modern"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3>Contact Info</h3>
      <p>Let's connect and make something great together 🚀</p>

      <div className="pf-info-item">
        <FaEnvelope />{" "}
        <a href="mailto:bayusukra45@email.com">
          bayusukra45@email.com
        </a>
      </div>

      <div className="pf-info-item">
        <FaWhatsapp />{" "}
        <a href="https://wa.me/081998462528" target="_blank" rel="noreferrer">
          WhatsApp Me
        </a>
      </div>

      <div className="pf-info-socials">
        <a href="https://github.com/Bayusukraa">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/bayu-sukra-0a6645353a">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/bayuskraa">
          <FaInstagram /> Instagram
        </a>
      </div>
    </motion.div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="pf-footer">
        <small>© {new Date().getFullYear()} bayuskraa</small>
      </footer>
    </div>
  );
}
