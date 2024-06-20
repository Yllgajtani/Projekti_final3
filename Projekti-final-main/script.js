let currentImageIndex = 0; // Index of the current image
const totalImages = 3; // Total number of images
const intervalTime = 3000; // Interval time in milliseconds (3 seconds)
let intervalId; // Variable to hold the interval ID

// Function to show the current image and hide the rest
function showCurrentImage() {
    // Hide all images
    const images = document.querySelectorAll('.foto');
    images.forEach(image => {
        image.classList.remove('active');
    });

    // Show the current image
    images[currentImageIndex].classList.add('active');
}

// Function to move to the previous image
function prevImage() {
    clearInterval(intervalId); // Clear interval
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showCurrentImage();
}

// Function to move to the next image
function nextImage() {
    clearInterval(intervalId); // Clear interval
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showCurrentImage();
}

// Initial call to show the first image
showCurrentImage();

// Set interval to change image every intervalTime milliseconds
intervalId = setInterval(nextImage, intervalTime);