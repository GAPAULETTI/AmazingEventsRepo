
async function apiDetailEvents(){
    try{
        const card = document.getElementById("card_detail")
        let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()

        const queryString = location.search;

        const params = new URLSearchParams(queryString)

        const id = params.get("id")

        const responseDetail = response.events.find(each => each.id == id)
 
        if( response.currentDate > responseDetail.date){   
            card.innerHTML =
                     `<div class="card mb-3 ms-auto me-auto mt-4 col" style="max-width: 540px;" >
                     <div class="row g-0">
                     <div class="col-md-6">
                         <img src="${responseDetail.image}" class="img-fluid rounded-start" alt="...">
                     </div>
                     <div class="col-md-6">
                         <div class="card-body">
                         <h5 class="card-title">${responseDetail.name}</h5>
                         <p class="card-text"><small class="text-muted">${responseDetail.category}</small></p>
                         <p class="card-text">${responseDetail.description}</p>
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
                         <td data-th="Place">${responseDetail.place}</td>
                         <td data-th="Capacity">${responseDetail.capacity}</td>
                         <td data-th="Date">5<sup>th</sup>${responseDetail.date}</td>
                         <td data-th="Assistance">${responseDetail.assistance}</td>
                         <td data-th="Price"> $ ${responseDetail.price}</td>
                         </tr>
                         </table>
                     </div>
                     <div class="d-flex justify-content-around align-items-end w-100 m-auto ">
                     <a href="./index.html" class="btn btn-primary">Back</a>
                     <a href="./index.html" class="btn btn-success ">Buy</a>
                     </div>
                 </div>
             `
       } else {
         card.innerHTML= `<div class="card mb-3 ms-auto me-auto mt-4 col" style="max-width: 540px;" >
         <div class="row g-0">
         <div class="col-md-6">
             <img src="${responseDetail.image}" class="img-fluid rounded-start" alt="...">
         </div>
         <div class="col-md-6">
             <div class="card-body">
             <h5 class="card-title">${responseDetail.name}</h5>
             <p class="card-text"><small class="text-muted">${responseDetail.category}</small></p>
             <p class="card-text">${responseDetail.description}</p>
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
             <td data-th="Place">${responseDetail.place}</td>
             <td data-th="Capacity">${responseDetail.capacity}</td>
             <td data-th="Date">5<sup>th</sup>${responseDetail.date}</td>
             <td data-th="Estimate">${responseDetail.estimate}</td>
             <td data-th="Price"> $ ${responseDetail.price}</td>
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

       /*  const resEvents = await response.events.find(each => each.id == id)
        detailTemplate('#card_detail', response.events) */

    }catch(error){
       console.log(error) 
    }
} 


apiDetailEvents()