const section = document.getElementById("content");
const navOpt = Array.from(querySelectAll("li"));

section.addEventListener("scroll", function() {
    if (section.scrollTop >= 1) {
      document.querySelector("nav").style.boxShadow = "0px 0px 5px black";
    } else {
      document.querySelector("nav").style.boxShadow = "none";
    }
});

//Create a loop that will allow users to know where they're at on the site.
