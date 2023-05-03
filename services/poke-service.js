class PokeService{

    static PAGE_COUNT = 20;

    static BASE_URL = 'https://pokeapi.co/api/v2/'

    static getPage(index){
        const url = this.BASE_URL + 'pokemon?limit=' 
                                  + this.PAGE_COUNT
                                  + '&offset='
                                  + (this.PAGE_COUNT * index);
        return fetch(url)
            .then(resp => resp.json())
            .then(pokemonPage => this.getDetails(pokemonPage.results));
    }

    static getDetails(pokemonNames) {
        const requests = [];
        console.log(pokemonNames);
        for (const pokemon of pokemonNames) {
            console.log(pokemon);
            const name = pokemon.name;
            const url = this.BASE_URL + 'pokemon/' + name;
            const request = fetch(url)
                .then(resp => resp.json())
                .then(pokemon => {
                    console.log('poke' ,pokemon);
                    this.getSpecies(pokemon);
                    return pokemon;
                });
            console.log('descr ' ,pokemon.description);
            requests.push(request);
        }
        return Promise.all(requests);
    }

    static getSpecies(pokemon)
    {
        const url = pokemon.species.url;
        fetch(url).then(resp=>resp.json()).then(specie=>{
            pokemon.description=specie.flavor_text_entries[0].flavor_text
        });
        //return pokemon
    }



}