// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

//var name = prompt("What is your summoner name?", "Majestic Moose");
var api = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/';
var api_summ = 'summoner/v4/summoners/by-name/';
var api_key = '?api_key=RGAPI-9d50dff2-5141-4f69-9633-b16cd6a9d89d';
// var accountID;

// $.getJSON(url + "summoner/v4/summoners/by-name/" + name + "?api_key=RGAPI-9d50dff2-5141-4f69-9633-b16cd6a9d89d", function(data){

//     console.log(data);

//     var summoner_name = data.name;
//     var summoner_level = data.summonerLevel;
//     accountID = data.accountId;

//     $(".summoner_name").append(summoner_name);
//     $(".summoner_level").append(summoner_level);

//     console.log(accountID);


// });


function setup(){

    var button = select('#select');
    button.mousePressed(summnameAsk);
    var input = select('#summoner_name');
}



function summnameAsk(){
    var url = api + api_summ + input.value + api_key;

    loadJSON(url, gotData, 'jsonp');
}

function gotData(data){
    summoner = data;
}

function output(){

    if(summoner){
        var summoner_name = summoner.name;
        var summoner_level = summoner.summonerLevel;
        var accountID = summoner.accountId;

        $(".summoner_name").append(summoner_name);
        $(".summoner_level").append(summoner_level);

        console.log(accountID);
    }
}

// if(accountID){
//     $.getJSON(url + "match/v4/matchlists/by-account/" + accountID + "?api_key=RGAPI-9d50dff2-5141-4f69-9633-b16cd6a9d89d", function(matchData){
//         console.log(matchData);

//         var gamesID = matchData.matches[0].gameId;

//         $(".entries").append(gamesID);
//     });
// }
    
    

