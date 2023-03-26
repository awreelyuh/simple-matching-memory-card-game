function toggleMenu() {
  const x = document.getElementById("nav-links");
  if (x.style.maxWidth = "600px" && x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 