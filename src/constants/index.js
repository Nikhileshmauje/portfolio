import portfolio from "../assets/portfolio.webp";
import gemini from "../assets/gemini.webp";
import keeper from "../assets/keeper.webp";
import weather from "../assets/weather.webp";
import tictactoe from "../assets/tictactoe.webp";
import todo from "../assets/todo.webp";


export const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Nikhilesh Mauje, a creative full stack developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently focused on enhancing my skills, building meaningful connections with like-minded individuals, and exploring opportunities to contribute to impactful digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "resume.pdf",
};

export const PROJECTS = [
  {
    name: "Porfolio site",
    description: "To showcase my work, skills, education and Achievements",
    image: portfolio,
    link: "https://github.com/your-github/wellnest",
  },
  {
    name: "Gemini Clone App",
    description: "Gemini Clone which gives response to all users for their prompt",
    image: gemini,
    link: "https://github.com/Nikhileshmauje/Gemini-App",
  },
  {
    name: "Keeper: Google Keep clone",
    description: "Create and Delete notes, so you don't have to memorize things",
    image: keeper,
    link: "https://github.com/Nikhileshmauje/Keeper-App",
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
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from React frontend applications to full stack Applications, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EDUCATION = [
  {
    yearRange: "2022 — 2026",
    title: "G.H Raisoni College of Engineering, Nagpur",
    location: "Bachelor of Technology - Computer Science and Engineering",
    description: [
      "Current CGPA: 8.41",
      "Achievement: Finalist in college coding event CODE-O-QUICK",
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
