import mobileMenu from "./components/menu/mobileMenu.js"
import { formValidation } from "./components/form/formValidation.js";
import { form } from "./components/form/formVariables.js";
import { menuIcon } from "./components/abstracts/variables.js";

menuIcon.addEventListener("click", mobileMenu);

form.addEventListener("submit", formValidation);