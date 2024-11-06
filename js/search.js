// Fetch game data from the JSON file
async function fetchGames() {
    const response = await fetch('../js/games.json');
    const games = await response.json();
    return games;
}

// Function to perform the search
async function searchGames(query) {
    const games = await fetchGames();
    const results = games.filter(game =>
        game.name.toLowerCase().includes(query.toLowerCase())
    );
    displayResults(results);
}

// Function to display search results
function displayResults(results) {
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';

    // Check if there are any results
    if (results.length === 0) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.textContent = 'No results...';
        noResultsMessage.className = 'no-results-message'; // Apply the CSS class
        resultsContainer.appendChild(noResultsMessage);
    } else {
        results.forEach(game => {
            const gameLink = document.createElement('a');
            gameLink.href = game.url;
            gameLink.textContent = game.name;
            resultsContainer.appendChild(gameLink);
        });
    }

    // Append results container to the DOM (or replace existing results if any)
    const searchBar = document.querySelector('.search-bar');
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
    searchBar.appendChild(resultsContainer);
}

// Event listener for the search button
document.querySelector('.search-bar button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value;
    if (query) {
        searchGames(query);
    }
});

// Event listener for "Enter" key press in the search input
document.querySelector('.search-bar input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = event.target.value;
        if (query) {
            searchGames(query);
        }
    }
});

// Event listener for clicking outside the search bar to hide results
document.addEventListener('click', (event) => {
    const searchBar = document.querySelector('.search-bar');
    const resultsContainer = document.querySelector('.search-results');

    // Check if click happened outside the search bar or results
    if (resultsContainer && !searchBar.contains(event.target)) {
        resultsContainer.remove();
    }
});
