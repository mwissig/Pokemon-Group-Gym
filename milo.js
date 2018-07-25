// // audio player for hold music
// var intro = document.getElementById("intro"); //the pokemon intro theme song from gen 1 games
// var loadsound = document.getElementById("loaded"); //the little ding sound when the pokemon loads
// var tv = document.getElementById("tv"); //tv static noise
//
// //variables
// var ditto = false; //checks whether each pokemon has been called from API
// var mantyke = false;
// var palossand = false;
// var abilityLists = []; //a container for the abilities stored as strings
// var i = 0; //the index of the pokemon
//
// //show "loading" animations and sounds
// function loadAnimation() {
//   document.getElementById('pokeballimg').classList.remove('black');
//   tv.play();
//   document.getElementById('pokeballimg').src = 'images/load.gif';
//   document.getElementById('pokeball').classList.remove('open');
//   document.getElementById("displayStats").innerHTML = "Loading..."
//   document.getElementById("title").innerHTML = "Loading...";
//   intro.play();
// }
// // //animation and sounds for when API is connected
// // function endLoadAnimation() {
// //   document.getElementById('pokeball').classList.add('open');
// //   intro.pause();
// //   loadsound.play();
// // }
// // //displays onnly the pokemon on TV
// // function displayPokemonOnTV() {
// //   document.getElementById('pokeballimg').classList.remove('black');
// //   document.getElementById('pokeballimg').src = (`images/${jigSaw.pokemon[i].id}.png`);
// //     document.getElementById(`title`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
// //   document.getElementById(`name${i}`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
// // }
// // //displays only the stats
// // function displayStatsOnly() {
// //   document.getElementById('displayStats').classList.remove('nocaps');
// //   document.getElementById("displayStats").innerHTML = (`
// //       <p>HP: <b>${jigSaw.pokemon[i].hp}</b> ATK: <b>${jigSaw.pokemon[i].atk}</b> DEF: <b>${jigSaw.pokemon[i].def}</b></p>
// //       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
// // }
// //
// // //displays all info on a pokemon
// // function displayAllPokeInfo() {
// //   document.getElementById('pokeballimg').classList.remove('black');
// //   document.getElementById('displayStats').classList.remove('nocaps');
// //   document.getElementById("displayStats").innerHTML = (`
// //       <p>HP: <b>${jigSaw.pokemon[i].hp}</b> ATK: <b>${jigSaw.pokemon[i].atk}</b> DEF: <b>${jigSaw.pokemon[i].def}</b></p>
// //       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
// //   document.getElementById(`pokeball${i}`).src = jigSaw.pokemon[i].img;
// //   document.getElementById("title").innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
// //   document.getElementById('pokeballimg').src = (`images/${jigSaw.pokemon[i].id}.png`);
// //   document.getElementById(`name${i}`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
// // }
// // //show this if there are no stats loaded
// // function pleaseClickjigSaw() {
// //   document.getElementById('displayStats').classList.add('nocaps');
// //   document.getElementById("displayStats").innerHTML = (`Stats not loaded yet. Click on Sean Connery from the 1974 film "Zardoz" to load data.`);
// // }
// // //trainer containting pokemon; makes 3 separate calls to API that push the pokemon into array one at a time: intentionally does not call them all at once to emphasize load animation and music
// // jigSaw = {
// //   pokemon: [],
// //   //returns an array containing all pokemon to the console
// //   all: function() {
// //     console.log(this.pokemon);
// //   },
// //   //returns each pokemon to the console when called by name
//   get: function(name) {
//     if (name == "ditto") {
//       return this.ditto;
//       console.log(this.ditto);
//     } else if (name == "mantyke") {
//       return this.mantyke;
//       console.log(this.mantyke);
//     } else if (name == "palossand") {
//       return this.palossand;
//       console.log(this.palossand);
//     } else {
//       console.log("No Pokemon data found for this name");
// //     }
// //   },
//   //calls API, plays sounds and changes images, adds pokemon data to object and displays that data, loads a different pokemon each time
//   callAPI: function() {
//     if (ditto == false) {
//       loadAnimation();
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           var pokemon = JSON.parse(this.responseText);
//           i = 0;
//           endLoadAnimation();
//           name = pokemon.forms[0].name;
//           id = pokemon.id;
//           hp = pokemon.stats[5].base_stat;
//           atk = pokemon.stats[4].base_stat;
//           def = pokemon.stats[3].base_stat;
//           img = pokemon.sprites.front_default;
//           //makes an array of the abilities
//           abilities = [];
//           abilityList = "";
//           for (x = 0; x < pokemon.abilities.length; x++) {
//             abilities.push(pokemon.abilities[x].ability.name);
//           }
//           addPokemon(name);
//           console.log(jigSaw.pokemon);
//           //prepares the list of abilities to be displayed as a string and stores that string in an array so they can be accessed by the same index number as the data inside the object
//           for (y = 0; y < jigSaw.pokemon[i].abilities.length; y++) {
//             abilityList += jigSaw.pokemon[i].abilities[y] + " ";
//           }
//           abilityLists.push(abilityList);
//           displayAllPokeInfo();
//         }
//       };
//       xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Ditto/132", true);
//       xhttp.send();
//       ditto = true;
//     } else if (ditto == true && mantyke == false) {
//       loadAnimation();
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           var pokemon = JSON.parse(this.responseText);
//           i = 1;
//           endLoadAnimation();
//           name = pokemon.forms[0].name;
//           id = pokemon.id;
//           hp = pokemon.stats[5].base_stat;
//           atk = pokemon.stats[4].base_stat;
//           def = pokemon.stats[3].base_stat;
//           img = pokemon.sprites.front_default;
//           abilities = [];
//           abilityList = "";
//           for (x = 0; x < pokemon.abilities.length; x++) {
//             abilities.push(pokemon.abilities[x].ability.name);
//           }
//           addPokemon(name);
//           console.log(jigSaw.pokemon);
//
//           for (y = 0; y < jigSaw.pokemon[i].abilities.length; y++) {
//             abilityList += jigSaw.pokemon[i].abilities[y] + " ";
//           }
//           abilityLists.push(abilityList);
//           displayAllPokeInfo();
//         }
//       };
//       xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Mantyke/Mantyke", true);
//       xhttp.send();
//       mantyke = true;
//     } else if (mantyke == true && palossand == false) {
//       loadAnimation();
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           var pokemon = JSON.parse(this.responseText);
//           i = 2;
//           endLoadAnimation();
//           name = pokemon.forms[0].name;
//           id = pokemon.id;
//           hp = pokemon.stats[5].base_stat;
//           atk = pokemon.stats[4].base_stat;
//           def = pokemon.stats[3].base_stat;
//           img = pokemon.sprites.front_default;
//           abilities = [];
//           abilityList = "";
//           for (x = 0; x < pokemon.abilities.length; x++) {
//             abilities.push(pokemon.abilities[x].ability.name);
//           }
//           addPokemon(name);
//           console.log(jigSaw.pokemon);
//
//           for (y = 0; y < jigSaw.pokemon[i].abilities.length; y++) {
//             abilityList += jigSaw.pokemon[i].abilities[y] + " ";
//           }
//           abilityLists.push(abilityList);
//           displayAllPokeInfo();
//         }
//       };
//       xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Palossand/Palossand.txt", true);
//       xhttp.send();
//       palossand = true;
//     } else {
//       document.getElementById("displayStats").innerHTML = (`All Pok&eacutemon loaded.`);
//     }
//   }
// };
//
// class Pokemon {
//   constructor() {
//     this.name = name;
//     this.id = id;
//     this.hp = hp;
//     this.atk = atk;
//     this.def = def;
//     this.img = img;
//     this.abilities = abilities;
//   }
// }
//
// function addPokemon(name) {
//   newPokemon = new Pokemon(name);
//   jigSaw.pokemon.push(newPokemon);
// }
//
// //animations on hover
// function wobble() {
//   document.getElementById('pokeballimg').classList.add('animated');
//   document.getElementById('pokeballimg').classList.add('infinite');
//   document.getElementById('pokeballimg').classList.add('shake');
// }
//
// function unWobble() {
//   document.getElementById('pokeballimg').classList.remove('animated');
//   document.getElementById('pokeballimg').classList.remove('infinite');
//   document.getElementById('pokeballimg').classList.remove('shake');
// }
//
// function bounce() {
//   document.getElementById('tz').classList.add('animated');
//   document.getElementById('tz').classList.add('infinite');
//   document.getElementById('tz').classList.add('bounce');
// }
//
// function unBounce() {
//   document.getElementById('tz').classList.remove('animated');
//   document.getElementById('tz').classList.remove('infinite');
//   document.getElementById('tz').classList.remove('bounce');
// }
//
// //displays info already in pokemon object
// function load0() {
//   if (ditto == false) {
//     pleaseClickjigSaw();
//   } else {
//     i = 0;
//     displayStatsOnly();
//     displayPokemonOnTV();
//       document.getElementById('pokeball').classList.add('open');
//   }
// }
//
// function load1() {
//   if (mantyke == false) {
//     pleaseClickjigSaw();
//   } else {
//     i = 1;
//     displayStatsOnly();
//     displayPokemonOnTV();
//       document.getElementById('pokeball').classList.add('open');
//   }
// }
//
// function load2() {
//   if (palossand == false) {
//     pleaseClickjigSaw();
//   } else {
//     i = 2;
//     displayStatsOnly();
//     displayPokemonOnTV();
//       document.getElementById('pokeball').classList.add('open');
//   }
// }
// //secret function to show any pokemon on the TV without connecting to the API: hotlinks from Nintendo and applies a 0% brightness filter to the image to create a silhouette. it will show jigSaw's pokemon info if it has already been called
// function pokeTV() {
//   number = prompt("Please enter a 3 digit number");
//   if (number === '132' && ditto == true) {
//     load0();
//     loadsound.play();
//   } else if (number === '458' && mantyke == true) {
//     load1();
//     loadsound.play();
//   } else if (number === '770' && palossand == true) {
//     load2();
//     loadsound.play();
//   } else {
//     loadAnimation();
//     intro.pause();
//     document.getElementById('pokeballimg').classList.add('black');
//     document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`);
//     document.getElementById("title").innerHTML = "#" + number + " ???";
//     document.getElementById("displayStats").innerHTML = "No data available"
//   }
// }
