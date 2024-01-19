function redirectToProfile() {
    // Save the current page URL to sessionStorage
    sessionStorage.setItem('lastClickedPage', window.location.href);

    // Redirect to the profile page
    window.location.href = 'profile.html';
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the element
    const changingText = document.getElementById("changingText");
  
    // Array of colors to cycle through
    const colors = ["#023020", "black"];
  
    // Function to change text color
    function changeTextColor() {
      // Get a random color from the array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      changingText.style.color = randomColor;
    }
  
    // Call the function every 2 seconds
    setInterval(changeTextColor, 1000);
  });
  