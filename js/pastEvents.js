const events = data.events;
console.log();

let pastEvents = [];
let fechaAct = data.currentDate;



function cardEvents(){
    
    /* let card = document.getElementById('card-template'); */
    for(let evento of events){
        if(fechaAct > evento.date ){
        let cards =
        `
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
        pastEvents.push(cards);
    }
    }
}

function printEvents(){
    let card = document.getElementById('card-template');
    card.innerHTML=pastEvents.join('');
};

cardEvents();
printEvents();