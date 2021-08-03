/* eslint-disable import/prefer-default-export */

import About from "../pages/about/About";
import AboutMe from "../pages/about/aboutMe/About";
import AboutProjects from "../pages/about/aboutProjects/AboutProjects";
import Home from "../pages/home/Home";

export const routes = [
  {
    key: "home",
    exact: true,
    path: "/",
    component: Home,
  },
  {
    key: "about",
    // exact: true,
    path: "/about",
    component: About,
    routes: [
      {
        key: "about me",
        // exact: true,
        path: "/about/kacper",
        component: AboutMe,
      },
      {
        key: "about my work",
        // exact: true,
        path: "/about/projects",
        component: AboutProjects,
      },
    ],
  },
];
