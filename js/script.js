// Sidebar toggle
const resizeButton = document.querySelector("[data-resize-button]");

resizeButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("sb-expanded");
});

// Responsive sidebar
/*
    Desktop (1200px+)
    Full layout

    Tablet (768–1199px)
    Sidebar collapsible, horizontal scroll

    Mobile (<768px)
    Icons-only sidebar, responsive table
*/

let body = document.body;

function updateBody() {
  if (window.innerWidth >= 1200) {
    body.classList.add("sb-expanded");
  } else body.classList.remove("sb-expanded");
}

window.addEventListener("resize", updateBody);
window.addEventListener("DOMContentLoaded", updateBody);
