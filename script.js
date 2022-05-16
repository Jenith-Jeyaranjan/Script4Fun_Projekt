
/*HTML*/
  /* An array of objects. */
  const games = [
      {
          name: "Snake Game",
          description:"Snake game descripton",
          popuptext: "Play Snakegame now!",
          thumbnail:"snake",
          url: ""
        },
        {
            name: "Crossy Road",
            description: "Chicken cross road, chicken die",
            popuptext: "haha funny dead chicken",
            thumbnail:"none",
            url: "https://cuddlybunion341.github.io/crossy-road-clone/public"
        },
      {
        name: "Color Game",
        description: "Do you want to guess a color based on the rgb notation",
        popuptext: "Play Colorgame Now!",
        thumbnail:"colorgame",
        url: ""
    },
    {
        name:"tictactoe",
        description: "Do you want to play tictactoe",
        popuptext: "Play tictactoe now!",
        thumbnail: "none",
        url: ""
    },
    {
        name: "Spiel 1",
        description: "Do you want to guess a color based on the rgb notation",
        popuptext: "Play Spiel 1 Now!",
        thumbnail:"",
        url: ""
    },
    {
        name: "Spiel 2",
        description: "Do you want to guess a color based on the rgb notation",
        popuptext: "Play Spiel 2 Now!",
        thumbnail:"",
        url: ""
    },
    {
        name: "Spiel 3",
        description: "Do you want to guess a color based on the rgb notation",
        popuptext: "Play Spiel 3 Now!",
        thumbnail:"",
        url: ""
    },
    {
        name: "Spiel 4",
        description: "Do you want to guess a color based on the rgb notation",
        popuptext: "Play Spiel 4 Now!",
        thumbnail:"",
        url: ""
    },
   

]


/* Creating a new div element and appending it to the wrapper. */
window.addEventListener('load', () => {
    const wrapper = document.querySelector(".container");
    games.forEach(game => {
        const {name,description,thumbnail,popuptext, url} = game;

       /* Creating a template literal. */
        const html = `
            <div class="card" id="colorgame_card">
                <img class="image" src="img/thumbnails/${thumbnail}.png">
                <div class="details">
                    <h1>${name}</h1>
                    <br>
                    <p>${description}</p>
                </div>
                <div class="middle">
                    <div>
                        <h1 class="article">${popuptext}</h1>
                    </div>
                </div>
            </div>
        `;


        /* Creating a new div element and appending it to the wrapper. */
        const card = document.createElement("div");
        card.innerHTML = html.trim();


        /* Adding an event listener to the middle div. */
        card.querySelector(".middle")?.addEventListener('click',() => {
            window.open(url)
                console.log(card.querySelector(".middle"));
});
/* Appending the card to the wrapper. */

        wrapper.appendChild(card);
    })
});


