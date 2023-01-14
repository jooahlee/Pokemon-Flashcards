/* Alerts and prompts for Number of Pokemons */
function howmanypokemonsalert()
  {
    var username = document.querySelector("#username").value;
    var usernumberofpokemons = document.querySelector("#usernumberofpokemons").value;
  if(usernumberofpokemons > 8)
    {
    alert("Congrats! You have collected " + usernumberofpokemons + " Pokemons!!! You're the current highest Pokemon collector! You were lucky this time " + username + "...");
    }
    else
    {
    alert("Awwww thats sad... I know that you'll get better next time " + username + "!"); 
    }
  }

/* Play Sound with Button */
function media()
{
    var audio = new Audio("assets/pokemonsound.m4r");
  console.log("Playing")
  audio.play();
}
      function showEevee()
      {
        var imgshow = document.querySelector("#eevee");
        var btntext = document.querySelector("#eeveebtn");
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible";
        btntext.innerHTML = `Hide Eevee`
      }
      else
      {      
        imgshow.style.visibility = "hidden"
        btntext.innerHTML =`Show Eevee`
      }
    }


      function showCharizard()
      {
        var imgshow = document.querySelector("#charizard");
        var btntext = document.querySelector("#charizardbtn");
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible"
        btntext.innerHTML = `Hide Charizard`
      }
      else
      {      
        imgshow.style.visibility = "hidden"
        btntext.innerHTML = `Show Charizard`
      }
    }

      function showGardevoir()
      {
        var imgshow = document.querySelector("#gardevoir");
        var btntext = document.querySelector("#gardevoirbtn");
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible"
        btntext.innerHTML = `Hide Gardevoir`
      }
      else
      {      
        imgshow.style.visibility = "hidden"
        btntext.innerHTML = `Show Gardevoir`
      }
    }

      function showPikachu()
      {
        var imgshow = document.querySelector("#pikachu");
        var btntext = document.querySelector("#pikachubtn");
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible"
        btntext.innerHTML = `Hide Pikachu`
      }
      else
      {      
        imgshow.style.visibility = "hidden"
        btntext.innerHTML = `Show Pikachu`
      }
    }

      function showFlareon()
      {
        var imgshow = document.querySelector("#flareon");
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible"
        btntext.innerHTML = `Hide Flareon`
      }
      else
      {      
        imgshow.style.visibility = "hidden"
        btntext.innerHTML = `Show Flareon`
      }
    }






function showc()
  {
    var imgshow = document.querySelectorAll(".cpokemon");
    var btntext = document.querySelector("#cpokemonbtn");
    for(var i=0; i<imgshow.length; i++)
      {
        if (imgshow[i].style.visibility == "hidden") {
          imgshow[i].style.visibility = "visible";
          btntext.innerHTML = "Hide Pokemons";
        } else {
          imgshow[i].style.visibility = "hidden";
          btntext.innerHTML = `Show Pokemons starting with "C"`;
        }
      }
  }
      
  // Flashcard Page Variables
var defshow = document.querySelector("#flashcard-definition");
var termshow = document.querySelector("#flashcard-term");

  // Flashcard Content
let flashcards = {
  Pikachu: "Electric type Pokémon introduced in Generation 1 . It is known as the Mouse Pokémon", 
  Squirtle: "Water type Pokémon introduced in Generation 1 . It is known as the Tiny Turtle Pokémon", 
  Gardevoir: "Psychic/Fairy type Pokémon introduced in Generation  It is known as the Embrace Pokémon",
  Diglett: "Ground type Pokémon introduced in Generation 1 . It is known as the Mole Pokémon",
  Charizard:  "Fire/Flying type Pokémon introduced in Generation 1 . It is known as the Flame Pokémon",
  Piplup: "Water type Pokémon introduced in Generation 4. It is known as the Penguin Pokémon",
  Mew: "Psychic type Pokémon introduced in Generation 1 . It is known as the New Species Pokémon",
  Staraptor: "Normal/Flying type Pokémon introduced in Generation 4. It is known as the Predator Pokémon",
  Wyrdeer: "Normal/Psychic type Pokémon introduced in Generation 8. It is known as the Big Horn Pokémon",
  Gyarados: "Water/Flying type Pokémon introduced in Generation 1. It is known as the Atrocious Pokémon",
  Lopunny: "Normal type Pokémon introduced in Generation 4. It is known as the Rabbit Pokémon",
  Onix: "Rock/Ground type Pokémon introduced in Generation 1. It is known as the Rock Snake Pokémon",
  Togekiss: "Fairy/Flying type Pokémon introduced in Generation 4. It is known as the Jubilee Pokémon",
  Ninetales: "Fire type Pokémon introduced in Generation 1. It is known as the Fox Pokémon",
  Abomasnow: "Grass/Ice type Pokémon introduced in Generation 4. It is known as the Frost Tree Pokémon",
  Lucario: "Fighting/Steel type Pokémon introduced in Generation 4. It is known as the Aura Pokémon",
  Chimecho: "Psychic type Pokémon introduced in Generation 3. It is known as the Wind Chime Pokémon",
  Gliscor: "Ground/Flying type Pokémon introduced in Generation 4. It is known as the Fang Scorp Pokémon",
  Mamoswine: "Ice/Ground type Pokémon introduced in Generation 4. It is known as the Twin Tusk Pokémon",
  Gengar: "Ghost/Poison type Pokémon introduced in Generation 1. It is known as the Shadow Pokémon",
}
 console.log(flashcards)
//Convert the object into an array (key, value) pair
data = Object.entries(flashcards);

function getRandom()
{
  let randomterm = data[Math.floor(Math.random() * data.length)];
  //Math.random() gives a random value between 0 and 1
  termshow.innerHTML = `<h2>${randomterm[0]}</h2>`;
  console.log(randomterm[1])
  defshow.innerHTML = `<p>${randomterm[1]}</p>`;
}

function showDefinition()
      {
        var imgshow = document.querySelector("#flashcard-definition");
        var btntext = document.querySelector("#flash-def-btn");
        
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible"
        btntext.innerHTML = `Hide Definition`
      }
      else
      {      
        imgshow.style.visibility = "hidden"
        btntext.innerHTML = `Show Definition`
      }
    }