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
        const requests =[];
        for (let i = 0; i < pokemonNames.length; i++) {
            const pokemon = pokemonNames[i];
            const name= pokemon.name;
            const url =  this.BASE_URL + 'pokemon/'+name;
            const request = fetch(url).then(resp=>resp.json());
            requests.push(request);
        }
        return Promise.all(requests);
    }

    static getSpecies(pokemonUrl)
    {
        return fetch(pokemonUrl).then(resp=resp.json())
    }


}