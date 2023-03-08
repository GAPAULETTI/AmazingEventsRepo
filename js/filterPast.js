function captureData(){
    let text = document.getElementById('id_search').value
    let checks = Array.from(document.querySelectorAll(`.form-check-input:checked`)).map(each =>each.value)
    let filtro = data.events.filter(each => {
        return (each.name.toLocaleLowerCase().includes(text)) && (checks.length === 0 || checks.includes(each.category))
    })
    if(filtro.length > 0){
        printPastEvents('#cardPastTemplate', filtro)
      } else {
       notFoundCard()
     }    
    }
    

    const handleForm = (event) =>{
        event.preventDefault()
        captureData()
    }