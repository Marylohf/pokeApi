let namePokemon = document.getElementById('nombre')
let imgPokemon = document.getElementById('foto')
let namePerro = document.getElementById('namePerro')
let imgPerro = document.getElementById('imgPerro')

const pokeapp = async () => {

    let random = Math.floor(Math.random() * (300 - 150)) + 150
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    try {
        let getData = await fetch(`${baseUrl}/${random}`)

        const data = await getData.json()

        imgPokemon.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        namePokemon.innerHTML = data.name

        console.log(data)
        
    } catch (error) {
        console.log(error)
    }


}

const perroapp = async () => {

    let baseUrl = 'https://dog.ceo/api/breeds/'

    try {
        let raza = await fetch(`${baseUrl}list/all`)
        const dataRaza = await raza.json()
    
        console.log(dataRaza.message);

        let random = Math.floor(Math.random() * (0 - 50)) + 50
        let objData = Object.keys(dataRaza.message)[random].toLowerCase()

        let randomImg = await fetch(`https://dog.ceo/api/breed/${objData}/images/random`)

        const dataImg = await randomImg.json()

        console.log(objData)
        console.log(dataImg)

        imgPerro.src = dataImg.message
        namePerro.innerHTML = objData
    } catch (error) {
        console.log(error);
    }



}


pokeapp();
perroapp();