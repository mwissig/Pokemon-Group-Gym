// trainer = {
//   name: 'Jig-Saw'
//   this.jigSaw = ['Jig-Saw'];
// }
//
// trainer = {
//   name: 'John Kramer'
//   this.johnKramer = ['John Kramer'];
// }
//
// class Trainer {
//   constructor() {
//     name = name
//   }
// }
//
// function callAPI() {
//   xhttp = function() {
//
//   }
// }


// //variables
// var ditto = false; //checks whether each pokemon has been called from API
// var mantyke = false;
// var palossand = false;
// var abilityLists = []; //a container for the abilities stored as strings
// var i = 0; //the index of the pokemon
// //Jig Saw//
// //animation and sounds for when API is connected
// function endLoadAnimation() {
//   document.getElementById('pokeball').classList.add('open');
//   intro.pause();
//   loadsound.play();
// }
// //displays onnly the pokemon on TV
// function displayPokemonOnTV() {
//   document.getElementById('pokeballimg').classList.remove('black');
//   document.getElementById('pokeballimg').src = (`images/${jigSaw.pokemon[i].id}.png`);
//     document.getElementById(`title`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
//   document.getElementById(`name${i}`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
// }
// //displays only the stats
// function displayStatsOnly() {
//   document.getElementById('displayStats').classList.remove('nocaps');
//   document.getElementById("displayStats").innerHTML = (`
//       <p>HP: <b>${jigSaw.pokemon[i].hp}</b> ATK: <b>${jigSaw.pokemon[i].atk}</b> DEF: <b>${jigSaw.pokemon[i].def}</b></p>
//       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
// }
//
// //displays all info on a pokemon
// function displayAllPokeInfo() {
//   document.getElementById('pokeballimg').classList.remove('black');
//   document.getElementById('displayStats').classList.remove('nocaps');
//   document.getElementById("displayStats").innerHTML = (`
//       <p>HP: <b>${jigSaw.pokemon[i].hp}</b> ATK: <b>${jigSaw.pokemon[i].atk}</b> DEF: <b>${jigSaw.pokemon[i].def}</b></p>
//       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
//   document.getElementById(`pokeball${i}`).src = jigSaw.pokemon[i].img;
//   document.getElementById("title").innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
//   document.getElementById('pokeballimg').src = (`images/${jigSaw.pokemon[i].id}.png`);
//   document.getElementById(`name${i}`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
// }
// //show this if there are no stats loaded
// function pleaseClickjigSaw() {
//   document.getElementById('displayStats').classList.add('nocaps');
//   document.getElementById("displayStats").innerHTML = (`Stats not loaded yet.`);
// }
// //trainer containting pokemon; makes 3 separate calls to API that push the pokemon into array one at a time: intentionally does not call them all at once to emphasize load animation and music
// jigSaw = {
//   pokemon: [],
  //returns an array containing all pokemon to the console
  // all: function() {
  //   console.log(this.pokemon);
  // },
  //returns each pokemon to the console when called by name



  //john Kramer//
  // //animation and sounds for when API is connected
  // function endLoadAnimation() {
  //   document.getElementById('pokeball').classList.add('open');
  //   intro.pause();
  //   loadsound.play();
  // }
  // //displays onnly the pokemon on TV
  // function displayPokemonOnTV() {
  //   document.getElementById('pokeballimg').classList.remove('black');
  //   document.getElementById('pokeballimg').src = (`images/${johnKramer.pokemon[i].id}.png`);
  //     document.getElementById(`title`).innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  //   document.getElementById(`name${i}`).innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  // }
  // //displays only the stats
  // function displayStatsOnly() {
  //   document.getElementById('displayStats').classList.remove('nocaps');
  //   document.getElementById("displayStats").innerHTML = (`
  //       <p>HP: <b>${johnKramer.pokemon[i].hp}</b> ATK: <b>${johnKramer.pokemon[i].atk}</b> DEF: <b>${johnKramer.pokemon[i].def}</b></p>
  //       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
  // }
  //
  // //displays all info on a pokemon
  // function displayAllPokeInfo() {
  //   document.getElementById('pokeballimg').classList.remove('black');
  //   document.getElementById('displayStats').classList.remove('nocaps');
  //   document.getElementById("displayStats").innerHTML = (`
  //       <p>HP: <b>${johnKramer.pokemon[i].hp}</b> ATK: <b>${johnKramer.pokemon[i].atk}</b> DEF: <b>${johnKramer.pokemon[i].def}</b></p>
  //       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
  //   document.getElementById(`pokeball${i}`).src = johnKramer.pokemon[i].img;
  //   document.getElementById("title").innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  //   document.getElementById('pokeballimg').src = (`images/${johnKramer.pokemon[i].id}.png`);
  //   document.getElementById(`name${i}`).innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  // }
  // //show this if there are no stats loaded
  // function pleaseClickjohnKramer() {
  //   document.getElementById('displayStats').classList.add('nocaps');
  //   document.getElementById("displayStats").innerHTML = (`Stats not loaded yet. Click on Sean Connery from the 1974 film "Zardoz" to load data.`);
  // }
  //trainer containting pokemon; makes 3 separate calls to API that push the pokemon into array one at a time: intentionally does not call them all at once to emphasize load animation and music
  // johnKramer = {
  //   pokemon: [],
  //   //returns an array containing all pokemon to the console
  //   all: function() {
  //     console.log(this.pokemon);
    // },
    //returns each pokemon to the console when called by name
