<<<<<<< HEAD
let actualPageIndex
=======
console.log('eccolo!!!')

let actualPageindex
>>>>>>> 6e2baf46c1bf941f68417550c873bf12b4cad8e8

getNextPage();

function getNextPage() {
<<<<<<< HEAD
    if (actualPageIndex === undefined) {
        actualPageIndex = 0;
    }    else {
        actualPageIndex++;
    }
    Pokeservice.getPage(actualPageIndex).then(pokemons  =>{
        displayPokemons(pokemons)
=======
    if (actualPageindex === undefined) {
        actualPageindex = 0;
    } else {
        actualPageindex++;
    }
    PokeService.getPage(actualPageindex).then(pokemons => {
        displayPokemons(pokemons);
>>>>>>> 6e2baf46c1bf941f68417550c873bf12b4cad8e8
    })
}

function getPreviousPage() {
<<<<<<< HEAD
    actualPageIndex--;
    if(actualPageIndex<0)
        actualPageIndex= Pokeservice.PAGE_COUNT - 1;
    Pokeservice.getPage(actualPageIndex).then(pokemons =>{
        displayPokemons(pokemons)
=======
    actualPageindex--;
    PokeService.getPage(actualPageindex).then(pokemons => {
        displayPokemons(pokemons);
>>>>>>> 6e2baf46c1bf941f68417550c873bf12b4cad8e8
    })
}

function displayPokemons(pokemons){
<<<<<<< HEAD
    const pokemonContainer= document.getElementById('pokemon-container');
    pokemonContainer.innerHTML='';



    for (const pokemon of pokemons) {

        pokemonContainer.innerHTML+=
        `
        <details>
        <summary>
            <span>${pokemon.id}</span>
            <img class="list-img" src="${pokemon.sprites.front_default}" alt=""> 
            <span> ${pokemon.name}</span>
            <div class="spacer"></div>
                ${pokemon.types.map(object => `<span class='type'>  ${object.type.name}</span>`)}                           
        </summary>
        <div>
            <ul>
                ${createAbilitiesList(pokemon)}
            </ul>
        </div>
        <p>questo è bulbasaur</p>
    </details>
    `        
    }

    function createAbilitiesList(pokemon){
        let abilitiesHtml='';
        for (const object of pokemon.abilities) {
            abilitiesHtml += `<li>${object.ability.name}</li>`            
        }
        return abilitiesHtml;
    }
=======
    const pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = '';

    for (const pokemon of pokemons) {
        console.log(pokemon)

        pokemonContainer.innerHTML += `
        <details>
            <summary>
                <span>${pokemon.id}</span>
                <img class="list-img" src="${pokemon.sprites.front_default}" alt="">
                <span>${pokemon.name}</span>
                <div class="spacer"></div>
                ${pokemon.types.map(obj => `<span class="type">${obj.type.name}</span>`).join('')}
            </summary>
            <div>
                <ul>
                ${createAbilitiesList(pokemon)}
                </ul>
            </div>
        </details>
        `
    }
}

function createAbilitiesList(pokemon){
    let abilitiesHtml = '';
    for (const object of pokemon.abilities) {
        abilitiesHtml += `<li>${object.ability.name}</li>`
    }
    return abilitiesHtml;
>>>>>>> 6e2baf46c1bf941f68417550c873bf12b4cad8e8
}