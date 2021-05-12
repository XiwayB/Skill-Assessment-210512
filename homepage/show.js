// Create URL variable
const url = "https://jsonplaceholder.typicode.com/photos"

// // Fetch data from API
const fetchAlbumsFromApi = (url) => {
  fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log("ERROR Status:", response.status);
        }
        response.json().then(function(data) {
          data = data.slice(0, 9);
          console.log(data);

    data.forEach((albumData) => {
      console.log("ALBUM DATA", albumData)
    const cardList = document.getElementById("show-cards");
    const cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");
    cardContent.style.backgroundImage = `url(${albumData.thumbnailUrl})`;
    cardContent.style.backgroundSize = "cover";

    const h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    const cardTitle = document.createTextNode(albumData.title);
    h5.appendChild(cardTitle);

    const p = document.createElement("p");
    p.setAttribute("class", "card-description");
    const cardDescription = document.createTextNode("This is an amazing description");
    p.appendChild(cardDescription);

    const a = document.createElement("a");
    a.setAttribute("class", "btn btn-aon3D");
    a.setAttribute("href", `${albumData.url}`);
    const cardButton = document.createTextNode("CLICK HERE");
    a.appendChild(cardButton);

    cardList.appendChild(cardContent);
    cardContent.appendChild(h5);
    cardContent.appendChild(p);
    cardContent.appendChild(a);

    })
        });
      }
    )
    .catch(function(err) {
      console.log('ERROR', err);
    });
}

// // Call the function and pass it the url
fetchAlbumsFromApi(url);
