import { useEffect, useRef, useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'
import kychub1 from './images/kychub1.png'
import kychub2 from './images/kychub2.png'
import ragFlow from './images/rag_flow.png'

const Projects = () => {
  const projectsRef = useRef(null)
  const [isFlowOpen, setIsFlowOpen] = useState(false)

  const projects = [
    {
      title: 'KYCHUB-Insurance Chatbot',
      description:
        'Developed a RAG-based customer support chatbot using LangChain, LLMs, with scalable application deployment via CI/CD pipelines to ensure high performance and reliability. Designed and developed an AI-powered OCR application that achieved over 95% data extraction accuracy, and optimized document extraction time by 15%. Integrated OCR outputs into a Retrieval-Augmented Generation (RAG) framework to enable context-aware chatbot responses with real-time document referencing. Ensured robustness through testing, performance benchmarking, Docker container deployment, and CI/CD pipeline integration for production readiness. Authored detailed technical documentation and SOPs to support team collaboration, maintainability, and future scalability.',
      technologies: ['Python','RAG', 'LLM', 'Langchain','GEN-AI'],
      image: kychub1,
      demo: '#flow',
      flowDemo: true,
    },
    {
      title: 'KYCHUB-OCR Data Extraction',
      description:
        'Developed and fine-tuned OCR data Extraction Application using Neural Network Architectures for large-scale, achieving in a 20% improvement in model accuracy and efficiency from All POI Document, providing more precise business insights and decision-making. Executed and optimized pre-trained Deep Learning models for Face matching applications using deep learning frameworks such as TensorFlow and Keras. Developed robust OCR engine for accurate text extraction, fine-tuning applications for POI to handle various document types effectively. Collaborated with frontend and other team members to integrate backend systems with user interfaces seamlessly. Managed deployment of OCR engines and monitored application performance on Linux-based and UAT and SIT servers.',
      technologies: ['Python','OpenCV', 'Tesseract','MS SQL'],
      image: kychub2,
      demo: '',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in-up')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      const projectItems = projectsRef.current.querySelectorAll('.project-item')
      projectItems.forEach((item) => observer.observe(item))
    }

    return () => {
      if (projectsRef.current) {
        const projectItems = projectsRef.current.querySelectorAll('.project-item')
        projectItems.forEach((item) => observer.unobserve(item))
      }
    }
  }, [])

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.flowDemo ? (
                    <a
                      href={project.demo}
                      className="project-link"
                      aria-label="Demo"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsFlowOpen(true)
                      }}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  ) : project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {isFlowOpen && (
          <div className="modal-backdrop" role="dialog" aria-modal="true">
            <div className="modal-content">
              <button
                className="modal-close"
                aria-label="Close flow chart"
                onClick={() => setIsFlowOpen(false)}
              >
                ×
              </button>
              <div className="modal-body">
                <img src={ragFlow} alt="RAG Flow" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

