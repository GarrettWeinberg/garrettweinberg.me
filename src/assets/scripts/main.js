// Javascript goes here
import "bootstrap";
import { Offcanvas } from "bootstrap";
// Import Fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// add the imported icons to the library
library.add(fas, fab, far);

// tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});

// close offcanvas when click on a link
const offcanvasNav = document.getElementById("offcanvas-navigation");
const bsOffcanvas = new Offcanvas(offcanvasNav);
document.querySelectorAll(".offcanvas .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    bsOffcanvas.hide();
    hamburger.classList.remove("is-active");
    offcanvasNav.addEventListener("hidden.bs.offcanvas", () => {
      // find anchor href and scroll to it
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
