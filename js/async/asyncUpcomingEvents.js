function cardsUpcomingTemplate(arrayUpcoming) {
    
    return`
          <div class="card m-3" style="width: 18rem;">
          <img src="${arrayUpcoming.image}" class="card-img-top" style="height: 12rem;" alt="response">
          <div class="card-body">
            <h5 class="card-title">${arrayUpcoming.name}</h5>
            <p class="card-text">${arrayUpcoming.description}</p>
            <div class="row">
              <p class="col">u$s ${arrayUpcoming.price}</p>
              <a href="./detail.html?id=${arrayUpcoming.id}" class="btn btn-primary col">Detail</a>
            </div>
          </div>
        </div>
        `
      }
     
  
          
     function printUpcomingEvents(cardUpcomingTemplate, arrUpcomingEvents){
      let card = document.querySelector(cardUpcomingTemplate)
      arrUpcomingEvents = arrUpcomingEvents.map(cardsUpcomingTemplate)
      card.innerHTML = arrUpcomingEvents.join('')
    }
    let arrayEvent;
   async function apiCardEvents(){
      try{
          let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events'
          let fetchResponse = await fetch(urlApi)
          let response = await fetchResponse.json()       
          
          let arrayUpcoming = []
          
          for(let ev of response.events){
              if(ev.date  > response.currentDate ){
              arrayUpcoming.push(ev)
               }
            }
           arrayEvent = [...arrayUpcoming]
          printUpcomingEvents('#cardUpcomingTemplate', arrayUpcoming)
          printChecks(arrayUpcoming)
          
  
      }catch(error){
         console.log(error)  
      }
  }
  apiCardEvents()