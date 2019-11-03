// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

//var name = prompt("What is your summoner name?", "Majestic Moose");
// var api = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/';
// var api_summ = 'summoner/v4/summoners/by-name/';
// var api_key = '?api_key=RGAPI-9d50dff2-5141-4f69-9633-b16cd6a9d89d';
// var accountID;

// $.getJSON(url + "summoner/v4/summoners/by-name/" + name + "?api_key=RGAPI-9d50dff2-5141-4f69-9633-b16cd6a9d89d", function(data){

    // let summonerInfo = {
    //     summoner_name: data.name,
    //     summoner_level: data.summonerLevel,
    //     accountID: data.accountId;
    // };

//     console.log(data);

//     var summoner_name = data.name;
//     var summoner_level = data.summonerLevel;
//     accountID = data.accountId;

//     $(".summoner_name").append(summoner_name);
//     $(".summoner_level").append(summoner_level);

//     console.log(accountID);


// });


// function setup(){

//     var button = select('#select');
//     button.mousePressed(summnameAsk);
//     var input = select('#summoner_name');
// }



// function summnameAsk(){
//     var url = api + api_summ + input.value + api_key;

//     loadJSON(url, gotData, 'jsonp');
// }

// function gotData(data){
//     summoner = data;
// }

// function output(){

//     if(summoner){
//         var summoner_name = summoner.name;
//         var summoner_level = summoner.summonerLevel;
//         var accountID = summoner.accountId;

//         $(".summoner_name").append(summoner_name);
//         $(".summoner_level").append(summoner_level);

//         console.log(accountID);
//     }
// }

// if(accountID){
//     $.getJSON(url + "match/v4/matchlists/by-account/" + accountID + "?api_key=RGAPI-9d50dff2-5141-4f69-9633-b16cd6a9d89d", function(matchData){
//         console.log(matchData);

//         var gamesID = matchData.matches[0].gameId;

//         $(".entries").append(gamesID);
//     });
// }


    
/* Software Notes

** Object example:
    
    let summonerInfo = {
        summoner_name: data.name,
        summoner_level: data.summonerLevel,
        accountID: data.accountId;
    };

** For bracket notation when assigning to an object during run time:
    
    let selection = 'selected';
    person[selection] = 'entry';

** Difference between '===' and '==':

    // String Equality (Type + Value)
    console.log(1 === 1) // True
    console.log(1 === '1') // False

    // Lose Equality 
    console.log(1 == 1) // True
    console.log(1 == '1') // True
    console.log(true == 1) // True

** Ternary Operation Example:

    let points = 110;
    let type = points > 100 ? 'gold' : 'silver; // If over 100 points, set type to gold, else to silver.

** Logical operators with non-bools

    // false || true -> true
    // false || 'Matt' -> "Matt"
    // false || 1 -> 1
    // false || 1 || 2 -> 1 (The first truthy identified is returned, known as short-circuiting)

    // Falsy (false)
    // undefined
    // null
    // 0
    // false
    // ''
    // NaN

    // Anything that is not Falsy, it is Truthy

** Javascript uses PEMDAS
*/



