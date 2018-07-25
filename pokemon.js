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





    // /* Pikachu
    // ================================= */
    // class Pokemon {
    //   constructor(name, hp, attack, defense, abilities){
    //     this.name = name;
    //     this.hp = hp;
    //     this.attack = attack;
    //     this.defense = defense;
    //     this.abilities = abilities;
    //   }
    // }
    
    let Joseph = new Trainer();


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

          document.getElementById("pikachu-name").innerHTML = 'My name is ' + pikachu.name;
          document.getElementById("pikachu-hp").innerHTML = 'My health is at ' + pikachu.hp;
          document.getElementById("pikachu-attack").innerHTML = 'My attack is ' + pikachu.attack;
          document.getElementById("pikachu-defense").innerHTML = 'My defense is ' + pikachu.defense;
          document.getElementById("pikachu-ability").innerHTML = 'My ability is ' + pikachu.abilities;


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

            document.getElementById("eevee-name").innerHTML = 'My name is ' + eevee.name;
            document.getElementById("eevee-hp").innerHTML = 'My health is at ' + eevee.hp;
            document.getElementById("eevee-attack").innerHTML = 'My attack is ' + eevee.attack;
            document.getElementById("eevee-defense").innerHTML = 'My defense is ' + eevee.defense;
            document.getElementById("eevee-ability").innerHTML = 'My ability is ' + eevee.abilities;


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

              document.getElementById("mewtwo-name").innerHTML = 'My name is ' + mewtwo.name;
              document.getElementById("mewtwo-hp").innerHTML = 'My health is at ' + mewtwo.hp;
              document.getElementById("mewtwo-attack").innerHTML = 'My attack is ' + mewtwo.attack;
              document.getElementById("mewtwo-defense").innerHTML = 'My defense is ' + mewtwo.defense;
              document.getElementById("mewtwo-ability").innerHTML = 'My ability is ' + mewtwo.abilities;


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

                document.getElementById("charmander-name").innerHTML = 'My name is ' + charmander.name;
                document.getElementById("charmander-hp").innerHTML = 'My health is at ' + charmander.hp;
                document.getElementById("charmander-attack").innerHTML = 'My attack is ' + charmander.attack;
                document.getElementById("charmander-defense").innerHTML = 'My defense is ' + charmander.defense;
                document.getElementById("charmander-ability").innerHTML = 'My ability is ' + charmander.abilities;


              }
            }
            xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/charmander/4", true);
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
              xhttp.open("GET","https://raw.githubusercontent.com/mwissig/pokegym/master/charmander/4", true);
              xhttp.send();
            }
