const imagesList = document.querySelector('.image-list');
const imageItems = imagesList.querySelectorAll('li');
const prevBtn = document.querySelector('.prev-image-btn');
const nextBtn = document.querySelector('.next-image-btn');
const title = document.querySelector('h2');
const description = document.querySelector('p');
const price = document.querySelector('.price');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const backBtn = document.querySelector('.back-btn');

// Set initial image index
let imageIndex = 0;

// Set interval to automatically change images
let intervalID = setInterval(changeImage, 5000);

// Change image function
function changeImage() {
  // Hide all images
  imageItems.forEach(item => item.style.display = 'none');

  // Increment image index
  imageIndex++;
  if (imageIndex >= imageItems.length) {
    imageIndex = 0;
  }

  // Show current image
  imageItems[imageIndex].style.display = 'block';

  // Reset interval
  clearInterval(intervalID);
  intervalID = setInterval(changeImage, 5000);
}

// Add event listeners to prev and next buttons
prevBtn.addEventListener('click', () => {
  // Hide all images
  imageItems.forEach(item => item.style.display = 'none');

  // Decrement image index
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = imageItems.length - 1;
  }

  // Show current image
  imageItems[imageIndex].style.display = 'block';
});

nextBtn.addEventListener('click', () => {
  // Hide all images
  imageItems.forEach(item => item.style.display = 'none');

  // Increment image index
  imageIndex++;
  if (imageIndex >= imageItems.length) {
    imageIndex = 0;
  }

  // Show current image
  imageItems[imageIndex].style.display = 'block';
});

// Add event listener to back button
backBtn.addEventListener('click', () => {
  // Navigate back to product page
  window.history.back();
});

// Add event listener to add to cart button
addToCartBtn.addEventListener('click', () => {
  // Add product to cart
  // Code for adding product to cart goes here
});