// Create data

const cardsData =  [
{
      title: "Documentation",
      description:
        "Find installation and configuration guides, maintenance procedures, material guides, and more",
      btnName: "READ DOCS",
      url: "#",
    },
    {
      title: "AON3D Academy",
      description:
        "Boost your knowledge about our products and enhance your professional profiles.",
      btnName: "ACCESS COURSES",
      url: "#",
    },
    {
      title: "Online Store",
      description:
        "Purchase consumables, spare parts, and flament",
      btnName: "PURCHASE ITEMS",
      url: "#",
    },
    {
      title: "Vendors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btnName: "CLICK HERE",
      url: "#",
    },
    {
      title: "Suppliers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btnName: "CLICK HERE",
      url: "#",
    },
    {
      title: "Resources",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btnName: "CLICK HERE",
      url: "#",
    },
  ];

// Create HTML elements and Iterate through cardsData to append data to HTML elements

const appendCardDataTo = (cardsData) => {
  cardsData.forEach((data) => {

    const cardList = document.getElementById("cards");
    const cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");

    const h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    const cardTitle = document.createTextNode(data.title);
    h5.appendChild(cardTitle);

    const p = document.createElement("p");
    p.setAttribute("class", "card-description");
    const cardDescription = document.createTextNode(data.description);
    p.appendChild(cardDescription);

    const a = document.createElement("a");
    a.setAttribute("class", "btn btn-aon3D");
    a.setAttribute("href", `${data.url}`);
    const cardButton = document.createTextNode(data.btnName);
    a.appendChild(cardButton);

    cardList.appendChild(cardContent);
    cardContent.appendChild(h5);
    cardContent.appendChild(p);
    cardContent.appendChild(a);

  })
}

// Call the function and pass it cardsData
appendCardDataTo(cardsData);
