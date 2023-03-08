/* const dataForm = document.querySelector('dataForm') */

/* dataForm.addEventListener("submit", formData) */

let btnSubmit = document.getElementById('submit-btn')

btnSubmit.addEventListener(
    'click',
    handleForm,
   
)

function handleForm(event){
    event.preventDefault()
    captureData()
    }

function captureData(event){
   let datos = document.getElementById("dataform")
          /*  console.log(firstName.value)
        console.log(lastName.value)
        console.log(email.value)
        console.log(message.value) */
    let data=[
        firstName.value,
        lastName.value,
        email.value,
        message.value
    ]
    return data
    }
    console.log(captureData())


    
