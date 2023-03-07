const queryString = location.search;

const params = new URLSearchParams(queryString)

const id = params.get("id")

const cardEvento = data.events.filter(evento => evento.id == id)

console.log(cardEvento)
//document.getElementById('card-template').innerHTML = events.find( evento => evento._id === 1);

/* function cardEvents(){ */
    
/* for(let evento of events){ */
       const card = document.getElementById('card_detail')
       card.innerHTML=
        `
            <div class="card mb-3 ms-auto me-auto mt-4 col" style="max-width: 540px;" >
                <div class="row g-0">
                <div class="col-md-6">
                    <img src="${cardEvento[0].image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                    <h5 class="card-title">${cardEvento[0].name}</h5>
                    <p class="card-text"><small class="text-muted">${cardEvento[0].category}</small></p>
                    <p class="card-text">${cardEvento[0].description}</p>
                    </div>
                </div>
                </div>
                <div>
                <table class="table col">
                    <tr>
                    <th>Place</th>
                    <th>Capacity</th>
                    <th>Date</th>   
                    <th>Assistance</th>
                    <th>Price</th>
                    </tr>
                    <tr>
                    <td data-th="Place">${cardEvento[0].place}</td>
                    <td data-th="Capacity">${cardEvento[0].capacity}</td>
                    <td data-th="Date">5<sup>th</sup>${cardEvento[0].date}</td>
                    <td data-th="Assistance">${cardEvento[0].estimate}</td>
                    <td data-th="Price"> $ ${cardEvento[0].price}</td>
                    </tr>
                    </table>
                </div>
                <div class="d-flex justify-content-around align-items-end w-100 m-auto ">
                <a href="./index.html" class="btn btn-primary">Back</a>
                <a href="./index.html" class="btn btn-success ">Buy</a>
                </div>
            </div>
        `
   console.log(card)

/* function printEvents(){
    let card = document.getElementById('card-template');
    card.innerHTML=cardDetail.join('');
}; */

/* cardEvents();
printEvents(); */
