// let video = document.getElementById("myVideo");

// // Event listener for when the video ends
// video.addEventListener("ended", function() {
//     // Restart the video when it ends
//     video.play();
// });

document.addEventListener("DOMContentLoaded", function() {
        let New = document.querySelector(".New");
        let nav = document.querySelector(".nav");
        let links = document.querySelectorAll(".nav li"); // Select all li elements
    
        New.addEventListener("click", function() {
            this.classList.toggle("click"); // Toggle the click class
            nav.classList.toggle("open"); // Toggle the open class
    
            // Toggle visibility of each li element
            links.forEach(function(link) {
                link.classList.toggle("show");
            });
        });
    

    // Define the Typed.js strings
    let typedStrings = ["Frontend Developer", "Responsive Designer", "Web Developer"];

    // Create a new Typed instance targeting the span within h5
    let h5Span = document.querySelector(".home-content h5 span");

    if (h5Span) {
        var typed = new Typed(h5Span, {
            strings: typedStrings,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    } else {
        console.error("Typed.js: Span element not found within h5.");
    }
});