var offerElements = document.querySelectorAll('.offer');

// Function to handle click events
function handleOfferClick(event) {
    var offerId = event.currentTarget.id;
    window.location.href = `${offerId}.html`;
    // You can add your logic or perform actions here
}

// Add click event listener to each offer element
offerElements.forEach(function(offerElement) {
    offerElement.addEventListener('click', handleOfferClick);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

//const bookButtons = document.querySelectorAll(".book");
//
//// Loop through each button and add an event listener
//bookButtons.forEach(button => {
// button.addEventListener("click", () => {
//   // Redirect to WhatsApp when a button is clicked
//   window.location.href = "https://wa.me/+79182251445";
// });
//});