//
// //variables
// var ditto = false; //checks whether each pokemon has been called from API
// var mantyke = false;
// var palossand = false;
// var abilityLists = []; //a container for the abilities stored as strings
// var i = 0; //the index of the pokemon
// //Jig Saw//
// //animation and sounds for when API is connected
// function endLoadAnimation() {
//   document.getElementById('pokeball').classList.add('open');
//   intro.pause();
//   loadsound.play();
// }
// //displays onnly the pokemon on TV
// function displayPokemonOnTV() {
//   document.getElementById('pokeballimg').classList.remove('black');
//   document.getElementById('pokeballimg').src = (`images/${jigSaw.pokemon[i].id}.png`);
//     document.getElementById(`title`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
//   document.getElementById(`name${i}`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
// }
// //displays only the stats
// function displayStatsOnly() {
//   document.getElementById('displayStats').classList.remove('nocaps');
//   document.getElementById("displayStats").innerHTML = (`
//       <p>HP: <b>${jigSaw.pokemon[i].hp}</b> ATK: <b>${jigSaw.pokemon[i].atk}</b> DEF: <b>${jigSaw.pokemon[i].def}</b></p>
//       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
// }
//
// //displays all info on a pokemon
// function displayAllPokeInfo() {
//   document.getElementById('pokeballimg').classList.remove('black');
//   document.getElementById('displayStats').classList.remove('nocaps');
//   document.getElementById("displayStats").innerHTML = (`
//       <p>HP: <b>${jigSaw.pokemon[i].hp}</b> ATK: <b>${jigSaw.pokemon[i].atk}</b> DEF: <b>${jigSaw.pokemon[i].def}</b></p>
//       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
//   document.getElementById(`pokeball${i}`).src = jigSaw.pokemon[i].img;
//   document.getElementById("title").innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
//   document.getElementById('pokeballimg').src = (`images/${jigSaw.pokemon[i].id}.png`);
//   document.getElementById(`name${i}`).innerHTML = (`#${jigSaw.pokemon[i].id}: ${jigSaw.pokemon[i].name}`);
// }
// //show this if there are no stats loaded
// function pleaseClickjigSaw() {
//   document.getElementById('displayStats').classList.add('nocaps');
//   document.getElementById("displayStats").innerHTML = (`Stats not loaded yet.`);
// }
// //trainer containting pokemon; makes 3 separate calls to API that push the pokemon into array one at a time: intentionally does not call them all at once to emphasize load animation and music
// jigSaw = {
//   pokemon: [],
//   //returns an array containing all pokemon to the console
//   all: function() {
//     console.log(this.pokemon);
//   },
//   //returns each pokemon to the console when called by name
//

  //
  // //john Kramer//
  // //animation and sounds for when API is connected
  // function endLoadAnimation() {
  //   document.getElementById('pokeball').classList.add('open');
  //   intro.pause();
  //   loadsound.play();
  // }
  // //displays onnly the pokemon on TV
  // function displayPokemonOnTV() {
  //   document.getElementById('pokeballimg').classList.remove('black');
  //   document.getElementById('pokeballimg').src = (`images/${johnKramer.pokemon[i].id}.png`);
  //     document.getElementById(`title`).innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  //   document.getElementById(`name${i}`).innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  // }
  // //displays only the stats
  // function displayStatsOnly() {
  //   document.getElementById('displayStats').classList.remove('nocaps');
  //   document.getElementById("displayStats").innerHTML = (`
  //       <p>HP: <b>${johnKramer.pokemon[i].hp}</b> ATK: <b>${johnKramer.pokemon[i].atk}</b> DEF: <b>${johnKramer.pokemon[i].def}</b></p>
  //       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
  // }
  //
  // //displays all info on a pokemon
  // function displayAllPokeInfo() {
  //   document.getElementById('pokeballimg').classList.remove('black');
  //   document.getElementById('displayStats').classList.remove('nocaps');
  //   document.getElementById("displayStats").innerHTML = (`
  //       <p>HP: <b>${johnKramer.pokemon[i].hp}</b> ATK: <b>${johnKramer.pokemon[i].atk}</b> DEF: <b>${johnKramer.pokemon[i].def}</b></p>
  //       <p>Abilities: <b>${abilityLists[i]}</b></p>`);
  //   document.getElementById(`pokeball${i}`).src = johnKramer.pokemon[i].img;
  //   document.getElementById("title").innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  //   document.getElementById('pokeballimg').src = (`images/${johnKramer.pokemon[i].id}.png`);
  //   document.getElementById(`name${i}`).innerHTML = (`#${johnKramer.pokemon[i].id}: ${johnKramer.pokemon[i].name}`);
  // }
  // //show this if there are no stats loaded
  // function pleaseClickjohnKramer() {
  //   document.getElementById('displayStats').classList.add('nocaps');
  //   document.getElementById("displayStats").innerHTML = (`Stats not loaded yet. Click on Sean Connery from the 1974 film "Zardoz" to load data.`);
  // }
  // //trainer containting pokemon; makes 3 separate calls to API that push the pokemon into array one at a time: intentionally does not call them all at once to emphasize load animation and music
  // johnKramer = {
  //   pokemon: [],
  //   //returns an array containing all pokemon to the console
  //   all: function() {
  //     console.log(this.pokemon);
  //   },
  //   //returns each pokemon to the console when called by name
  //




    /* Pikachu
    ================================= */
    class Pokemon {
      constructor(name, hp, attack, defense, abilities){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
      }
    };

    //
    // let Joseph = new Trainer();


    function pikachuDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var myObj = JSON.parse(this.responseText);
          pikachu = new Pokemon (
            this.name = myObj.name,
            this.hp = myObj.stats[5].base_stat,
            this.attack = myObj.stats[4].base_stat,
            this.defense = myObj.stats[1].base_stat,
            this.ability = myObj.abilities[0].ability.name,
          );
          console.log(pikachu);

          document.getElementById("displayStats").innerHTML = (`My name is ${pikachu.name}<br>
            My health is at ${pikachu.hp}<br>
            My attack is ${pikachu.attack}<br>
    My defense is ${pikachu.defense}<br>
    My ability is ${pikachu.abilities}<p>Pikachu was born a happy and careless soul. Pikachu loved everyone and tried to befriend everyone. However, one night he met Eevee who started playing and Eevee threw Pikachu into the vat of acids at Ace chemicals. Ever since that day he has been looking for revenge.</p>`);

    document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png`);
        }
      }
      xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/pikachu/25", true);
      console.log(xhttp);
      xhttp.send();
    }

    function loadPokemon() {
      var xhttp = new XMLHttpRequest();
      console.log(xhttp); {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          document.getElementById('info').src = myObj.sprites.front_default;
          console.log(this.responseText);
        }yorvi
        };
        xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/pikachu/25", true);
        xhttp.send();
      }


      /* Eevee
      ================================= */




      function eeveeDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

            var myObj = JSON.parse(this.responseText);
            var eevee = new Pokemon (
              this.name = myObj.name,
              this.hp = myObj.stats[5].base_stat,
              this.attack = myObj.stats[4].base_stat,
              this.defense = myObj.stats[1].base_stat,
              this.ability = myObj.abilities[0].ability.name,
            );
            console.log(eevee);

            document.getElementById("displayStats").innerHTML = (`My name is ${eevee.name}<br>
              My health is at ${eevee.hp}<br>
              My attack is ${eevee.attack}<br>
      My defense is ${eevee.defense}<br>
      My ability is ${eevee.abilities}<p>Eevee was born in an abandoned egg down by the sewer where the chemicals are rushing down the stream. They are causing Eevee to be in a lot of pain and he will wait for his next victim.</p>`);
    document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png`)

          }
        }
        xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/eevee/133", true);
        console.log(xhttp);
        xhttp.send();
      }

      function loadPokemon() {
        var xhttp = new XMLHttpRequest();
        console.log(xhttp); {
          if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById('info').src = myObj.sprites.front_default;
            console.log(this.responseText);
          }
          };
          xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/eevee/133", true);
          xhttp.send();
        }

        /* Mewtwo
        ================================= */




        function mewDoc() {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

              var myObj = JSON.parse(this.responseText);
              var mewtwo = new Pokemon (
                this.name = myObj.name,
                this.hp = myObj.stats[5].base_stat,
                this.attack = myObj.stats[4].base_stat,
                this.defense = myObj.stats[1].base_stat,
                this.ability = myObj.abilities[0].ability.name,
              );
              console.log(mewtwo);

              document.getElementById("displayStats").innerHTML = (`My name is ${mewtwo.name}<br>
                My health is at ${mewtwo.hp}<br>
                My attack is ${mewtwo.attack}<br>
        My defense is ${mewtwo.defense}<br>
        My ability is ${mewtwo.abilities}<p>Mewtwo was born in a place far away. He was born a machine.</p>`);
    document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png`)

            }
          }
          xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/mewtwo/150", true);
          console.log(xhttp);
          xhttp.send();
        }

        function mewPokemon() {
          var xhttp = new XMLHttpRequest();
          console.log(xhttp); {
            if (this.readyState == 4 && this.status == 200) {
              var myObj = JSON.parse(this.responseText);
              document.getElementById('info').src = myObj.sprites.front_default;
              console.log(this.responseText);
            }
            };
            xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/mewtwo/150", true);
            xhttp.send();
          }

          /* Charmander
          ================================= */




          function charmDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {

                var myObj = JSON.parse(this.responseText);
                var charmander = new Pokemon (
                  this.name = myObj.name,
                  this.hp = myObj.stats[5].base_stat,
                  this.attack = myObj.stats[4].base_stat,
                  this.defense = myObj.stats[1].base_stat,
                  this.ability = myObj.abilities[0].ability.name,
                );
                console.log(charmander);

                document.getElementById("displayStats").innerHTML = (`My name is ${charmander.name}<br>
                  My health is at ${charmander.hp}<br>
                  My attack is ${charmander.attack}<br>
          My defense is ${charmander.defense}<br>
          My ability is ${charmander.abilities}<p>Charmander was born into the darkness and molded by the blackness of it all. He didn't see the light until he was already a man, by then it was nothing to him but blindness!. Charmander is a viscious murderer who waits underneith the rock to strike.</p>`);
    document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png`)

              }
            }
            xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/charmander/4", true);
            console.log(xhttp);
            xhttp.send();
          }

          function dittoDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {

                var myObj = JSON.parse(this.responseText);
                var ditto = new Pokemon (
                  this.name = myObj.name,
                  this.hp = myObj.stats[5].base_stat,
                  this.attack = myObj.stats[4].base_stat,
                  this.defense = myObj.stats[1].base_stat,
                  this.ability = myObj.abilities[0].ability.name,
                );
                console.log(ditto);

                document.getElementById("displayStats").innerHTML = (`My name is ${ditto.name}<br>
                  My health is at ${ditto.hp}<br>
                  My attack is ${ditto.attack}<br>
          My defense is ${ditto.defense}<br>
          My ability is ${ditto.abilities}<p>Ditto is a real creep, it could be right behind you and you wouldn't even know.`);
    document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png`)

              }
            }
            xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/Ditto/132", true);
            console.log(xhttp);
            xhttp.send();
          }

          function mantykeDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {

                var myObj = JSON.parse(this.responseText);
                var mantyke = new Pokemon (
                  this.name = myObj.name,
                  this.hp = myObj.stats[5].base_stat,
                  this.attack = myObj.stats[4].base_stat,
                  this.defense = myObj.stats[1].base_stat,
                  this.ability = myObj.abilities[0].ability.name,
                );
                console.log(mantyke);

                document.getElementById("displayStats").innerHTML = (`My name is ${mantyke.name}<br>
                  My health is at ${mantyke.hp}<br>
                  My attack is ${mantyke.attack}<br>
          My defense is ${mantyke.defense}<br>
          My ability is ${mantyke.abilities}<p>It uses its flaps to do murders, somehow.</p>`);
    document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/458.png`)

              }
            }
            xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/Mantyke/Mantyke", true);
            console.log(xhttp);
            xhttp.send();
          }

          function paloDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {

                var myObj = JSON.parse(this.responseText);
                var palo = new Pokemon (
                  this.name = myObj.name,
                  this.hp = myObj.stats[5].base_stat,
                  this.attack = myObj.stats[4].base_stat,
                  this.defense = myObj.stats[1].base_stat,
                  this.ability = myObj.abilities[0].ability.name,
                );
                console.log(palo);

                document.getElementById("displayStats").innerHTML = (`My name is ${palo.name}<br>
                  My health is at ${palo.hp}<br>
                  My attack is ${palo.attack}<br>
          My defense is ${palo.defense}<br>
          My ability is ${palo.abilities}<p>This is some kind of sand castle that eats people. I didn't even make that up, that's all Nintendo.</p>`);
    document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/770.png`)

              }
            }
            xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/Palossand/Palossand.txt", true);
            console.log(xhttp);
            xhttp.send();
          }


          // function loadPokemon() {
          //   var xhttp = new XMLHttpRequest();
          //   console.log(xhttp); {
          //     if (this.readyState == 4 && this.status == 200) {
          //       var myObj = JSON.parse(this.responseText);
          //       document.getElementById('info').src = myObj.sprites.front_default;
          //       console.log(this.responseText);
          //     }
          //     };
          //     xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/charmander/4", true);
          //     xhttp.send();
          //   }
