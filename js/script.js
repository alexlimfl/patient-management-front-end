/*
    Desktop (1200px+)
    Full layout

    Tablet (768–1199px)
    Sidebar collapsible, horizontal scroll

    Mobile (<768px)
    Icons-only sidebar, responsive table
*/

function toggleSidebarCheckbox() {
  const sidebarCheckbox = document.getElementById("sidebar-checkbox");
  const width = window.innerWidth;

  if (width < 768) {
    sidebarCheckbox.checked = true;
    console.log("Mobile view");
  } else if (width >= 1200) {
    sidebarCheckbox.checked = false;
    console.log("Desktop view");
  }
}

window.addEventListener("DOMContentLoaded", toggleSidebarCheckbox);
window.addEventListener("resize", toggleSidebarCheckbox);
