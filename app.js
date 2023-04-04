const myApp = {
  init() {
    // Define the API endpoint URL
    const apiUrl = "https://api.openbrewerydb.org/v1/breweries";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Display the data on the page
        const dataContainer = document.getElementById("dataContainer");
        data.forEach((item) => {
          const itemElement = document.createElement("div");
          itemElement.innerHTML = `<h2>${item.name}</h2><p>${item.street}, ${item.city}, ${item.state}</p>`;
          dataContainer.appendChild(itemElement);
        });
      })
      .catch((error) => console.error(error));
  },

  // create a function that will fetch the micro breweries data and display it on the page
  microBtn() {
    const apiUrl =
      "https://api.openbrewerydb.org/v1/breweries?by_type=micro&per_page=3";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const dataContainer = document.getElementById("dataContainer");
        dataContainer.innerHTML = ""; // Clear the container
        data.forEach((item) => {
          const itemElement = document.createElement("div");
          itemElement.innerHTML = `<h2>${item.name}</h2><p>${item.street}, ${item.city}, ${item.state}</p>`;
          dataContainer.appendChild(itemElement);
        });
      })
      .catch((error) => console.error(error));
  },

  brewpubBtn() {
    const apiUrl =
      "https://api.openbrewerydb.org/v1/breweries?by_type=brewpub&per_page=3";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const dataContainer = document.getElementById("dataContainer");
        dataContainer.innerHTML = ""; // Clear the container
        data.forEach((item) => {
          const itemElement = document.createElement("div");
          itemElement.innerHTML = `<h2>${item.name}</h2><p>${item.street}, ${item.city}, ${item.state}</p>`;
          dataContainer.appendChild(itemElement);
        });
      })
      .catch((error) => console.error(error));
  },
};

// Initialize the app
myApp.init();

// Add event listener to the micro button
const microButton = document.getElementById("micro");
microButton.addEventListener("click", myApp.microBtn);

// Add event listener to the brewpub button
const brewpubButton = document.getElementById("brewpub");
brewpubButton.addEventListener("click", myApp.brewpubBtn);
