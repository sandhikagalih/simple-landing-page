const navLink = Array.from(document.querySelectorAll(".nav-link"));
navLink.pop()
navLink.forEach((nav) => {
  nav.addEventListener("click", function () {
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("active");
    }
    nav.classList.add("active");
  });
});
