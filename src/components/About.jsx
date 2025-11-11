import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              AI/ML Engineer with over 3 years of IT experience.
              Proven expertise in architecting and implementing advanced Retrieval-Augmented Generation (RAG) pipelines 
              and fine-tuning Large Language Models (LLMs). Seeking to leverage this specialized skill set 
              to build scalable, context-aware, and production-grade AI solutions.
            </p>
            <p>
              My journey in IT industry started with curiosity and has evolved
              into a career focused on AI/ML.
              I'm always eager to learn new technologies and improve my skills.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>2</h3>
              <p>Major Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

