import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  previr,
  probity,
  hng,
  straitgate,
  cloud,
  previrPr,
  dream,
  straitgatePr,
  moviebox,
  helpmeout,
  gamemode,
  pubg
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React/NextJs Developer",
    company_name: "HNGx Internship",
    icon: hng,
    iconBg: "#00aeff",
    date: "March 2020 - April 2021",
    points: [
      "Build and maintain web applications with React.js, NextJs and related technologies.",
      "Collaborating with functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Translated UI and UX designs into functional code in close collaboration with designers."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Cloudcraves",
    icon: cloud,
    iconBg: "#fff",
    date: "Dec 2024 - Mar 2025",
    points: [
      "Developed and maintained responsive web interfaces that provide a smooth user experience.",
      "Translated UI and UX designs into functional code in close collaboration with designers.",
      "Enhanced site performance and functionality using modern front-end technologies.",
      "Ensured consistency, accessibility, and usability across different devices and browsers.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Probity Hub",
    icon: probity,
    iconBg: "#fff",
    date: "Mar 2022 - Jul 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Previr Conserv Limited",
    description:
      "Built and manage Previr Conserve Limited’s real estate website, providing seamless property listings and inquiries, powered by a robust cloud infrastructure.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: previrPr,
    source_code_link: "https://github.com/wellsdigit/PREVIR",
    live_link: "https://www.previrconserv.com"
  },
  {
    name: "Dream Affair",
    description:
      "Web application that allow users to book and manage wedding event, including venue selection, catering, and entertainment, with a user-friendly interface and secure payment options.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: dream,
    source_code_link: "https://github.com/Dream-Affairs/Dream-Affairs-Frontend",
    live_link: "https://dream-affairs-frontend-dev.vercel.app/"
  },
  {
    name: "Straitgate",
    description:
      "Straitgate College is a school website I built to present the institution’s profile, academics, and admissions in a clear and accessible way.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: straitgatePr,
    source_code_link: "https://github.com/wellsdigit/STRAITGATE",
    live_link: "https://straitgate.vercel.app/"
  },
  {
    name: "Filmfind",
    description:
      "Find top and favorite movies, actors, TV shows and more.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moviebox,
    source_code_link: "https://github.com/wellsdigit/hngxtasktwo-filmfind",
    live_link: "https://hngxtasktwo-filmfind.vercel.app/"
  },
  {
    name: "HelpMeOut",
    description:
      "HelpMeOut is a web application merged with a chrome extension that allows users to record screen activity and share the recorded video with others for assistance.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: helpmeout,
    source_code_link: "https://github.com/wellsdigit/helpmeout-hngx",
    live_link: "https://helpmeout-hngx-wheat.vercel.app/"
  },
  {
    name: "Gamesmode",
    description:
      "User Interface development for game series and most designed to showcase games in a more interactive way.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gamemode,
    source_code_link: "https://github.com/wellsdigit/gamesmode",
    live_link: "https://wellsdigit.github.io/gamesmode/"
  },
  {
    name: "Gamesmode",
    description:
      "Develped a animated gaming landing page with pure HTML, CSS and Javascript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: pubg,
    source_code_link: "https://github.com/wellsdigit/pubg-page",
    live_link: "https://wellsdigit.github.io/pubg-page/"
  },
];

export { services, technologies, experiences, testimonials, projects };
