let categories = []
data.events.forEach(each =>{
    if( ! categories.includes(each.category)){
        categories.push(each.category)
    }
})
console.log(categories)


function checkCategory(form_check, arrCat ){
    let container = document.querySelector(form_check)
    arrCat = arrCat.map(each =>{
        return `
        <input onclick="captureData()" class="form-check-input" type="checkbox" value="${each}" id="${each}">
        <label class="form-check-label" for="${each}">
          ${each}
        </label>
        `
    })
    
    arrCat.push(`<input onkeyup="captureData()" class="contact-input" type="text" name="texto" id="id_search" placeholder="search">`)
    container.innerHTML = arrCat.join('')
}



checkCategory('#checkTemplate', categories)