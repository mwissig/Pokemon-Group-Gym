trainers = {
  jigsaw: [],
  kramer: []
}



/* Pikachu
================================= */
class Pokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
};

function callAPI() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      pokemon = new Pokemon(
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(pokemon);
trainers.kramer.push(pokemon);
console.log(trainers);
}
}
xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/pikachu/25", true);
console.log(xhttp);
xhttp.send();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    pokemon = new Pokemon(
      this.name = myObj.name,
      this.hp = myObj.stats[5].base_stat,
      this.attack = myObj.stats[4].base_stat,
      this.defense = myObj.stats[1].base_stat,
      this.ability = myObj.abilities[0].ability.name,
    );
    console.log(pokemon);
trainers.kramer.push(pokemon);
console.log(trainers);
}
}
xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/eevee/133", true);
console.log(xhttp);
xhttp.send();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    pokemon = new Pokemon(
      this.name = myObj.name,
      this.hp = myObj.stats[5].base_stat,
      this.attack = myObj.stats[4].base_stat,
      this.defense = myObj.stats[1].base_stat,
      this.ability = myObj.abilities[0].ability.name,
    );
    console.log(pokemon);
trainers.kramer.push(pokemon);
console.log(trainers);
}
}
xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/mewtwo/150", true);
console.log(xhttp);
xhttp.send();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    pokemon = new Pokemon(
      this.name = myObj.name,
      this.hp = myObj.stats[5].base_stat,
      this.attack = myObj.stats[4].base_stat,
      this.defense = myObj.stats[1].base_stat,
      this.ability = myObj.abilities[0].ability.name,
    );
    console.log(pokemon);
trainers.kramer.push(pokemon);
console.log(trainers);
}
}
xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Ditto/132", true);
console.log(xhttp);
xhttp.send();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    pokemon = new Pokemon(
      this.name = myObj.name,
      this.hp = myObj.stats[5].base_stat,
      this.attack = myObj.stats[4].base_stat,
      this.defense = myObj.stats[1].base_stat,
      this.ability = myObj.abilities[0].ability.name,
    );
    console.log(pokemon);
trainers.jigsaw.push(pokemon);
console.log(trainers);
}
}
xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/charmander/4", true);
console.log(xhttp);
xhttp.send();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    pokemon = new Pokemon(
      this.name = myObj.name,
      this.hp = myObj.stats[5].base_stat,
      this.attack = myObj.stats[4].base_stat,
      this.defense = myObj.stats[1].base_stat,
      this.ability = myObj.abilities[0].ability.name,
    );
    console.log(pokemon);
trainers.jigsaw.push(pokemon);
console.log(trainers);
}
}
xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Mantyke/Mantyke", true);
console.log(xhttp);
xhttp.send();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    pokemon = new Pokemon(
      this.name = myObj.name,
      this.hp = myObj.stats[5].base_stat,
      this.attack = myObj.stats[4].base_stat,
      this.defense = myObj.stats[1].base_stat,
      this.ability = myObj.abilities[0].ability.name,
    );
    console.log(pokemon);
trainers.jigsaw.push(pokemon);
console.log(trainers);
}
}
xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Palossand/Palossand.txt", true);
console.log(xhttp);
xhttp.send();
}
////////////////////
function pikachuDoc() {
      document.getElementById("displayStats").innerHTML = (`NAME: ${trainers.kramer[0].name
}<br>
            HP: ${trainers.kramer[0].hp}<br>
            ATTACK: ${trainers.kramer[0].attack}<br>
    DEFENSE: ${trainers.kramer[0].defense}<br>
    ABILITY: ${trainers.kramer[0].abilities}<p>Pikachu was born a happy and careless soul. Pikachu loved everyone and tried to befriend everyone. However, one night he met Eevee who started playing and Eevee threw Pikachu into the vat of acids at Ace chemicals. Ever since that day he has been looking for revenge.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png`);
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("kramer");
}




/* Eevee
================================= */




function eeveeDoc() {
      document.getElementById("displayStats").innerHTML = (`NAME: ${trainers.kramer[1].name}<br>
              HP: ${trainers.kramer[1].hp}<br>
              ATTACK: ${trainers.kramer[1].attack}<br>
      DEFENSE: ${trainers.kramer[1].defense}<br>
      ABILITY: ${trainers.kramer[1].abilities}<p>Eevee was born in an abandoned egg down by the sewer where the chemicals are rushing down the stream. They are causing Eevee to be in a lot of pain and he will wait for his next victim.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("kramer");
}



/* Mewtwo
================================= */




function mewDoc() {
      document.getElementById("displayStats").innerHTML = (`NAME: ${trainers.kramer[2].name}<br>
                HP: ${trainers.kramer[2].hp}<br>
                ATTACK: ${trainers.kramer[2].attack}<br>
        DEFENSE: ${trainers.kramer[2].defense}<br>
        ABILITY: ${trainers.kramer[2].abilities}<p>Mewtwo was born in a place far away. He was born a machine.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("kramer");
}



/* Charmander
================================= */




function charmDoc() {
      document.getElementById("displayStats").innerHTML = (`NAME: ${trainers.kramer[3].name}<br>
                  HP: ${trainers.kramer[3].hp}<br>
                  ATTACK: ${trainers.kramer[3].attack}<br>
          DEFENSE: ${trainers.kramer[3].defense}<br>
          ABILITY: ${trainers.kramer[3].abilities}<p>Charmander was born into the darkness and molded by the blackness of it all. He didn't see the light until he was already a man, by then it was nothing to him but blindness!. Charmander is a viscious murderer who waits underneith the rock to strike.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("kramer");
}

function dittoDoc() {
      document.getElementById("displayStats").innerHTML = (`NAME: ${trainers.jigsaw[0].name}<br>
                  HP: ${trainers.jigsaw[0].hp}<br>
                  ATTACK: ${trainers.jigsaw[0].attack}<br>
          DEFENSE: ${trainers.jigsaw[0].defense}<br>
          ABILITY: ${trainers.jigsaw[0].abilities}<p>Ditto is a real creep, it could be right behind you and you wouldn't even know.`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("saw");
}

function mantykeDoc() {
      document.getElementById("displayStats").innerHTML = (`NAME: ${trainers.jigsaw[1].name}<br>
                  HP: ${trainers.jigsaw[1].hp}<br>
                  ATTACK: ${trainers.jigsaw[1].attack}<br>
          DEFENSE: ${trainers.jigsaw[1].defense}<br>
          ABILITY: ${trainers.jigsaw[1].abilities}<p>It uses its flaps to do murders, somehow.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/458.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("saw");
}

function paloDoc() {
      document.getElementById("displayStats").innerHTML = (`NAME: ${trainers.jigsaw[2].name}<br>
                  HP: ${trainers.jigsaw[2].hp}<br>
                  ATTACK: ${trainers.jigsaw[2].attack}<br>
          DEFENSE: ${trainers.jigsaw[2].defense}<br>
          ABILITY: ${trainers.jigsaw[2].abilities}<p>This is some kind of sand castle that eats people. I didn't even make that up, that's all Nintendo.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/770.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("saw");
}


callAPI();
