
/* ==================================
   EO WEB DESIGN V2
   MAIN JAVASCRIPT
================================== */


/* ==================================
   PORTFOLIO DEMO BUTTONS
================================== */

document.querySelectorAll(".demo-btn").forEach(button => {

    button.addEventListener("click", () => {

        const demo = button.dataset.demo;

        if (demo === "restaurant") {
            window.location.href = "restaurant.html";

        } else if (demo === "fitness") {
            window.location.href = "fitness.html";

        } else if (demo === "business") {
            window.location.href = "business.html";

        } else {
            alert("This demo is coming soon!");
        }

    });

});


/* ==================================
   EO CLIENT CONTACT FORM
================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get customer information

        const name = document.getElementById("clientName").value.trim();

        const email = document.getElementById("clientEmail").value.trim();

        const service = document.getElementById("clientService").value;

        const message = document.getElementById("clientMessage").value.trim();


        // Your business email

        const businessEmail = "eowebdesign1@gmail.com";


        // Check business email

        if (!businessEmail) {

            alert("Please add your business email.");

            return;

        }


        // Create email subject

        const subject = encodeURIComponent(
            "EO Web Design Enquiry - " + service
        );


        // Create email message

        const body = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Service: " + service + "\n\n" +
            "Project Details:\n" + message
        );


        // Open customer's email application

        window.location.href =
            "mailto:" + businessEmail +
            "?subject=" + subject +
            "&body=" + body;

    });

}


/* ==================================
   START A PROJECT BUTTON
================================== */

const contactButton = document.querySelector(".contact-button");

if (contactButton) {

    contactButton.addEventListener("click", function(event) {

        event.preventDefault();

        const businessEmail = "eowebdesign1@gmail.com";

        const subject = encodeURIComponent("Website Enquiry");

        window.location.href =
            "mailto:" + businessEmail +
            "?subject=" + subject;

    });

}


/* ==================================
   EO WEB DESIGN READY
================================== */

console.log("EO Web Design V2 loaded successfully!");
