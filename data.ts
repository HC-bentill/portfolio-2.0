import {Images} from "./assets/Assets";

export interface IWorkExperience {
  image: string;
  position: string;
  workplace: string;
  period: {
    started: string;
    ended: string;
  };
  IscurrentPlace: boolean;
}

export interface IProjects {
  image: string;
  projectTitle: string;
  link:string;
  description: string;
}

export const workExperienceList: IWorkExperience[] = [
  {
    image: Images.Acs.src,
    position: "Software Engineer",
    workplace: "Adaptive Computer Solutions",
    period: {
      started: "April 2022",
      ended: "-",
    },
    IscurrentPlace: true,
  },
  {
    image: Images.Drifan.src,
    position: "FrontEnd Engineer",
    workplace: "Drifan",
    period: {
      started: "April 2022",
      ended: "August 2022",
    },
    IscurrentPlace: false,
  },
  {
    image: Images.Deksol.src,
    position: "Lead Software Engineer",
    workplace: "Deksol Consult",
    period: {
      started: "June 2021",
      ended: "July 2022",
    },
    IscurrentPlace: false,
  },
  {
    image: Images.MastersLogo.src,
    position: "Software Engineer",
    workplace: "Masters Groupe",
    period: {
      started: "June 2021",
      ended: "July 2022",
    },
    IscurrentPlace: false,
  },
  {
    image: Images.Meetenant.src,
    position: "FrontEnd Engineer",
    workplace: "Meetenant",
    period: {
      started: "Jan 2020",
      ended: "August 2020",
    },
    IscurrentPlace: false,
  },
  {
    image: Images.Hng.src,
    position: "FrontEnd Engineer (Internship)",
    workplace: "HNG",
    period: {
      started: "Jan 2019",
      ended: "Dec 2019",
    },
    IscurrentPlace: false,
  },
];

export const ProjectsList: IProjects[] = [
  {
    image: Images.Gdrsa.src,
    link: "https://www.ghanadriverawards.org/",
    projectTitle: "Ghana Drivers & Road Safety Awards",
    description: "The Ghana Driver and Road Safety Awards is a commitment to reducing road accidents through training and rewards. The purpose of the app was to quiz drivers on road safety rules and regulations.he best performing driver will be crowned the Overall Best Driver for the year. The winner will get up to Ghc50,000 financial support for his/her road safety project ",
  },
  {
    image: Images.Discord.src,
    link: "https://discord-clone-f87c9.web.app/",
    projectTitle: "Chat Room App",
    description: "A chat app built with React and Firebase, with the ability to create channels and sign in with google Auth Services.",
  },
  {
    image: Images.Netflix.src,
    link: "https://hc-bentill.github.io/netflix-clone/",
    projectTitle: "Netflix Clone",
    description: "Netflix Clone built with React, Firebase,and the Movie database API which displays latest movies from a database and groups them according to categories",
  },
];
