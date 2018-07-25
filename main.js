trainer = {
  name: 'Jig-Saw'
  this.jigSaw = ['Jig-Saw'];
}

trainer = {
  name: 'John Kramer'
  this.johnKramer = ['John Kramer'];
}

class Trainer {
  constructor() {
    name = name
  }
}

function callAPI() {
  xhttp = function() {

  }
}


//variables
var ditto = false; //checks whether each pokemon has been called from API
var mantyke = false;
var palossand = false;
var abilityLists = []; //a container for the abilities stored as strings
var i = 0; //the index of the pokemon
//Jig Saw//
//animation and sounds for when API is connected
function endLoadAnimation() {
  document.getElementById('pokeball').classList.add('open');
  intro.pause();
  loadsound.play();
}
//displays onnly the pokemon on TV
function displayPokemonOnTV() {
  document.getElementById('pokeballimg').classList.remove('black');
  document.getElementById('pokeballimg').src = (`images/${jigSaw.pokemon[i].id}.png`);
    document.getElementById(`title`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
  document.getElementById(`name${i}`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
}
//displays only the stats
function displayStatsOnly() {
  document.getElementById('displayStats').classList.remove('nocaps');
  document.getElementById("displayStats").innerHTML = (`
      <p>HP: <b>${jigSaw.pokemon[i].hp}</b> ATK: <b>${jigSaw.pokemon[i].atk}</b> DEF: <b>${jigSaw.pokemon[i].def}</b></p>
      <p>Abilities: <b>${abilityLists[i]}</b></p>`);
}

//displays all info on a pokemon
function displayAllPokeInfo() {
  document.getElementById('pokeballimg').classList.remove('black');
  document.getElementById('displayStats').classList.remove('nocaps');
  document.getElementById("displayStats").innerHTML = (`
      <p>HP: <b>${jigSaw.pokemon[i].hp}</b> ATK: <b>${jigSaw.pokemon[i].atk}</b> DEF: <b>${jigSaw.pokemon[i].def}</b></p>
      <p>Abilities: <b>${abilityLists[i]}</b></p>`);
  document.getElementById(`pokeball${i}`).src = jigSaw.pokemon[i].img;
  document.getElementById("title").innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
  document.getElementById('pokeballimg').src = (`images/${jigSaw.pokemon[i].id}.png`);
  document.getElementById(`name${i}`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
}
//show this if there are no stats loaded
function pleaseClickjigSaw() {
  document.getElementById('displayStats').classList.add('nocaps');
  document.getElementById("displayStats").innerHTML = (`Stats not loaded yet.`);
}
//trainer containting pokemon; makes 3 separate calls to API that push the pokemon into array one at a time: intentionally does not call them all at once to emphasize load animation and music
jigSaw = {
  pokemon: [],
  //returns an array containing all pokemon to the console
  all: function() {
    console.log(this.pokemon);
  },
  //returns each pokemon to the console when called by name



  //john Kramer//
  //animation and sounds for when API is connected
  function endLoadAnimation() {
    document.getElementById('pokeball').classList.add('open');
    intro.pause();
    loadsound.play();
  }
  //displays onnly the pokemon on TV
  function displayPokemonOnTV() {
    document.getElementById('pokeballimg').classList.remove('black');
    document.getElementById('pokeballimg').src = (`images/${johnKramer.pokemon[i].id}.png`);
      document.getElementById(`title`).innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
    document.getElementById(`name${i}`).innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  }
  //displays only the stats
  function displayStatsOnly() {
    document.getElementById('displayStats').classList.remove('nocaps');
    document.getElementById("displayStats").innerHTML = (`
        <p>HP: <b>${johnKramer.pokemon[i].hp}</b> ATK: <b>${johnKramer.pokemon[i].atk}</b> DEF: <b>${johnKramer.pokemon[i].def}</b></p>
        <p>Abilities: <b>${abilityLists[i]}</b></p>`);
  }

  //displays all info on a pokemon
  function displayAllPokeInfo() {
    document.getElementById('pokeballimg').classList.remove('black');
    document.getElementById('displayStats').classList.remove('nocaps');
    document.getElementById("displayStats").innerHTML = (`
        <p>HP: <b>${johnKramer.pokemon[i].hp}</b> ATK: <b>${johnKramer.pokemon[i].atk}</b> DEF: <b>${johnKramer.pokemon[i].def}</b></p>
        <p>Abilities: <b>${abilityLists[i]}</b></p>`);
    document.getElementById(`pokeball${i}`).src = johnKramer.pokemon[i].img;
    document.getElementById("title").innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
    document.getElementById('pokeballimg').src = (`images/${johnKramer.pokemon[i].id}.png`);
    document.getElementById(`name${i}`).innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  }
  //show this if there are no stats loaded
  function pleaseClickjohnKramer() {
    document.getElementById('displayStats').classList.add('nocaps');
    document.getElementById("displayStats").innerHTML = (`Stats not loaded yet. Click on Sean Connery from the 1974 film "Zardoz" to load data.`);
  }
  //trainer containting pokemon; makes 3 separate calls to API that push the pokemon into array one at a time: intentionally does not call them all at once to emphasize load animation and music
  johnKramer = {
    pokemon: [],
    //returns an array containing all pokemon to the console
    all: function() {
      console.log(this.pokemon);
    },
    //returns each pokemon to the console when called by name
