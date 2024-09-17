document.addEventListener("DOMContentLoaded", function() {
    // Wait for a few seconds and then hide the splash screen
    setTimeout(function() {
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.classList.add('hidden'); // Add 'hidden' class to fade out

        // Display the main content after splash screen disappears
        document.querySelector('.main-content').style.display = 'block';
    }, 2000); // 1000ms = 1 seconds
});
