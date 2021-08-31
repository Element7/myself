/* eslint-disable import/prefer-default-export */

import About from "../pages/about/About";
import AboutMe from "../pages/about/aboutMe/About";
import AboutProjects from "../pages/about/aboutProjects/AboutProjects";
import Home from "../pages/home/Home";
import Picker from "../pages/picker/Picker";

export const routes = [
  {
    key: "home",
    exact: true,
    path: "/",
    component: Home,
  },
  {
    key: "about",
    path: "/about",
    component: About,
    routes: [
      {
        key: "about me",
        path: "/about/kacper",
        component: AboutMe,
      },
      {
        key: "about my work",
        path: "/about/projects",
        component: AboutProjects,
      },
    ],
  },
  {
    key: "movies",
    exact: true,
    path: "/movies",
    component: Home,
  },
  {
    key: "picker",
    exact: true,
    path: "/picker",
    component: Picker,
  },
];
