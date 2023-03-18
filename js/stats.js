    
    async function statsEvents(){
        try{
            let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events'
            let fetchResponse = await fetch(urlApi)
            let response = await fetchResponse.json()
            
            let aEvents = response.events
            
            let arrayPast = []
            let arrayUpcoming = []

            for(let ev of aEvents){
                if(ev.date  < response.currentDate ){
                arrayPast.push(ev)

                 }else {
                arrayUpcoming.push(ev)
              }}
              /* Eventos con mas y menos asistencia */
              let arrayOrdenado = [...arrayPast].sort((a,b)=>a.assistance-b.assistance) 
              let highestEventAttendance = arrayOrdenado[arrayOrdenado.length-1]
              let lowestEventAttendance = arrayOrdenado[0]
              let arrayOrdenadoCapacidad = [...arrayPast].sort((a,b)=>a.capacity-b.capacity)
              let eventLargerCapacity = arrayOrdenadoCapacidad[arrayOrdenadoCapacidad.length-1]

              function categoryAs({category, name, estimate, capacity, }){
                return `${category} ${name} ${estimate} ${capacity}`
              }
              let catA = arrayUpcoming.map(categoryAs).sort()
              
              //Funcion para obtener ganancias totales por categoria 
              function getEventStatsTotal(arrayEvent, categ){
              let result = [...arrayEvent].filter(({category})=> category == categ).reduce(
                    (acc, each)=>{
                      let precio = each.price
                      let asistencia = each.estimate
                      let ingresos = precio*asistencia
                      return acc + ingresos
                    },
                    0
                  )
                  return result
                }
              function getPastEventStatsTotal(arrayEvent, categ){
              let result = [...arrayEvent].filter(({category})=> category == categ).reduce(
                    (acc, each)=>{
                      let precio = each.price
                      let asistencia = each.assistance
                      let ingresos = precio*asistencia
                      return acc + ingresos
                    },
                    0
                  )
                  return result
                }
                //Funcion para obtener porcentaje de asistencia por evento
                function getEventStatsPercentage(arrayEvent, categ){
                  let result = [...arrayEvent].filter(({category})=> category == categ).map(each =>
                       (each.estimate *100)/each.capacity
                       )
                      return result 
                    }
                function getEventPastStatsPercentage(arrayEvent, categ){
                  let result = [...arrayEvent].filter(({category})=> category == categ).map(each =>
                       (each.assistance *100)/each.capacity
                       )
                      return result 
                    }
                  //funcion para obtener porcentaje total o promedio por evento...
                  function getAverageEvent(array){
                    let sum = 0;
                    for (let i = 0; i < array.length; i++) {
                      sum = (sum + array[i]);}
                      let prom = (sum/array.length);
                      if (array.length=0){
                        return prom=0
                      }else{
                      
                      return prom
                    }
                  }
                    
                   // Upcoming Table Stats
                    let eventBooks = getEventStatsTotal(arrayUpcoming,'Books')
                    let percentageBooks = Math.round(getAverageEvent( getEventStatsPercentage(arrayUpcoming, 'Books')))
                    let eventCinema = getEventStatsTotal(arrayUpcoming,'Cinema')
                    let percentageCinema = Math.round(getAverageEvent(getEventStatsPercentage(arrayUpcoming,'Cinema'))) 
                    let eventConcert = getEventStatsTotal(arrayUpcoming,'Concert')
                    let percentageConcert = Math.round(getAverageEvent(getEventStatsPercentage(arrayUpcoming,'Concert')))
                    let eventMuseum = getEventStatsTotal(arrayUpcoming,'Museum')
                    let percentageMuseum = Math.round(getAverageEvent(getEventStatsPercentage(arrayUpcoming,'Museum')))
                    let eventParty = getEventStatsTotal(arrayUpcoming,'Party')
                    let percentageParty = Math.round(getAverageEvent(getEventStatsPercentage(arrayUpcoming,'Party')))
                    let eventRace = getEventStatsTotal(arrayUpcoming,'Race')
                    let percentageRace = Math.round(getAverageEvent(getEventStatsPercentage(arrayUpcoming,'Race')))
                    
                  //Past Table Stats
                    let eventBooksPast = getPastEventStatsTotal(arrayPast,'Books')
                    let percentageBooksPast = Math.round(getAverageEvent( getEventPastStatsPercentage(arrayPast, 'Books')))
                    let eventCinemaPast = getPastEventStatsTotal(arrayPast,'Cinema')
                    let percentageCinemaPast = Math.round(getAverageEvent(getEventPastStatsPercentage(arrayPast,'Cinema'))) 
                    let eventConcertPast = getPastEventStatsTotal(arrayPast,'Concert')
                    let percentageConcertPast = Math.round(getAverageEvent(getEventPastStatsPercentage(arrayPast,'Concert')))
                    let eventMuseumPast = getPastEventStatsTotal(arrayPast,'Museum')
                    let percentageMuseumPast = Math.round(getAverageEvent(getEventPastStatsPercentage(arrayPast,'Museum')))
                    let eventPartyPast = getPastEventStatsTotal(arrayPast,'Party')
                    let percentagePartyPast = Math.round(getAverageEvent(getEventPastStatsPercentage(arrayPast,'Party')))
                    let eventRacePast = getPastEventStatsTotal(arrayPast,'Race')
                    let percentageRacePast = Math.round(getAverageEvent(getEventPastStatsPercentage(arrayPast,'Race')))
                    let eventFoodPast = getEventStatsTotal(arrayPast,'Food')
                    let percentageFoodPast = Math.round(getAverageEvent(getEventPastStatsPercentage(arrayPast,'Food')))

            
            const eventTable = document.getElementById("event_table")
            eventTable.innerHTML = `
            <table class="table table-responsive table-dark table-striped">
            <tr class="table-dark">
              <th colspan="3">Events Statistics</th>
            </tr>
          <tbody class="table-secondary table-striped">
            <tr>
              <th>Event with the highest percentage of attendance</th>
              <th>Event with the lowest percentage of attendance</th>
              <th>Event with larger capacity</th>
            </tr>
            <tr>
              <td>${highestEventAttendance.name}</td>
              <td>${lowestEventAttendance.name}</td>
              <td>${eventLargerCapacity.name}</td>
            </tr>
            <tr>
              <td>${highestEventAttendance.assistance}  attendees</td>
              <td>${lowestEventAttendance.assistance}  attendees</td>
              <td>${eventLargerCapacity.capacity}</td>
            </tr>
            <tr class="table-dark">
            <th colspan="3">Upcoming events statistics by category</th>
          </tr>
          <tr>
            <th>Categories</th>
            <th>Revenues</th>
            <th>Percentage of attendance</th>
          </tr>
          <tr>
            <td>Books</td>
            <td>$ ${eventBooks}</td>
            <td>${percentageBooks} %</td>
          </tr>
          <tr>
            <td>Cinema</td>
            <td>$ ${eventCinema}</td>
            <td>${percentageCinema} %</td>
          </tr>
          <tr>
            <td>Concert</td>
            <td>$ ${eventConcert}</td>
            <td>${percentageConcert} %</td>
          </tr>
          <tr>
            <td>Museum</td>
            <td>$ ${eventMuseum}</td>
            <td>${percentageMuseum} %</td>
          </tr>
          <tr>
            <td>Party</td>
            <td>$ ${eventParty}</td>
            <td>${percentageParty} %</td>
          </tr>
          <tr>
            <td>Race</td>
            <td>$ ${eventRace}</td>
            <td>${percentageRace} %</td>
          </tr>
          <tr class="table-dark">
            <th colspan="3">Past events statistics by category</th>
          </tr>
          <tr>
            <th>Categories</th>
            <th>Revenues</th>
            <th>Percentage of attendance</th>
          </tr>
          <tr>
            <td>Books</td>
            <td>$ ${eventBooksPast}</td>
            <td>${percentageBooksPast} %</td>
          </tr>
          <tr>
            <td>Cinema</td>
            <td>$ ${eventCinemaPast}</td>
            <td>${percentageCinemaPast} %</td>
          </tr>
          <tr>
            <td>Concert</td>
            <td>$ ${eventConcertPast}</td>
            <td>${percentageConcertPast} %</td>
          </tr>
          <tr>
            <td>Food</td>
            <td>$ ${eventFoodPast}</td>
            <td>${percentageFoodPast} %</td>
          </tr>
          <tr>
            <td>Museum</td>
            <td>$ ${eventMuseumPast}</td>
            <td>${percentageMuseumPast} %</td>
          </tr>
          <tr>
            <td>Party</td>
            <td>$ ${eventPartyPast}</td>
            <td>${percentagePartyPast} %</td>
          </tr>
          <tr>
            <td>Race</td>
            <td>$ ${eventRacePast}</td>
            <td>${percentageRacePast} %</td>
          </tr>
         
        </tbody> -->
            </table>
            `
          
        }catch(error){
            console.log(error)
        }
    }

statsEvents()

 

