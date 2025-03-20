window.addEventListener("load", function() {
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    fullscreenBtn.style.display = "none"; // Hide button initially

    // Check if the website is in the ../games/ folder
    const path = window.location.pathname;
    const isInGamesFolder = path.includes("/games/");

    const delay = isInGamesFolder ? 6000 : 0;

    setTimeout(() => {
        console.log(`Showing fullscreen button after ${delay / 1000} seconds.`);
        fullscreenBtn.style.display = "block"; // Show button after the specified delay
    }, delay);
});

function toggleFullscreen() {
    const gameArea = document.getElementById('game-area');
    
    if (!document.fullscreenElement) {
        if (gameArea.requestFullscreen) {
            gameArea.requestFullscreen();
        } else if (gameArea.webkitRequestFullscreen) { // Safari compatibility
            gameArea.webkitRequestFullscreen();
        } else if (gameArea.msRequestFullscreen) { // IE11 compatibility
            gameArea.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
