// Sorting function
function sortProviders(value) {
    switch(value) {
      case '0':
        providers.sort((a, b) => a.speed - b.speed);
        break;
      case '1':
        providers.sort((a, b) => a.latency - b.latency);
        break;
      case '2':
        providers.sort((a, b) => a.cost - b.cost);
        break;
    }
    displayProviders();
  }
  
  // Function to display the providers
  function displayProviders() {
    const container = document.getElementById('provider-list');
    container.innerHTML = ''; // Clear previous entries
  
    providers.forEach(provider => {
      const card = document.createElement('div');
      card.className = 'provider-card';
      card.innerHTML = `
        <h3>${provider.name}</h3>
        <p>Location: ${provider.country}, ${provider.city}</p>
        <p>Latency: ${provider.latency} ms</p>
        <p>Speed: ${provider.speed} MB/s</p>
        <p>Cost: ${provider.cost} USD/GB</p>
      `;
      container.appendChild(card);
    });
  }
  
  // Initial display
  displayProviders();
  
  // Event listener for the slider
  document.getElementById('priority-slider').addEventListener('input', function() {
    sortProviders(this.value);
  });
  