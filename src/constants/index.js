import { Code, Database, Globe, Server, Terminal, Cpu, Layout, FileText, Braces, Atom, Layers, Monitor } from 'lucide-react';


export const RESUME_DATA = {
  personalInfo: {
    name: "BOLLA SHIVA SHANKAR",
    location: "Warangal, Telangana",
    linkedin: "https://www.linkedin.com/in/shiva-shankar-bolla-34724a257/",
    github: "https://github.com/ShivaBolla",
    resumeLink: "/resume.pdf",
    about: "I am a B.Tech graduate in Computer Science and Engineering with a strong interest in software development and problem solving. I enjoy building applications and continuously improving my programming and development skills.."
  },
  education: [
    {
      degree: "BTech (CSE)",
      institution: "Bharath University",
      year: "2021-25",
      score: "82%"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      year: "2019-21",
      score: "84%"
    },
    {
      degree: "S.S.C",
      institution: "St. Mary’s High School",
      year: "2019",
      score: "90%"
    }
  ],
  skills: [
    { name: "Python", icon: Terminal },
    { name: "SQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "HTML/CSS", icon: Layout },
    { name: "JavaScript", icon: Braces },
    { name: "Django", icon: Server },
    { name: "React.js", icon: Atom },
    { name: "Express.js", icon: Server },
    { name: "Next.js", icon: Layers },
    { name: "GitHub", icon: Url => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
    { name: "GitHub Desktop", icon: Monitor },
    { name: "VSCode", icon: FileText },
  ],
  projects: [
    {
      title: "Sign Language Recognition System",
      description: "Developed a real-time Sign Language Recognition System using Machine Learning to accurately interpret American Sign Language (ASL) hand gestures and convert them into corresponding text.",
      technologies: ["Python", "OpenCV", "CVZone", "MediaPipe", "NumPy", "Math", "Time", "Teachable Machine", "keras_model.h5", "ASL (American Sign Language) Signs Dataset", "VSCode"],
      workflow: [
        {
          step: "Data Collection",
          desc: "Used Python script (data_collection.py) to collect gesture images with hand-tracking using MediaPipe & OpenCV. Each image was saved in label-based folders."
        },
        {
          step: "Labels Creation",
          desc: "Stored labels in a text file (labels.txt) representing each ASL character/sign used for classification."
        },
        {
          step: "Model Creation",
          desc: "Used Teachable Machine to train the model with the collected dataset. Exported trained model as keras_model.h5 to use in real-time recognition."
        },
        {
          step: "Testing/Prediction (test.py)",
          desc: "Used the trained model for live hand sign recognition. Displayed predicted sign using OpenCV's real-time video feed. Used CVZone and MediaPipe for hand detection and tracking."
        }
      ],
      pythonLibraries: [
        { name: "OpenCV", role: "For image processing and real-time video feed." },
        { name: "CVZone", role: "For easier hand detection and bounding box creation." },
        { name: "MediaPipe", role: "For hand landmark detection and gesture tracking." },
        { name: "NumPy", role: "For array and data manipulation." },
        { name: "Math", role: "To measure hand angles and distances." },
        { name: "Time", role: "Used in data collection timing and delays." }
      ],
      outcome: "Successfully recognized and displayed ASL gestures in real-time.",
      toolsAndTech: {
        language: "Python",
        libraries: "OpenCV, CVZone, MediaPipe, NumPy, Math, Time",
        otherTools: "Teachable Machine (Google)",
        modelFile: "keras_model.h5 (Trained model file for ASL sign classification)",
        dataset: "ASL (American Sign Language) Signs Dataset"
      }
    },

    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a modern, responsive personal portfolio website to showcase my skills, projects, education, and professional experience.",
      technologies: ["Next.js", "HTML", "CSS", "JavaScript", "Netlify", "VS Code"],
      details: [
        "Built with Next.js for fast performance and smooth user experience.",
        "Showcases projects, skills, education, certifications, and work experience.",
        "Responsive design that works seamlessly across all devices.",
        "Deployed and hosted on Netlify with continuous deployment."
      ]
    },

    {
      title: "Tourism Website",
      description: "Fully responsive tourism website showcasing Telangana’s cultural heritage.",
      technologies: ["HTML", "CSS", "JavaScript", "VS Code"],
      details: [
        "Structured content with HTML and visually appealing layouts with CSS.",
        "JavaScript for interactivity (theme toggling, animations).",
        "Responsive design for method/mobile/desktop."
      ]
    }
  ],
  workExperience: [
    {
      role: "Trainee Software Engineer",
      company: "Aapthi Technologies",
      year: "2025 - Present",
    }
  ],
  experience: [
    {
      role: "Python Full Stack Training",
      company: "PySpiders (JNTU Hyderabad Branch)",
      duration: "May 2025 to October 2025",
      description: "Completed Python Full Stack training."
    }
  ],
  certifications: [
    "Python Full Stack Development from PySpiders Training Institute",
    "Python with DSA course from Udemy",
    "SQL from Great Learning",
    "Web Technologies from Great Learning"
  ],
  achievements: [
    "Selected for QSpiders Incubation Program",
    "Awarded 'Best Student of the Year'"
  ]
};
