import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import profilePhoto from './images/Rethina_profile_photo.png'
import './Home.css'

const Home = () => {
  const homeRef = useRef(null)

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

    if (homeRef.current) {
      observer.observe(homeRef.current)
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current)
      }
    }
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home" ref={homeRef}>
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <p className="home-greeting">Hello, I'm</p>
            <h1 className="home-name">
              <span className="gradient-text">Rethina Mohan</span>
            </h1>
            <h2 className="home-title">AI/ML Engineer</h2>
            <p className="home-description">
              Seeking a challenging role as an AI/ML Engineer, leveraging a deep understanding of Retrieval-Augmented Generation and LLM optimization to create data-driven, scalable AI solutions.
            </p>
            <div className="home-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
            <div className="home-social">
              <a
                href="https://www.linkedin.com/in/rethinamani-mohan-606a991bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="social-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="home-image">
            <div className="profile-image-wrapper">
              <img src={profilePhoto} alt="Profile" className="profile-image" />
            </div>
          </div>
        </div>
        <div className="scroll-down" onClick={scrollToAbout}>
          <FaArrowDown />
        </div>
      </div>
    </section>
  )
}

export default Home

