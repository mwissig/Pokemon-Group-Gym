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



function pikachuDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
      pikachu = new Pokemon(
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(pikachu);
trainers.kramer.push(pikachu);
console.log(trainers);
      document.getElementById("displayStats").innerHTML = (`NAME: ${pikachu.name}<br>
            HP: ${pikachu.hp}<br>
            ATTACK: ${pikachu.attack}<br>
    DEFENSE: ${pikachu.defense}<br>
    ABILITY: ${pikachu.abilities}<p>Pikachu was born a happy and careless soul. Pikachu loved everyone and tried to befriend everyone. However, one night he met Eevee who started playing and Eevee threw Pikachu into the vat of acids at Ace chemicals. Ever since that day he has been looking for revenge.</p>`);

      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png`);
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("kramer");
    }
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/pikachu/25", true);
  console.log(xhttp);
  xhttp.send();
}




/* Eevee
================================= */




function eeveeDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
      var eevee = new Pokemon(
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(eevee);
      trainers.kramer.push(eevee);
      console.log(trainers);
      document.getElementById("displayStats").innerHTML = (`NAME: ${eevee.name}<br>
              HP: ${eevee.hp}<br>
              ATTACK: ${eevee.attack}<br>
      DEFENSE: ${eevee.defense}<br>
      ABILITY: ${eevee.abilities}<p>Eevee was born in an abandoned egg down by the sewer where the chemicals are rushing down the stream. They are causing Eevee to be in a lot of pain and he will wait for his next victim.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("kramer");
    }
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/eevee/133", true);
  console.log(xhttp);
  xhttp.send();
}



/* Mewtwo
================================= */




function mewDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
      var mewtwo = new Pokemon(
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(mewtwo);
      trainers.kramer.push(mewtwo);
      console.log(trainers);
      document.getElementById("displayStats").innerHTML = (`NAME: ${mewtwo.name}<br>
                HP: ${mewtwo.hp}<br>
                ATTACK: ${mewtwo.attack}<br>
        DEFENSE: ${mewtwo.defense}<br>
        ABILITY: ${mewtwo.abilities}<p>Mewtwo was born in a place far away. He was born a machine.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("kramer");
    }
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/mewtwo/150", true);
  console.log(xhttp);
  xhttp.send();
}



/* Charmander
================================= */




function charmDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
      var charmander = new Pokemon(
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(charmander);
      trainers.kramer.push(charmander);
      console.log(trainers);
      document.getElementById("displayStats").innerHTML = (`NAME: ${charmander.name}<br>
                  HP: ${charmander.hp}<br>
                  ATTACK: ${charmander.attack}<br>
          DEFENSE: ${charmander.defense}<br>
          ABILITY: ${charmander.abilities}<p>Charmander was born into the darkness and molded by the blackness of it all. He didn't see the light until he was already a man, by then it was nothing to him but blindness!. Charmander is a viscious murderer who waits underneith the rock to strike.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("kramer");
    }
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/charmander/4", true);
  console.log(xhttp);
  xhttp.send();
}

function dittoDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
      var ditto = new Pokemon(
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(ditto);
      trainers.jigsaw.push(ditto);
      console.log(trainers);
      document.getElementById("displayStats").innerHTML = (`NAME: ${ditto.name}<br>
                  HP: ${ditto.hp}<br>
                  ATTACK: ${ditto.attack}<br>
          DEFENSE: ${ditto.defense}<br>
          ABILITY: ${ditto.abilities}<p>Ditto is a real creep, it could be right behind you and you wouldn't even know.`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("saw");
    }
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Ditto/132", true);
  console.log(xhttp);
  xhttp.send();
}

function mantykeDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);
      var mantyke = new Pokemon(
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(mantyke);
      trainers.jigsaw.push(mantyke);
      console.log(trainers);
      document.getElementById("displayStats").innerHTML = (`NAME: ${mantyke.name}<br>
                  HP: ${mantyke.hp}<br>
                  ATTACK: ${mantyke.attack}<br>
          DEFENSE: ${mantyke.defense}<br>
          ABILITY: ${mantyke.abilities}<p>It uses its flaps to do murders, somehow.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/458.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("saw");
    }
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Mantyke/Mantyke", true);
  console.log(xhttp);
  xhttp.send();
}

function paloDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var palo = new Pokemon(
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
        this.ability = myObj.abilities[0].ability.name,
      );
      console.log(palo);
      trainers.jigsaw.push(palo);
      console.log(trainers);
      document.getElementById("displayStats").innerHTML = (`NAME: ${palo.name}<br>
                  HP: ${palo.hp}<br>
                  ATTACK: ${palo.attack}<br>
          DEFENSE: ${palo.defense}<br>
          ABILITY: ${palo.abilities}<p>This is some kind of sand castle that eats people. I didn't even make that up, that's all Nintendo.</p>`);
      document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/770.png`)
      document.getElementById('character').className = "";
      document.getElementById('character').classList.add("animated");
      document.getElementById('character').classList.add("slideInUp");
      document.getElementById('character').classList.add("saw");
    }
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/mwissig/pokegym/master/Palossand/Palossand.txt", true);
  console.log(xhttp);
  xhttp.send();
}
