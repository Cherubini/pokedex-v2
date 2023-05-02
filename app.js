

let actualPageIndex

getNextPage();

function getNextPage() {
    if (actualPageIndex === undefined) {
        actualPageIndex = 0;
    }    else {
        actualPageIndex++;
    }
    PokeService.getPage(actualPageIndex).then(pokemons  =>{
        displayPokemons(pokemons);
    })
}

function getPreviousPage() {
    actualPageIndex--;
    if(actualPageIndex<0)
        actualPageIndex= Pokeservice.PAGE_COUNT - 1;
    PokeService.getPage(actualPageIndex).then(pokemons =>{
        displayPokemons(pokemons)})
    actualPageindex--;
    PokeService.getPage(actualPageindex).then(pokemons => {
        displayPokemons(pokemons);
    })
}

function displayPokemons(pokemons){

    console.log('madonna');
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
            ${pokemon.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('')}
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
        let abilitiesHtml='';
        for (const object of pokemon.abilities) {
            abilitiesHtml += `<li>${object.ability.name}</li>`            
        }
        return abilitiesHtml;
    }

                // <div class="spacer"></div> row 57
                //${createPokemonHistory(pokemon)}row 42
function createPokemonHistory(pokemon) {
    PokeService.getSpecies(pokemon.species.url).then(poke=> createPokeHistory(poke))
    
    }

function createPokeHistory(poke){
    let str=poke.flavor_text_entries[0].flavor_text;
    return str;
    
    }

//poke.flavor_text_entries[0].flavor_text

