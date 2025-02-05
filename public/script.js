// Fetch player count from your Vercel backend
fetch('/api/player-count')
  .then(response => response.json())
  .then(data => {
    const playerCount = data.playersOnline;
    document.getElementById('player-count').textContent = `${playerCount} players online`;
  })
  .catch(error => {
    document.getElementById('player-count').textContent = 'Unable to fetch player count';
    console.error('Error fetching player count:', error);
  });
