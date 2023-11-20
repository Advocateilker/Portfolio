import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  starbucks,
  carrent,
  jobit,
  tripguide,
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
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
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
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Bootstrap",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "ArabulEu Company",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2022 - Still ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  // {
  //   testimonial:
  //     "",
  //   name: "",
  //   designation: "",
  //   company: "",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  //
];

const projects = [
  {
    name: "Coins-Shop",
    description:
      "Welcome to Coins-Shop, your go-to resource for tracking cryptocurrencies and digital assets worldwide. This project utilizes React, Vite, and various other technologies to provide users with real-time information about cryptocurrencies.",
    tags: [
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "Chartjs",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Advocateilker/CoinsShop-Formik-Yup",
  },
  {
    name: "X Clone",
    description:
      "X-Twitter-Clone is a social media application built with React and Firebase, allowing users to create posts, interact with tweets, and subscribe to premium features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Advocateilker/X-Twitter--Clone-Firebase",
  },
  {
    name: "Fligth Radar",
    description:
      "Welcome to the Flight Radar App, a real-time flight tracking system that uses RapidAPI services to provide detailed information about flights, including departure and arrival details, images, estimated arrival times, and flight paths displayed on a dynamic map using the Leaflet library. This application is built with a powerful tech stack, including Redux Toolkit, Axios, React, React-Redux, React-Leaflet, and more.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Advocateilker/FlightRadar-ReduxToolkit",
  },
];

export { services, technologies, experiences, testimonials, projects };
