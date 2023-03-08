
 function formContact(){
    let data = {
    firstName : document.getElementById("firstName").value,
    lastName : document.getElementById("lastName").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value
    }
    console.log(data)
    alert(`
            Name= ${data.firstName}
            Last Name= ${data.lastName}
            Email= ${data.email}
            Message= ${data.message}
    `)
}  
       
const handleForm = (event) => {
    event.preventDefault()
    formContact()
}

let formSubmit = document.getElementById('form-submit')
formSubmit.addEventListener(
    'click',
    handleForm
)

    





/* function captureData(event){
    event.preventDefault()
    dataForm = {
        firstName : event.target
    }
   
} 
console.log(captureData())

formContact.addEventListener('submit', (e)=>{
e.preventDefault()
captureData()
})
 */

    
