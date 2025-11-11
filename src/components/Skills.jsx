import { useEffect, useRef } from 'react'
import {
  FaPython,
  FaGitAlt,
  FaSearch,
  FaLink,
} from 'react-icons/fa'
import { 
  SiMicrosoftsqlserver, 
  SiPandas, 
  SiTensorflow, 
  SiOpencv, 
  SiKeras,
  SiAmazonaws,
  SiScikitlearn,
  SiOpenai,
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillsRef = useRef(null)

  const skillCategories = [
    {
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'Pandas', icon: <SiPandas />, level: 80 },
        { name: 'LLM', icon: <SiOpenai />, level: 80 },
        { name: 'Machine Learning', icon: <SiTensorflow />, level: 75 },
        { name: 'RAG', icon: <FaSearch />, level: 70 },
        { name: 'OpenCV', icon: <SiOpencv />, level: 85 },
        { name: 'LangChain', icon: <FaLink />, level: 85 },
      ],
    },
    {
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
        { name: 'Keras', icon: <SiKeras />, level: 85 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 85 },
        { name: 'MS SQL', icon: <SiMicrosoftsqlserver />, level: 85 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'AWS', icon: <SiAmazonaws />, level: 65 },
      ],
    },
  ]

  useEffect(() => {
    // Progress bars are now visible by default, no animation needed
    // Keeping the observer for potential future use
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        data-width={skill.level}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

