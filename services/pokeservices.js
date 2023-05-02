class Pokeservice{
    
    static PAGE_LIMIT = 20;

    static POKEMON_NUMBER = 1281;

    static PAGE_COUNT = Math.ceil(this.POKEMON_NUMBER / this.PAGE_LIMIT);

    static BASE_URL = 'https://pokeapi.co/api/v2/';
    
    static getPage(index){
        const url = this.BASE_URL   +'pokemon?limit=' 
                                    + this.PAGE_LIMIT 
                                    + '&offset='
                                    + this.PAGE_LIMIT * index;
        return fetch(url).then(resp=>resp.json()).then(pokemonPage=> this.getDetails(pokemonPage.results));
    }

    static getDetails(pokemonNames){
        console.log('pap');
        const requests =[];
        for (let i = 0; i < pokemonNames.length; i++) {
            const pokemon = pokemonNames[i];
            const name= pokemon.name;
            const url =  this.BASE_URL + 'pokemon/'+name;
            const request = fetch(url).then(resp => resp.json()).then(pokemon => {
                console.log('pap2');
                this.getSpecies(pokemon);
            });
            requests.push(request);
        }
        return Promise.all(requests);
    }

    static getSpecies(pokemon)
    {
        console.log('pippo')
        const url = pokemon.species.url;
        fetch(url).then(resp=>resp.json()).then(specie=>{
            console.log('pippo2')
            pokemon.description=specie.flavor_text_entries[0].flavor_text
        });
        return pokemon
    }


}