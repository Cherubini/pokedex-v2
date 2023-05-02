

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
}

function displayPokemons(pokemons){

    const pokemonContainer= document.getElementById('pokemon-container');
    pokemonContainer.innerHTML='';


    for (const pokemon of pokemons) {
        console.log(pokemon);
        console.log(pokemon.description);
        pokemonContainer.innerHTML+=
        `
        <details>
        <summary>
            <span>N°${pokemon.id}</span>
            <img class="list-img" src="${pokemon.sprites.front_default}" alt=""> 
            <span> ${pokemon.name}</span>
            ${pokemon.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('')}
        </summary>
        <div>
            <ul>
                ${createAbilitiesList(pokemon)}
            </ul>
                ${pokemon.description}
            <p class='stats'> ${createStatisticList(pokemon)} </p>
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

    function createStatisticList(pokemon) {
        let statistics='';
        for (const object of pokemon.stats) {
            statistics+= object.stat.name +': '+object.base_stat+'<br>'
        }
        return statistics;
    }

                // <div class="spacer"></div> row 57
                //${createPokemonHistory(pokemon)}row 42
function getPokemonHistory(pokemon) {
    PokeService.getSpecies(pokemon.species.url).then(pokemon=> {
       let story=`<p> ${pokemon.flavor_text_entries[0].flavor_text} </p>`;
        return story;
        })
    
    }

//poke.flavor_text_entries[0].flavor_text

