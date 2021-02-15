import { menu, menuIcon, body } from "../abstracts/variables.js";

export default function mobileMenu () {
	menu.classList.toggle("open-menu")
	menuIcon.classList.toggle("open")
	body.classList.toggle("fixed")
}