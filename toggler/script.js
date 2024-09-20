const toggler = document.getElementById('toggler');
const toggleContent = document.getElementById('toggle');

// Add event listener for toggling visibility
toggler.addEventListener('click', () => {
  if (toggleContent.style.display === 'none') {
    toggleContent.style.display = 'block';  // Show the content
  } else {
    toggleContent.style.display = 'none';  // Hide the content
  }
});