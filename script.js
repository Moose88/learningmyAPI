// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))



// let name = prompt("What is your summoner name?", "Majestic Moose");


let regionList = ['na1.', 'euw1.', 'eun1.'];
var regionSelected;
const url = 'api.riotgames.com/lol/';
const proxeurl = 'https://cors-anywhere.herokuapp.com/https://';
let api_summ = 'summoner/v4/summoners/by-name/';
let api_match = 'match/v4/matchlists/by-account/';
let api_key = '?api_key=RGAPI-0b418aab-3eb7-4561-8f34-b2beb4c37562';
let accountID;


// clickButton = (event) => {

// };


function getLeagueData() {

    var region = document.getElementsByName('region');
    for(var i = 0, length = region.length; i < length; i++){
        if(region[i].checked)
            regionSelected = regionList[i];
    }
    
    let inputField = document.getElementById('input');
    console.log(inputField);
    let name = inputField.value;
    console.log("name = ", name);

    axios.get(proxeurl + regionSelected + url + api_summ + name + api_key)
    .then(function(received){

        /*
        profileIconId	int	ID of the summoner icon associated with the summoner.
        name	string	Summoner name.
        puuid	string	Encrypted PUUID. Exact length of 78 characters.
        summonerLevel	long	Summoner level associated with the summoner.
        revisionDate	long	Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change
        id	string	Encrypted summoner ID. Max length 63 characters.
        accountId	string	Encrypted account ID. Max length 56 characters. 
        */

        var summoner = {
            name: received.data.name,
            puuid: received.data.puuid,
            summonerLvl: received.data.summonerLevel,
            revisionDate: received.data.revisionDate,
            id: received.data.id,
            accountId: received.data.accountId
        };

        console.log('Success: ' + summoner.name + ' info recieved.');
        printData(summoner);
        gameList(summoner.accountId);
        
    })
    .catch(function(err){
        console.log('Failed: ' + err);
        alert('Failed to get data: ' + err);
    });
}

function gameList(acctId){
    var region = document.getElementsByName('region');
    for(var i = 0, length = region.length; i < length; i++){
        if(region[i].checked)
            regionSelected = regionList[i];
    }

    axios.get(proxeurl + regionSelected + url + api_match + acctId + api_key)
    .then(function(received){

        /*
        lane	string	
        gameId	long	
        champion	int	
        platformId	string	
        season	int	
        queue	int	
        role	string	
        timestamp	long
        */
        console.log(received.data.matches);
        var obj = JSON.stringify(received.data.matches, undefined, 2);
        document.getElementById('match-hist').innerText = obj;
        
    })
    .catch(function(err){
        console.log('Failed: ' + err);
        alert('Failed to get data: ' + err);
    });
}

function printData(input){
    let idValueField = document.getElementById('id-value');
    console.log(idValueField);
    idValueField.innerText = input.id;

    let acctNameValueField = document.getElementById('name-value');
    console.log(acctNameValueField);
    acctNameValueField.innerText = input.name;    

    let acctIdValueField = document.getElementById('acctId-value');
    console.log(acctIdValueField);
    acctIdValueField.innerText = input.accountId; 
    
}



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



