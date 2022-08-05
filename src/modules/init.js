const container = document.querySelector(".main__container");

async function renderPokemons() {
    let pokemons = pokemonList;
    let html = "";
    pokemons.forEach((pokemon) => {
    let htmlSegment = `<div class=" ${pokemon.popupId} pokemon__card ${pokemon.type.toLowerCase()} ${pokemon.secondType.toLowerCase()} ">
                            <div class="img__background">
                            <img class="pokemon__img" src=${pokemon.img}>
                            </div>
                            <p class="pokemon__id">${pokemon.id}</p>
                            <p class="pokemon__name">${pokemon.name}</p>
                            <div class="types">
                            <p class="pokemon__type  ${pokemon.type}">${pokemon.type}</p>
                            <p class="second__type ${pokemon.secondType}">${pokemon.secondType}</p>
                            </div>
                            <p class="description">${pokemon.description}</p>
                            </div> `;
    html += htmlSegment;
  });
  container.innerHTML = html;
}


let pokemonList = [
    {
        "popupId": "0",
        "name": "Bulbasaur",
        "id": "№001",
        "type": "Grass",
        "secondType":"Poison",
        "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        "img":"./src/img/pokemons/001.png"
    },
    {
        "popupId": "1",
        "name": "Ivysaur",
        "id": "№002",
        "type": "Grass",
        "secondType":"Poison",
        "description": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        "img":"./src/img/pokemons/002.png"
    },
    {
        "popupId": "2",
        "name": "Venusaur",
        "id": "№003",
        "type": "Grass",
        "secondType":"Poison",
        "description": "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        "img":"./src/img/pokemons/003.png"
    },
    {
        "popupId": "3",
        "name": "Charmander",
        "id": "№004",
        "type": "Fire",
        "secondType":"",
        "description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail",
        "img":"./src/img/pokemons/004.png"
    },
    {
        "popupId": "4",
        "name": "Charmeleon",
        "id": "№005",
        "type": "Fire",
        "secondType":"",
        "description": "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
        "img":"./src/img/pokemons/005.png"
    },
    {
        "popupId": "5",
        "name": "Charizard",
        "id": "№006",
        "type": "Fire",
        "secondType":"Flying",
        "description": "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        "img":"./src/img/pokemons/006.png"
    },
    {
        "popupId": "6",
        "name": "Squirtle",
        "id": "№007",
        "type": "Water",
        "secondType":"",
        "description": "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        "img":"./src/img/pokemons/007.png"
    },
    {
        "popupId": "7",
        "name": "Wartortle",
        "id": "№008",
        "type": "Water",
        "secondType":"",
        "description": "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        "img":"./src/img/pokemons/008.png"
    },
    {
        "popupId": "8",
        "name": "Blastoise",
        "id": "№009",
        "type": "Water",
        "secondType":"",
        "description": "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
        "img":"./src/img/pokemons/009.png"
    },
    {
        "popupId": "9",
        "name": "Caterpie",
        "id": "№010",
        "type": "Bug",
        "secondType":"",
        "description": "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        "img":"./src/img/pokemons/010.png"
    },
    {
        "popupId": "10",
        "name": "Metapod",
        "id": "№011",
        "type": "Bug",
        "secondType":"",
        "description": "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        "img":"./src/img/pokemons/011.png"
    },
    {
        "popupId": "11",
        "name": "Butterfree",
        "id": "№012",
        "type": "Bug",
        "secondType":"Flying",
        "description": "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        "img":"./src/img/pokemons/012.png"
    },
    {
        "popupId": "12",
        "name": "Weedle",
        "id": "№013",
        "type": "Bug",
        "secondType":"Poison",
        "description": "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
        "img":"./src/img/pokemons/013.png"
    },
    {
        "popupId": "13",
        "name": "Kakuna",
        "id": "№014",
        "type": "Bug",
        "secondType":"Poison",
        "description": "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
        "img":"./src/img/pokemons/014.png"
    },
    {
        "popupId": "14",
        "name": "Beedrill",
        "id": "№015",
        "type": "Bug",
        "secondType":"Poison",
        "description": "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        "img":"./src/img/pokemons/015.png"
    },
    {
        "popupId": "15",
        "name": "Pidgey",
        "id": "№016",
        "type": "Normal",
        "secondType":"Flying",
        "description": "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        "img":"./src/img/pokemons/016.png"
    },
    {
        "popupId": "16",
        "name": "Pidgeotto",
        "id": "№017",
        "type": "Normal",
        "secondType":"Flying",
        "description": "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
        "img":"./src/img/pokemons/017.png"
    },
    {
        "popupId": "17",
        "name": "Pidgeot",
        "id": "№018",
        "type": "Normal",
        "secondType":"Flying",
        "description": "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        "img":"./src/img/pokemons/018.png"
    },
    {
        "popupId": "18",
        "name": "Rattata",
        "id": "№019",
        "type": "Normal",
        "secondType":"",
        "description": "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
        "img":"./src/img/pokemons/019.png"
    },
    {
        "popupId": "19",
        "name": "Raticate",
        "id": "№020",
        "type": "Normal",
        "secondType":"",
        "description": "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
        "img":"./src/img/pokemons/020.png"
    },
    {
        "popupId": "20",
        "name": "Spearow",
        "id": "№021",
        "type": "Normal",
        "secondType":"Flying",
        "description": "Inept at flying high. However, it can fly around very fast to protect its territory.",
        "img":"./src/img/pokemons/021.png"
    },
    {
        "popupId": "21",
        "name": "Fearow",
        "id": "№022",
        "type": "Normal",
        "secondType":"Flying",
        "description": "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
        "img":"./src/img/pokemons/022.png"
    },
    {
        "popupId": "22",
        "name": "Ekans",
        "id": "№023",
        "type": "Poison",
        "secondType":"",
        "description": "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest",
        "img":"./src/img/pokemons/023.png"
    },
    {
        "popupId": "23",
        "name": "Arbok",
        "id": "№024",
        "type": "Poison",
        "secondType":"",
        "description": "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
        "img":"./src/img/pokemons/024.png"
    },
    {
        "popupId": "24",
        "name": "Pikachu",
        "id": "№025",
        "type": "Electric",
        "secondType":"",
        "description": "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        "img":"./src/img/pokemons/025.png"
    },
    {
        "popupId": "25",
        "name": "Raichu",
        "id": "№026",
        "type": "Electric",
        "secondType":"",
        "description": "Its long tail serves as a ground to protect itself from its own high-voltage power.",
        "img":"./src/img/pokemons/026.png"
    },
    {
        "popupId": "26",
        "name": "Sandshrew",
        "id": "№027",
        "type": "Ground",
        "secondType":"",
        "description": "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.",
        "img":"./src/img/pokemons/027.png"
    },
    {
        "popupId": "27",
        "name": "Sandslash",
        "id": "№028",
        "type": "Ground",
        "secondType":"",
        "description": "The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.",
        "img":"./src/img/pokemons/028.png"
    },
    {
        "popupId": "28",
        "name": "Nidoran♀",
        "id": "№029",
        "type": "Poison",
        "secondType":"",
        "description": "Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.",
        "img":"./src/img/pokemons/029.png"
    },
    {
        "popupId": "29",
        "name": "Nidorina",
        "id": "№030",
        "type": "Poison",
        "secondType":"",
        "description": "The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.",
        "img":"./src/img/pokemons/030.png"
    },
    {
        "popupId": "30",
        "name": "Nidoqueen",
        "id": "№031",
        "type": "Poison",
        "secondType":"Ground",
        "description": "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.",
        "img":"./src/img/pokemons/031.png"
    },
    {
        "popupId": "31",
        "name": "Nidoran♂",
        "id": "№032",
        "type": "Poison",
        "secondType":"",
        "description": "The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.",
        "img":"./src/img/pokemons/032.png"
    },
    {
        "popupId": "32",
        "name": "Nidorino",
        "id": "№033",
        "type": "Poison",
        "secondType":"",
        "description": "With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.",
        "img":"./src/img/pokemons/033.png"
    },
    {
        "popupId": "33",
        "name": "Nidoking",
        "id": "№034",
        "type": "Poison",
        "secondType":"Ground",
        "description": "When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.",
        "img":"./src/img/pokemons/034.png"
    },
    {
        "popupId": "34",
        "name": "Clefairy",
        "id": "№035",
        "type": "Fairy",
        "secondType":"",
        "description": "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.",
        "img":"./src/img/pokemons/035.png"
    },
    {
        "popupId": "35",
        "name": "Clefable",
        "id": "№036",
        "type": "Fairy",
        "secondType":"",
        "description": "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.",
        "img":"./src/img/pokemons/036.png"
    },
    {
        "popupId": "36",
        "name": "Vulpix",
        "id": "№037",
        "type": "Fire",
        "secondType":"",
        "description": "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
        "img":"./src/img/pokemons/037.png"
    },
    {
        "popupId": "37",
        "name": "Ninetales",
        "id": "№038",
        "type": "Fire",
        "secondType":"",
        "description": "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
        "img":"./src/img/pokemons/038.png"
    },
    {
        "popupId": "38",
        "name": "Jigglypuff",
        "id": "№039",
        "type": "Normal",
        "secondType":"Fairy",
        "description": "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.",
        "img":"./src/img/pokemons/039.png"
    },
    {
        "popupId": "39",
        "name": "Wigglytuff",
        "id": "№040",
        "type": "Normal",
        "secondType":"Fairy",
        "description": "The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them.",
        "img":"./src/img/pokemons/040.png"
    },
    {
        "popupId": "40",
        "name": "Zubat",
        "id": "№041",
        "type": "Poison",
        "secondType":"Flying",
        "description": "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
        "img":"./src/img/pokemons/041.png"
    },
    {
        "popupId": "41",
        "name": "Golbat",
        "id": "№042",
        "type": "Poison",
        "secondType":"Flying",
        "description": "It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.",
        "img":"./src/img/pokemons/042.png"
    },
    {
        "popupId": "42",
        "name": "Oddish",
        "id": "№043",
        "type": "Grass",
        "secondType":"Poison",
        "description": "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
        "img":"./src/img/pokemons/043.png"
    },
    {
        "popupId": "43",
        "name": "Gloom",
        "id": "№044",
        "type": "Grass",
        "secondType":"Poison",
        "description": "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
        "img":"./src/img/pokemons/044.png"
    },
    {
        "popupId": "44",
        "name": "Vileplume",
        "id": "№045",
        "type": "Grass",
        "secondType":"Poison",
        "description": "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
        "img":"./src/img/pokemons/045.png"
    },
    {
        "popupId": "45",
        "name": "Paras",
        "id": "№046",
        "type": "Bug",
        "secondType":"Grass",
        "description": "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
        "img":"./src/img/pokemons/046.png"
    },
    {
        "popupId": "46",
        "name": "Parasect",
        "id": "№047",
        "type": "Bug",
        "secondType":"Grass",
        "description": "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.",
        "img":"./src/img/pokemons/047.png"
    },
    {
        "popupId": "47",
        "name": "Venonat",
        "id": "№048",
        "type": "Bug",
        "secondType":"Poison",
        "description": "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
        "img":"./src/img/pokemons/048.png"
    },
    {
        "popupId": "48",
        "name": "Venomoth",
        "id": "№049",
        "type": "Bug",
        "secondType":"Poison",
        "description": "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.",
        "img":"./src/img/pokemons/049.png"
    },
    {
        "popupId": "49",
        "name": "Diglett",
        "id": "№050",
        "type": "Ground",
        "secondType":"",
        "description": "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.",
        "img":"./src/img/pokemons/050.png"
    }
]


/*//async function getPokemons() {
  let url = "./src/db/pokemons.JSON";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
/*///}


renderPokemons();

let names = document.querySelectorAll('.pokemon__name');
let listNames = document.querySelector('.list__names')


let pokeNames = [];

function getNames() {
for(let i = 0;i< names.length;i++) {
    pokeNames.push(names[i].outerText);
}
}
getNames()

let html = ''
pokeNames.forEach(elem => {
    let inHtml = `<li class="list__item hiden click">${elem}</li>`
    html +=inHtml;
    listNames.innerHTML = html;
})


