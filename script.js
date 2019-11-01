// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

var name = prompt("What is your summoner name?", "Harry Potter!");

$.getJSON("https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name + "?api_key=RGAPI-9d50dff2-5141-4f69-9633-b16cd6a9d89d", function(data){
    console.log(data);

    var summoner_name = data.name;
    var summoner_level = data.summonerLevel;

    $(".summoner_name").append(summoner_name);
    $(".summoner_level").append(summoner_level);
    }
);