let fechaAct = data.currentDate

const queryString = location.search;

const params = new URLSearchParams(queryString)

const id = params.get("id")

const cardEvento = data.events.find(each => each.id == id)

const card = document.getElementById("card_detail")

if( fechaAct > cardEvento.date){        
       card.innerHTML =
                `<div class="card mb-3 ms-auto me-auto mt-4 col" style="max-width: 540px;" >
                <div class="row g-0">
                <div class="col-md-6">
                    <img src="${cardEvento.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                    <h5 class="card-title">${cardEvento.name}</h5>
                    <p class="card-text"><small class="text-muted">${cardEvento.category}</small></p>
                    <p class="card-text">${cardEvento.description}</p>
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
                    <td data-th="Place">${cardEvento.place}</td>
                    <td data-th="Capacity">${cardEvento.capacity}</td>
                    <td data-th="Date">5<sup>th</sup>${cardEvento.date}</td>
                    <td data-th="Assistance">${cardEvento.assistance}</td>
                    <td data-th="Price"> $ ${cardEvento.price}</td>
                    </tr>
                    </table>
                </div>
                <div class="d-flex justify-content-around align-items-end w-100 m-auto ">
                <a href="./index.html" class="btn btn-primary">Back</a>
                <a href="./index.html" class="btn btn-success ">Buy</a>
                </div>
            </div>
        `
   }else{
    card.innerHTML =`<div class="card mb-3 ms-auto me-auto mt-4 col" style="max-width: 540px;" >
    <div class="row g-0">
    <div class="col-md-6">
        <img src="${cardEvento.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-6">
        <div class="card-body">
        <h5 class="card-title">${cardEvento.name}</h5>
        <p class="card-text"><small class="text-muted">${cardEvento.category}</small></p>
        <p class="card-text">${cardEvento.description}</p>
        </div>
    </div>
    </div>
    <div>
    <table class="table col">
        <tr>
        <th>Place</th>
        <th>Capacity</th>
        <th>Date</th>   
        <th>Estimate</th>
        <th>Price</th>
        </tr>
        <tr>
        <td data-th="Place">${cardEvento.place}</td>
        <td data-th="Capacity">${cardEvento.capacity}</td>
        <td data-th="Date">5<sup>th</sup>${cardEvento.date}</td>
        <td data-th="Estimate">${cardEvento.estimate}</td>
        <td data-th="Price"> $ ${cardEvento.price}</td>
        </tr>
        </table>
    </div>
    <div class="d-flex justify-content-around align-items-end w-100 m-auto ">
    <a href="./index.html" class="btn btn-primary">Back</a>
    <a href="./index.html" class="btn btn-success ">Buy</a>
    </div>
</div>
`
}

 