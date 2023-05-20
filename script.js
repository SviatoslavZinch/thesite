var bodyBackground = document.body.style.backgroundPositionY;
var mainElement = document.getElementById('cont_princ')
window.addEventListener('scroll',function(){
  var bodyBgPosition = -(window.scrollY*-0.5) + 'px';
  document.body.style.backgroundPositionY = bodyBgPosition;
});

// Get the header element
const header = document.querySelector('.header_princ');

// Initialize the scroll position
let scrollPos = 0;

// Function to show the header
function showHeader() {
  header.style.top = '0'; // Show the header
}

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Determine the scroll direction
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > scrollPos) {
    // Scrolling down
    header.style.top = '-80px'; // Hide the header
  } else {
    // Scrolling up
    showHeader();
  }
  scrollPos = currentScrollPos;
});

// Add a load event listener to the window
window.addEventListener('load', () => {
  showHeader();
});
// Get the button
const btnToTop = document.querySelector('.btn-to-top');

// Add a click event listener to the button
btnToTop.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Determine the scroll position
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 500) {
    // Show the button
    btnToTop.style.display = 'block';
  } else {
    // Hide the button
    btnToTop.style.display = 'none';
  }
});
AOS.init();
// Set the initial width of the .div3 element
document.querySelector(".div3").style.width = "30px";

function openNav() {
  // Get the current width of the .div3 element
  const currentWidth = parseInt(document.querySelector(".div3").style.width, 10);
  if ($(window).width() > 1000) {
  if (currentWidth < 100) {
    document.querySelector(".div3").style.width = "800px";
    document.querySelector(".div3").style.height = "600px";
    document.querySelector(".img2").style.opacity = 0;
    document.querySelector(".p1_cont").style.opacity = 0;
  } else {
    document.querySelector(".div3").style.width = "30px";
    document.querySelector(".div3").style.height = "250px";
    document.querySelector(".img2").style.opacity = 1;
    document.querySelector(".p1_cont").style.opacity = 1;
  }} else {
    if (currentWidth < 100) {
      document.querySelector(".div3").style.width = "500px";
      document.querySelector(".div3").style.height = "600px";
    } else {
      document.querySelector(".div3").style.width = "30px";
      document.querySelector(".div3").style.height = "250px";
  }
}}
