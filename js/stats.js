    
    async function statsEvents(){
        try{
            let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events'
            let fetchResponse = await fetch(urlApi)
            let response = await fetchResponse.json()
            
            let aEvents = response.events
            console.log(response.currentDate)
            
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
            console.log(arrayOrdenado) 
            let highestEventAttendance = arrayOrdenado[arrayOrdenado.length-1]
            let lowestEventAttendance = arrayOrdenado[0]
            console.log(highestEventAttendance.name + " " + highestEventAttendance.assistance)
            console.log(lowestEventAttendance.name + " " + lowestEventAttendance.assistance)
            /* Evento con mayor capacidad */
            let arrayOrdenadoCapacidad = [...arrayPast].sort((a,b)=>a.capacity-b.capacity)
            let eventLargerCapacity = arrayOrdenadoCapacidad[arrayOrdenadoCapacidad.length-1]
            console.log(eventLargerCapacity.name + " " + eventLargerCapacity.capacity)
           /*  console.log(arrayPast) 
            console.log(arrayUpcoming)  */
           
          
         let categories = []
            response.events.forEach(each =>{
             if( ! categories.includes(each.category)){
            categories.push(each.category)
             }
            })
            console.log(categories) 
           
        }catch(error){
            console.log(error)
        }
    }

statsEvents()

 

/* let categories = []
response.events.forEach(each =>{
    if( ! categories.includes(each.category)){
        categories.push(each.category)
    }
})
console.log(categories) */
/*  let assistanceSort = response.assistance
assistanceSort.sort()
console.log(assistanceSort) */