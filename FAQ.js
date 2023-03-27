let page = document.getElementsByClassName("faq-page");
let i;

for (i = 0; i < page.length; i++) {

    page[i].addEventListener("click", function () {

        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */

        this.classList.toggle("active");

          /* Toggle between hiding and showing the active panel */

          let body = this.nextElementSibling;

          if (body.style.display === "block") {

            body.style.display = "none";

          }

          else {

            body.style.display = "block";

          }
    });
}


