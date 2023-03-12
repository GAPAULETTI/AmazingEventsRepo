let evento = data.events
let fechaAct = data.currentDate

function cardsUpcomingTemplate(evento) {
  
    if(fechaAct < evento.date ){
  return`
        <div class="card m-3" style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top" style="height: 12rem;" alt="evento">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
          <div class="row">
            <p class="col">u$s ${evento.price}</p>
            <a href="./detail.html?id=${evento.id}" class="btn btn-primary col">Detail</a>
          </div>
        </div>
      </div>
      `
    }
  }
        
   function printUpcomingEvents(cardUpcomingTemplate, arrUpcoming){
    let card = document.querySelector(cardUpcomingTemplate)
    arrUpcoming = arrUpcoming.map(cardsUpcomingTemplate)
    card.innerHTML= arrUpcoming.join('')
  }
 
printUpcomingEvents('#cardUpcomingTemplate',evento)
