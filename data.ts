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
  link: string;
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
  // {
  //   image: Images.Drifan.src,
  //   position: "FrontEnd Engineer",
  //   workplace: "Drifan",
  //   period: {
  //     started: "April 2022",
  //     ended: "August 2022",
  //   },
  //   IscurrentPlace: false,
  // },
  {
    image: Images.Deksol.src,
    position: "Lead Software Engineer",
    workplace: "Deksol Consult",
    period: {
      started: "Feb 2019",
      ended: "March 2022",
    },
    IscurrentPlace: false,
  },
  // {
  //   image: Images.MastersLogo.src,
  //   position: "Software Engineer",
  //   workplace: "Masters Groupe",
  //   period: {
  //     started: "June 2021",
  //     ended: "July 2022",
  //   },
  //   IscurrentPlace: false,
  // },
  // {
  //   image: Images.Meetenant.src,
  //   position: "FrontEnd Engineer",
  //   workplace: "Meetenant",
  //   period: {
  //     started: "Jan 2020",
  //     ended: "August 2020",
  //   },
  //   IscurrentPlace: false,
  // },
  // {
  //   image: Images.Hng.src,
  //   position: "FrontEnd Engineer (Internship)",
  //   workplace: "HNG",
  //   period: {
  //     started: "Jan 2019",
  //     ended: "Dec 2019",
  //   },
  //   IscurrentPlace: false,
  // },
];

export const ProjectsList: IProjects[] = [
  // {
  //   image: Images.Gdrsa.src,
  //   link: "https://www.ghanadriverawards.org/",
  //   projectTitle: "Ghana Drivers & Road Safety Awards",
  //   description: "The Ghana Driver and Road Safety Awards is a commitment to reducing road accidents through training and rewards. The purpose of the app was to quiz drivers on road safety rules and regulations. The best performing driver will be crowned the Overall Best Driver for the year. The winner will get up to Ghc50,000 financial support for his/her road safety project ",
  // },
  {
    image: Images.Denoyles.src,
    link: "http://denoyles.com/",
    projectTitle: "Denoyles",
    description: "The ultimate destination for discovering and exploring an extensive range of high-quality skincare products!",
  },
  // {
  //   image: Images.Deksol_platform.src,
  //   link: "https://anma.deksolconsult.com/anma_erms/",
  //   projectTitle: "Deksol Revenue Management Platform",
  //   description: "This platform is built with PHP, Codeigniter 3 and MySQL. Currently used by 6 district assemblies i.e Ayawaso, Ketu North, GA North, Ellembelle, Akuapem North and Ga South district assemblies. The platform aids in revenue management and tracking of agents progess on the field.",
  // },
  {
    image: Images.Eportal.src,
    link: "https://esimrequest.mtn.com.gh/",
    projectTitle: "Esim Request Portal MTN GH",
    description: "The purpose of this platform is to allow users to request for Electronic sim cards for Iphones. This Platform was built using React, UIKit, ASP.NET, Postgres and Monogodb. 40,000 requests were placed by users in the first hour of its deployment to production",
  },
  {
    image: Images.BH.src,
    link: "https://business.mtn.com.gh/",
    projectTitle: "Business Hub MTN GH",
    description: "Dive into a world where cutting-edge technology meets irresistible shopping. From sleek smartphones to mind-bending gadgets, we've curated a galaxy of innovation for all you tech enthusiasts out there.",
  },
  {
    image: Images.Discord.src,
    link: "https://hc-bentill.github.io/discord-clone/",
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
