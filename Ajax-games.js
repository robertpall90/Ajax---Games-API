var baseUrl = "https://games-world.herokuapp.com";
var gamesArray;
var currentGame;


document.getElementById("games-button").addEventListener("click", findGames);

function findGames() {
    fetch(baseUrl + "/games", { method: "GET" })
        .then(
            function (response) {
                return response.json();
            }
        ).then(
            function (jsonResp) {
                console.log(jsonResp);
                if (jsonResp.error) {
                    displayError("Sorry..." + jsonResp.error);
                } else {
                    gamesArray = jsonResp;
                    for (var i = 0; i < gamesArray.length; i++) {
                        displayGames(gamesArray[i]);
                    }
                }
            }
        ).catch(
            function (error) {
                console.log(error);
                displayError("Sorry! Something went wrong..." + error);
            }
        )
}

function displayGames(currentGame) {
    var games = document.getElementById("gamesDiv");

    var title = document.createElement("p");
    title.innerText = "Title: " + currentGame.title;

    var description = document.createElement("p");
    description.innerText = "Description : " + currentGame.description;
    description.style.fontSize = "x-small";

    var image = document.createElement("img");
    image.setAttribute("src", currentGame.imageUrl)
    image.setAttribute("width", "200");

    games.appendChild(title);
    games.appendChild(image);
    games.appendChild(description);
}


function displayError(error) {
    var errorDiv = document.getElementById("errorDiv");
    errorDiv.innerText = error;
}
