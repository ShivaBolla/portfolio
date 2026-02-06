import { Code, Database, Globe, Server, Terminal, Cpu, Layout, FileText } from 'lucide-react';


export const RESUME_DATA = {
  personalInfo: {
    name: "BOLLA SHIVA SHANKAR",
    title: "Computer Science Engineer | Full Stack Developer",
    email: "shivabolla7@gmail.com",
    phone: "+91 9346213260",
    location: "Warangal, Telangana",
    linkedin: "https://www.linkedin.com/in/shiva-shankar-bolla-34724a257/",
    github: "https://github.com/ShivaBolla",
    resumeLink: "/resume.pdf",
    about: "BTech graduate in Computer Science and Engineering with strong skills in Python, SQL and web development. Experienced in building real-time projects like a sign language recognition system and tourism website. Quick learner with good communication and teamwork abilities."
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
      score: "84.2%"
    },
    {
      degree: "S.S.C",
      institution: "St. Mary’s High School",
      year: "2019",
      score: "90.25%"
    }
  ],
  skills: [
    { name: "Python", icon: Terminal },
    { name: "Java", icon: Code },
    { name: "SQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "HTML/CSS", icon: Layout },
    { name: "JavaScript", icon: Globe },
    { name: "React/Next.js", icon: Globe }, // Added based on project context
    { name: "GitHub", icon: Url => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
    { name: "VSCode", icon: FileText }
  ],
  projects: [
    {
      title: "Sign Language Recognition System",
      description: "Real-time ASL hand gesture recognition using Machine Learning. Interprets gestures and converts them to text.",
      technologies: ["Python", "OpenCV", "MediaPipe", "Teachable Machine", "NumPy"],
      details: [
        "Collected gesture images using Python & MediaPipe.",
        "Trained model using Teachable Machine.",
        "Real-time recognition/prediction using OpenCV."
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
      company: "Aaapthi Technologies",
      year: "2025 - Present",
      description: "Implemented scalable web applications using Next.js and Tailwind CSS."
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
    "Python course from Udemy",
    "SQL from Great Learning",
    "Web Technologies from Great Learning"
  ],
  achievements: [
    "Selected for QSpiders Incubation Program",
    "Awarded 'Best Student of the Year'"
  ]
};
