import { projectDetailsURL } from "./components/html/createProjectDetails.js";
import { fetchAPI } from "./components/api/fetch.js";
import { creatProjectDetails } from "./components/html/createProjectDetails.js";
import mobileMenu from "./components/menu/mobileMenu.js";
import { menuIcon } from "./components/abstracts/variables.js";

menuIcon.addEventListener("click", mobileMenu);

fetchAPI(creatProjectDetails, projectDetailsURL);