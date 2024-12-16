// JavaScript to fade out and navigate to Page 2
function fadeOutAndRedirect(url) {
    document.body.classList.add('fade-out');  // Apply fade-out effect

    // Wait for the fade-out effect to complete before redirecting to the next page
    setTimeout(function() {
        window.location.href = url;  // Navigate to the next page
    }, 1000);  // 1000 ms = 1 second, matches the duration of the fade-out effect
}

// Automatically trigger the fade-out and navigate after 3 seconds
setTimeout(function() {
    fadeOutAndRedirect('vælg.html');  // Redirect to the second page
}, 5000);  // 3000 ms = 3 seconds, waiting before fading out



// Fade-in the page when it's loaded
window.onload = function() {
    setTimeout(function() {
        document.body.classList.add('fade-in');
    }, 500);  // Optional delay before applying fade-in effect
};