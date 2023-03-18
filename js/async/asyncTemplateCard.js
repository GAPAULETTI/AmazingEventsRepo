

/* let responseApi = apiCardEvents().then(res => console.log(res)) */



function cardTemplates(response){
    return`
    <div class="card m-3" style="width: 18rem;">
    <img src=" ${response.image} " class="card-img-top" style="height: 12rem;" alt="event">
    <div class="card-body">
    <h5 class="card-title">${response.name}</h5>
    <p class="card-text">${response.description}</p>
    <div class="row">
    <p class="col">u$s ${response.price}</p>
    <a href="./detail.html?id=${response.id}" class="btn btn-primary col">Detail</a>
    </div>
    </div>
    </div> 
    `
}
function printCard(cardTemplate, arrCards){
   let card = document.querySelector(cardTemplate)
   arrCards = arrCards.map(cardTemplates)
   card.innerHTML = arrCards.join('')
}

let arrayEvent;

async function apiCardEvents(){
    try{
        let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        arrayEvent = [...response.events]
      
        printCard('#cardTemplate', response.events)
        printChecks(response.events)
        

    }catch(error){
       /* console.log("error")  */
    }
}

 
apiCardEvents()

/* printCard('#cardTemplate', evento)  */
