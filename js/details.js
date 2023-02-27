const events = data.events;
console.log();

let arrCards = [];


function cardEvents(){
    
    /* let card = document.getElementById('card-template'); */
    for(let evento of events){
        let cards =
        `
            <div class="card mb-3 ms-auto me-auto mt-4 col" style="max-width: 540px;" id="card-template">
                <div class="row g-0">
                <div class="col-md-6">
                    <img src="${evento.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text"><small class="text-muted">${evento.category}</small></p>
                    <p class="card-text">${evento.description}</p>
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
                    <td data-th="Place">${evento.place}</td>
                    <td data-th="Capacity">${evento.capacity}</td>
                    <td data-th="Date">5<sup>th</sup>${evento.date}</td>
                    <td data-th="Assistance">${evento.estimate}</td>
                    <td data-th="Price"> $ ${evento.price}</td>
                    </tr>
                    </table>
                </div>
                <div class="d-flex justify-content-around align-items-end w-100 m-auto ">
                <a href="./index.html" class="btn btn-primary">Back</a>
                <a href="./index.html" class="btn btn-success ">Buy</a>
                </div>
            </div>
        `
        arrCards.push(cards);
    }
}

function printEvents(){
    let card = document.getElementById('card-template');
    card.innerHTML=arrCards.join('');
};

cardEvents();
printEvents();