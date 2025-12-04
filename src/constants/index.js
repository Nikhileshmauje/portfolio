import portfolio from "../assets/portfolio.webp";
import gemini from "../assets/gemini.webp";
import keeper from "../assets/keeper.webp";
import weather from "../assets/weather.webp";
import tictactoe from "../assets/tictactoe.webp";
import todo from "../assets/todo.webp";
import microservice from "../assets/microservices.png";


export const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience"},
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Nikhilesh Mauje, an aspiring DevOps engineer building reliable and scalable systems.",
  description:
    "I’m currently exploring DevOps, containerization, CI/CD pipelines, and cloud fundamentals while building microservices and real-world automation projects. I love connecting with engineers, learning modern tooling, and contributing to impactful tech solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "Nikhilesh_DevOps.pdf",
};

export const PROJECTS = [
  {
    name: "Task Management App - Microservices Backend",
    description: "microservices-based task backend with event-driven notifications using RabbitMQ and Docker.",
    image: microservice,
    link: "https://github.com/Nikhileshmauje/task-management-microservice-backend",
  },
  {
    name: "Porfolio site",
    description: "To showcase my work, skills, education and Achievements",
    image: portfolio,
    link: "https://github.com/Nikhileshmauje/portfolio",
  },
  {
    name: "Gemini AI Web App",
    description: "Gemini Clone which gives response to all users for their prompt",
    image: gemini,
    link: "https://github.com/Nikhileshmauje/Gemini-App",
  },
  {
    name: "Weather App",
    description: "Shows Weather of the Current input City by user",
    image: weather,
    link: "https://github.com/Nikhileshmauje/Weather-app",
  },
  {
    name: "Todo App",
    description: "Create, Mark as complete or delete your tasks to stay productive",
    image: todo,
    link: "https://github.com/Nikhileshmauje/To-do-app",
  },
  {
    name: "Tic-Tac-Toe",
    description: "A fun game for two people",
    image: tictactoe,
    link: "https://github.com/Nikhileshmauje/Tic-Tac-Toe",
  }
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a Full-Stack and DevOps-focused engineer with hands-on experience in building distributed systems, containerized applications, and modern CI/CD automation. I work primarily with Node.js, Docker, RabbitMQ, MongoDB, and cloud services to design secure, scalable backend architectures.",
    "My strengths lie in microservices development, event-driven communication, API design, and deployment pipelines. I enjoy breaking complex systems into modular services, optimizing performance, and ensuring smooth developer workflows through automation and container orchestration.",
    "I have built production-ready microservice backends, integrated message brokers for asynchronous processing, and deployed full-stack applications on cloud platforms using GitHub Actions, Docker, and modern DevOps tools. Constant learning, clean architecture, and reliability are core principles in my work.",
  ],
};

export const EDUCATION = [
  {
    yearRange: "2022 — 2026",
    title: "G.H Raisoni College of Engineering, Nagpur",
    location: "Bachelor of Technology - Computer Science and Engineering",
    description: [
      "Current CGPA: 8.34(Till 7th Semester)",
      "Achievement: Runner-up in college coding event CODE-O-QUICK",
    ],
  },
  {
    yearRange: "2021 — 2022",
    title: "Kendriya Vidyalaya, Ambajhar, Nagpur",
    location: "Higher Secondary",
    description: [
      "Pecentage: 80.0%",
      "Achievements: MHT-CET Score: 92.65 Percentile",
    ],
  },
  {
    yearRange: "2019 — 2020",
    title: "Kendriya Vidyalaya, Ambajhari, Nagpur",
    location: "Senior Secondary",
    description: [
      "Percentage: 81.4%",
      "Achievements: 1st Rank in Hindi olympiad, 2nd rank in Sports olympiad, Winner of inter school Republic Day march past ",
    ],
  },
];

export const EXPERIENCE = [
  {
    yearRange: "Jun 2025 — Jul 2025",
    title: "Web Development Intern — Pinnacle Labs (Remote)",
    location: "Frontend & API Integration",
    description: [
      "Built functional web apps such as a News App and Weather App using HTML, CSS, JavaScript, and public APIs.",
      "Worked with Git/GitHub, implemented API integrations, and debugged common UI and data-fetching issues.",
      "Enhanced practical understanding of frontend workflows and rapid prototyping in a real project environment.",
    ],
  },
];


// export const TESTIMONIALS = [
//   {
//     name: "Sarah Johnson",
//     title: "Frontend Engineer, Google",
//     feedback:
//       "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
//     image: person1,
//   },
// ];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "maujenikhilesh@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/nikhileshM_24",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Nikhileshmauje",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/nikhilesh-mauje/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Nikhilesh Mauje. All rights reserved.`,
};
