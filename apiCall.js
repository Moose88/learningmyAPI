const regionList = ['na1.', 'euw1.', 'eun1.'];
const proxeurl = 'https://cors-anywhere.herokuapp.com/https://';
const api = 'api.riotgames.com';
const summ = '/lol/summoner/v4/summoners/by-name/';
const match = '/lol/match/v4/matchlists/by-account/';
const matches = '/lol/match/v4/matches/';
const timeline = '/lol/match/v4/timelines/by-match/';

var API;

export function summSearch(name, apiKey, regionSelected) {    
  return new Promise(function(res, rej){
    console.log(proxeurl + regionSelected + api + summ + name + apiKey);

    axios.get(proxeurl + regionSelected + api + summ + name + apiKey)
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
      
      let summoner = {
        name: received.data.name,
        puuid: received.data.puuid,
          summonerLvl: received.data.summonerLevel,
          revisionDate: received.data.revisionDate,
          id: received.data.id,
          accountId: received.data.accountId
      };
        
      console.log('Success: ' + summoner.name + ' info recieved.');
      res(summoner);
    })
    .catch(function(err){
      rej(err);
    });

  });
  
}

export function apiBuilder(apiKey, name, regionVal){
  return new Promise(function(res, rej){
    let regionSelected = regionList[regionVal];
    console.log(apiKey, name, regionSelected);

    try{
      console.log(name, typeof(name), regionSelected, typeof(regionSelected), apiKey, typeof(apiKey));

      API = {
        name: name,
        apiKey: '?api_key=' + apiKey,
        regionSelected: regionSelected
      }

      res(API);
    }catch(e){
      console.log(apiKey, name, regionSelected);
      rej(e);
    }
  })
  
}



// API.summSearch(name).then(function(res) { console.log(res); })