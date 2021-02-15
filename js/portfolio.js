import mobileMenu from "./components/menu/mobileMenu.js";
import { projectsURL } from "./components/api/url.js";
import { fetchAPI } from "./components/api/fetch.js";
import createPortfolioLayout from "./components/html/createPortfolioLayout.js";
import { menuIcon } from "./components/abstracts/variables.js";

menuIcon.addEventListener("click", mobileMenu);

fetchAPI(createPortfolioLayout, projectsURL);
