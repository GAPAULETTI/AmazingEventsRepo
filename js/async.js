
async function fetchApi(){
    try{
        let urlApi = 'http:...'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()

        printProducts('#pet_container', response.products)
    
    } catch(error){
        console.log("Error")
    }
    
    let responseApi = fetchApi().then(res => console.log(res))

}

/* Otra forma de hacerlo */
fetch(urlApi)
    .then(response => response.json())
    .then(response => printProducts('#pet_container', response.products))
    .catch(error => console.log(error))