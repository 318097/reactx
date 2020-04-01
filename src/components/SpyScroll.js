import React, { useEffect, useState, useRef } from "react";
import "./SpyScroll.scss";

const sections = ["profile", "work", "skills", "contact"];

const Navigation = ({ activeSection, scrollTo }) => (
  <nav>
    {sections.map(section => (
      <div
        key={section}
        className={`item  ${activeSection === section ? "active-link" : ""}`}
        onClick={() => scrollTo(section)}
      >
        {section.toUpperCase()}
      </div>
    ))}
  </nav>
);

const SpyScroll = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const scrollRef = useRef(null);
  const inputRefs = {
    profile: useRef(null),
    work: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    scrollRef.current.addEventListener("scroll", scroller);
    return () => scrollRef.current.removeEventListener("scroll", scroller);
  }, []);

  const scroller = () => {
    const scrollPosition = scrollRef.current.scrollTop;
    let activeTab = "profile";
    sections.forEach(section => {
      const offset = inputRefs[section].current.offsetTop;
      if (offset < scrollPosition + 100) activeTab = section;
    });
    setActiveSection(activeTab);
  };

  const scrollTo = section => {
    const sectionOffset = inputRefs[section].current.offsetTop;
    scrollRef.current.scrollTop = sectionOffset;
    setActiveSection(section);
  };

  return (
    <section id="spy-scroll" className="container">
      <div className="content" ref={scrollRef}>
        <div ref={inputRefs.profile} className="section">
          PROFILE
        </div>
        <div ref={inputRefs.work} className="section">
          WORK
        </div>
        <div ref={inputRefs.skills} className="section">
          SKILLS
        </div>
        <div ref={inputRefs.contact} className="section">
          CONTACT
        </div>
      </div>
      <Navigation activeSection={activeSection} scrollTo={scrollTo} />
    </section>
  );
};

export default SpyScroll;
