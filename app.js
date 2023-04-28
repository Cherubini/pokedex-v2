let actualPageIndex

getNextPage();

function getNextPage() {
    if (actualPageIndex === undefined) {
        actualPageIndex = 0;
    }    else {
        actualPageIndex++;
    }
    Pokeservice.getPage(actualPageIndex).then(pokemons  =>{
        displayPokemons(pokemons)
    })
}

function getPreviousPage() {
    actualPageIndex--;
    if(actualPageIndex<0)
        actualPageIndex= Pokeservice.PAGE_COUNT - 1;
    Pokeservice.getPage(actualPageIndex).then(pokemons =>{
        displayPokemons(pokemons)
    })
}

function displayPokemons(pokemons){
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
}