/*

script.js

This is the main script that handles the html interactions of the front.

*/

import { apiBuilder } from './apiCall.js';
import { summSearch } from './apiCall.js';
import { gameList } from './apiCall.js';

let api_key = 'RGAPI-7c37883f-4fd4-43cc-acf3-61b1468985f7';
var regionSelected;

async function main(name, regionSelected){
  let newAPI = await new apiBuilder(api_key, name, regionSelected);
  let summoner = await getLeagueData(newAPI);
  
  
  alert("Built summoner.");
  console.log(summoner);

  let matchData = await getMatchList(summoner, newAPI);
  alert("Got match data.");
  console.log(matchData);

}

async function getLeagueData(newAPI) {
  try{
    // Freeze the summoner object so it can't be modified after creation.
    return Object.freeze(await summSearch(newAPI.name, newAPI.apiKey, newAPI.regionSelected));

  } catch(e){
    console.log(e.message);
  }

}

async function getMatchList(summoner, newAPI){
  try{
    // Freeze the summoner object so it can't be modified after creation.
    return Object.freeze(await gameList(summoner.accountId, newAPI.apiKey, newAPI.regionSelected));

  } catch(e){
    console.log(e.message);
  }
}


// Runs when enter is pressed
document.getElementById('inputBox').addEventListener("keydown", function(e) {
  if (!e) { var e = window.event; }

  // Enter is pressed
  if (e.keyCode == 13) { 

    for(var i = 0; i < document.forms.regionForm.length; i++){
      if(document.forms.regionForm[i].checked)
        regionSelected = i;
    }
  
    let name = encodeURIComponent(document.getElementById('inputBox').value);
    console.log(name);  

    main(name, regionSelected);

  }
}, false);

// Runs when the submit button is pressed
document.getElementById('submit').addEventListener("mousedown", e =>{
  if(!e){var e = window.event;}
  e.preventDefault();

  for(var i = 0; i < document.forms.regionForm.length; i++){
    if(document.forms.regionForm[i].checked)
      regionSelected = i;
  }

  let name = encodeURIComponent(document.getElementById('inputBox').value);
  console.log(name);  

  main(name, regionSelected);
}, false);







//     /*
//     seasonId	int	Please refer to the Game Constants documentation.
//     queueId	int	Please refer to the Game Constants documentation.
//     gameId	long	
//     participantIdentities	List[ParticipantIdentityDto]	Participant identity information.
//     gameVersion	string	The major.minor version typically indicates the patch the match was played on.
//     platformId	string	Platform where the match was played.
//     gameMode	string	Please refer to the Game Constants documentation.
//     mapId	int	Please refer to the Game Constants documentation.
//     gameType	string	Please refer to the Game Constants documentation.
//     teams	List[TeamStatsDto]	Team information.
//     participants	List[ParticipantDto]	Participant information.
//     gameDuration	long	Match duration in seconds.
//     gameCreation	long	Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00.
//     */

// function getSummonerMatchInfo(latestMatchInformation){

//     axios.get(proxeurl + regionSelected + api + api_matches + latestMatchInformation.gameId + api_key)
//     .then(function(received){
//         console.log(received.data);

//         participationInformation = {
//             gameId: received.data.gameId,
//             platformId: received.data.platformId,
//             gameCreation: received.data.gameCreation,
//             gameDuration: received.data.gameDuration,
//             queueId: received.data.queueId,
//             mapId: received.data.mapId,
//             seasonId: received.data.seasonId,
//             gameVersion: received.data.gameVersion,
//             gameMode: received.data.gameMode,
//             teams: received.data.teams,
//             participants: received.data.participants,
//             participantIdentities: received.data.participantIdentities
//         };

//         for(var i = 0; i < participationInformation.participantIdentities.length; i++){
//             if(participationInformation.participantIdentities[i].player.accountId == summoner.accountId){
//                 let winloseVal = document.getElementById('winlose');
//                 if(participationInformation.participants[i].stats.win)
//                     winloseVal.innerText = 'You won!';
//                 else
//                     winloseVal.innerText = 'You lost...';
//                 document.getElementById('kills').innerText = participationInformation.participants[i].stats.kills;
//                 document.getElementById('deaths').innerText = participationInformation.participants[i].stats.deaths;
//                 document.getElementById('assists').innerText = participationInformation.participants[i].stats.assists;
//                 document.getElementById('kda').innerText = (participationInformation.participants[i].stats.kills + participationInformation.participants[i].stats.assists)/participationInformation.participants[i].stats.deaths;
//                 timelineCall(participationInformation.participantIdentities[i].participantId, participationInformation.gameId);
            
//             }
//         }
        
//     })
//     .catch(function(err){
//         console.log('Failed: ' + err);
//         alert('Failed to get data: ' + err);
//     });
// }

// function timelineCall(participantId, gameId){

//     axios.get(proxeurl + regionSelected + api + api_timeline + gameId + api_key)
//     .then(function(timeline){
//         console.log(timeline.data);
//     })
//     .catch(function(err){
//         console.log('Failed: ' + err);
//         alert('Failed to get data: ' + err);
//     });
// }

// function printData(input){
//     let idValueField = document.getElementById('id-value');
//     console.log(idValueField);
//     idValueField.innerText = input.id;

//     let acctNameValueField = document.getElementById('name-value');
//     console.log(acctNameValueField);
//     acctNameValueField.innerText = input.name;    

//     let acctIdValueField = document.getElementById('acctId-value');
//     console.log(acctIdValueField);
//     acctIdValueField.innerText = input.accountId; 
    
// }

// function printGameInfo(input){
//     console.log(input);
//     let gameIdField = document.getElementById('game-value');
//     gameIdField.innerText = input.gameId;
// }

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



