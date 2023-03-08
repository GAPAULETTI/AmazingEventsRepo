let evento = data.events
let fechaAct = data.currentDate

function cardsPastTemplate(evento) {
  
    if(fechaAct > evento.date ){
  return`
        <div class="card m-3" style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top" style="height: 12rem;" alt="evento">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
          <div class="row">
            <p class="col">u$s ${evento.price}</p>
            <a href="./detail.html" class="btn btn-primary col">Detail</a>
          </div>
        </div>
      </div>
      `
    }
  }
        
   function printPastEvents(cardPastTemplate, arrPastcoming){
    let card = document.querySelector(cardPastTemplate)
    arrPastcoming = arrPastcoming.map(cardsPastTemplate)
    card.innerHTML= arrPastcoming.join('')
  }
 
printPastEvents('#cardPastTemplate',evento)