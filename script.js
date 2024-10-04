// Get the modal
const modal = document.getElementById("imageModal");

// Get the modal image element
const modalImage = document.getElementById("modalImage");

// Get all portfolio-box images
const images = document.querySelectorAll(".portfolio-box img");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close");

// Loop through each image and add click event
images.forEach((image) => {
  image.addEventListener("click", function () {
    modal.style.display = "block"; // Show the modal
    modalImage.src = this.src; // Set the modal image to the clicked image
    document.body.classList.add("modal-open"); // Add blur effect
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open"); // Remove blur effect
});

// Close the modal if clicking anywhere outside the image
modal.addEventListener("click", function (event) {
  if (event.target !== modalImage) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Remove blur effect
  }
});

// Responsivity shtick
// Get the menu icon and navbar
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

// Add an event listener to the icon
menuIcon.addEventListener("click", () => {
  // Toggle the 'active' class to show/hide the navbar
  navbar.classList.toggle("active");
});
