fetchData();
async function fetchData() {
    try {
        const pokemonname = document.getElementById("pokename").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
        if (!response.ok) {
            console.log("Entered pokemon is not present")
        }
        const data = await response.json();
        console.log(data);
        const pokemonsprites  =data.sprites.front_default;
        const imgelement = document.getElementById("pokemonsprite")
        imgelement.src = pokemonsprites;
        imgelement.style.display = "block";
    }
    catch (error) {
        console.log(error);
    }
}