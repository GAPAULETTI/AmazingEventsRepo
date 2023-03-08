 let evento = data.events;

function cardTemplates(evento){
    return`
    <div class="card m-3" style="width: 18rem;">
    <img src="${evento.image}" class="card-img-top" style="height: 12rem;" alt="event">
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
function printCard(cardTemplate, arrCards){
    let card = document.querySelector(cardTemplate)
    arrCards = arrCards.map(cardTemplates)
    card.innerHTML = arrCards.join('')
}
printCard('#checkTemplate', evento)

