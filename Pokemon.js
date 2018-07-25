//calls API, plays sounds and changes images, adds pokemon data to object and displays that data, loads a different pokemon each time
callAPI: function() {
  if (ditto == false) {
    loadAnimation();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var pokemon = JSON.parse(this.responseText);
        i = 0;
        endLoadAnimation();
        name = pokemon.forms[0].name;
        id = pokemon.id;
        hp = pokemon.stats[5].base_stat;
        atk = pokemon.stats[4].base_stat;
        def = pokemon.stats[3].base_stat;
        img = pokemon.sprites.front_default;
        //makes an array of the abilities
        abilities = [];
        abilityList = "";
        for (x = 0; x < pokemon.abilities.length; x++) {
          abilities.push(pokemon.abilities[x].ability.name);
        }
        addPokemon(name);
        console.log(jigSaw.pokemon);
        //prepares the list of abilities to be displayed as a string and stores that string in an array so they can be accessed by the same index number as the data inside the object
        for (y = 0; y < jigSaw.pokemon[i].abilities.length; y++) {
          abilityList += jigSaw.pokemon[i].abilities[y] + " ";
        }
        abilityLists.push(abilityList);
        displayAllPokeInfo();
      }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Ditto/132", true);
    xhttp.send();
    ditto = true;
  } else if (ditto == true && mantyke == false) {
    loadAnimation();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var pokemon = JSON.parse(this.responseText);
        i = 1;
        endLoadAnimation();
        name = pokemon.forms[0].name;
        id = pokemon.id;
        hp = pokemon.stats[5].base_stat;
        atk = pokemon.stats[4].base_stat;
        def = pokemon.stats[3].base_stat;
        img = pokemon.sprites.front_default;
        abilities = [];
        abilityList = "";
        for (x = 0; x < pokemon.abilities.length; x++) {
          abilities.push(pokemon.abilities[x].ability.name);
        }
        addPokemon(name);
        console.log(jigSaw.pokemon);

        for (y = 0; y < jigSaw.pokemon[i].abilities.length; y++) {
          abilityList += jigSaw.pokemon[i].abilities[y] + " ";
        }
        abilityLists.push(abilityList);
        displayAllPokeInfo();
      }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Mantyke/Mantyke", true);
    xhttp.send();
    mantyke = true;
  } else if (mantyke == true && palossand == false) {
    loadAnimation();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var pokemon = JSON.parse(this.responseText);
        i = 2;
        endLoadAnimation();
        name = pokemon.forms[0].name;
        id = pokemon.id;
        hp = pokemon.stats[5].base_stat;
        atk = pokemon.stats[4].base_stat;
        def = pokemon.stats[3].base_stat;
        img = pokemon.sprites.front_default;
        abilities = [];
        abilityList = "";
        for (x = 0; x < pokemon.abilities.length; x++) {
          abilities.push(pokemon.abilities[x].ability.name);
        }
        addPokemon(name);
        console.log(jigSaw.pokemon);

        for (y = 0; y < jigSaw.pokemon[i].abilities.length; y++) {
          abilityList += jigSaw.pokemon[i].abilities[y] + " ";
        }
        abilityLists.push(abilityList);
        displayAllPokeInfo();
      }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Palossand/Palossand.txt", true);
    xhttp.send();
    palossand = true;
  } else {
    document.getElementById("displayStats").innerHTML = (`All Pok&eacutemon loaded.`);
  }
}
};

class Pokemon {
constructor() {
  this.name = name;
  this.id = id;
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.img = img;
  this.abilities = abilities;
}
}

function addPokemon(name) {
newPokemon = new Pokemon(name);
jigSaw.pokemon.push(newPokemon);
}

//animations on hover
function wobble() {
document.getElementById('pokeballimg').classList.add('animated');
document.getElementById('pokeballimg').classList.add('infinite');
document.getElementById('pokeballimg').classList.add('shake');
}

function unWobble() {
document.getElementById('pokeballimg').classList.remove('animated');
document.getElementById('pokeballimg').classList.remove('infinite');
document.getElementById('pokeballimg').classList.remove('shake');
}

function bounce() {
document.getElementById('tz').classList.add('animated');
document.getElementById('tz').classList.add('infinite');
document.getElementById('tz').classList.add('bounce');
}

function unBounce() {
document.getElementById('tz').classList.remove('animated');
document.getElementById('tz').classList.remove('infinite');
document.getElementById('tz').classList.remove('bounce');
}

//displays info already in pokemon object
function load0() {
if (ditto == false) {
  pleaseClickjigSaw();
} else {
  i = 0;
  displayStatsOnly();
  displayPokemonOnTV();
    document.getElementById('pokeball').classList.add('open');
}
}

function load1() {
if (mantyke == false) {
  pleaseClickjigSaw();
} else {
  i = 1;
  displayStatsOnly();
  displayPokemonOnTV();
    document.getElementById('pokeball').classList.add('open');
}
}

function load2() {
if (palossand == false) {
  pleaseClickjigSaw();
} else {
  i = 2;
  displayStatsOnly();
  displayPokemonOnTV();
    document.getElementById('pokeball').classList.add('open');
}
}
//secret function to show any pokemon on the TV without connecting to the API: hotlinks from Nintendo and applies a 0% brightness filter to the image to create a silhouette. it will show jigSaw's pokemon info if it has already been called
function pokeTV() {
number = prompt("Please enter a 3 digit number");
if (number === '132' && ditto == true) {
  load0();
  loadsound.play();
} else if (number === '458' && mantyke == true) {
  load1();
  loadsound.play();
} else if (number === '770' && palossand == true) {
  load2();
  loadsound.play();
} else {
  loadAnimation();
  intro.pause();
  document.getElementById('pokeballimg').classList.add('black');
  document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`);
  document.getElementById("title").innerHTML = "#" + number + " ???";
  document.getElementById("displayStats").innerHTML = "No data available"
}
}


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
}

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
    }
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
