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
        for (const pokemon of pokemonNames) {
            const name = pokemon.name;
            const url = this.BASE_URL + 'pokemon/' + name;
            const request = fetch(url).then(resp => resp.json()).then(pokemon => {
                console.log('pap2');
                this.getSpecies(pokemon);
                return pokemon;
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