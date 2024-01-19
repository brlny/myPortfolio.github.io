function redirectToProfile() {
    // Save the current page URL to sessionStorage
    sessionStorage.setItem('lastClickedPage', window.location.href);

    // Redirect to the profile page
    window.location.href = 'profile.html';
}