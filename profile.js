function goBack() {
    // Retrieve the last clicked page from sessionStorage
    const lastClickedPage = sessionStorage.getItem('lastClickedPage');

    // If there is a last clicked page, navigate back to that page
    if (lastClickedPage) {
        window.location.href = lastClickedPage;
    } else {
        // If no last clicked page is available, go to the homepage
        window.location.href = 'index.html';
    }
}