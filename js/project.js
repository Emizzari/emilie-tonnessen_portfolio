import { projectDetailsURL } from "./components/html/createProjectDetails.js";
import { fetchAPI } from "./components/api/fetch.js";
import { creatProjectDetails } from "./components/html/createProjectDetails.js";
import mobileMenu from "./components/menu/mobileMenu.js";

fetchAPI(creatProjectDetails, projectDetailsURL);