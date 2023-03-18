

function cardsPastTemplate(arrayPast) {
    
  return`
        <div class="card m-3" style="width: 18rem;">
        <img src="${arrayPast.image}" class="card-img-top" style="height: 12rem;" alt="response">
        <div class="card-body">
          <h5 class="card-title">${arrayPast.name}</h5>
          <p class="card-text">${arrayPast.description}</p>
          <div class="row">
            <p class="col">u$s ${arrayPast.price}</p>
            <a href="./detail.html?id=${arrayPast.id}" class="btn btn-primary col">Detail</a>
          </div>
        </div>
      </div>
      `
    }
   

        
   function printPastEvents(cardPastTemplate, arrPastEvents){
    let card = document.querySelector(cardPastTemplate)
    arrPastEvents = arrPastEvents.map(cardsPastTemplate)
    card.innerHTML = arrPastEvents.join('')
  }
 async function apiCardEvents(){
    try{
        let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()       
        
        let arrayPast = []
        
        for(let ev of response.events){
            if(ev.date  < response.currentDate ){
            arrayPast.push(ev)
             }
          }
         
        printPastEvents('#cardPastTemplate', arrayPast)
       /*  printChecks(response.events) */
        

    }catch(error){
       console.log(error)  
    }
}
apiCardEvents()

