const formvalue = document.querySelector('form')
const ivalue = document.querySelector('input')
const messageone = document.querySelector("#c")

formvalue.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(ivalue.value)
    fetch("http://localhost:3000/weather?location="+ivalue.value).then((response)=>{
    response.json().then((data)=>{
        console.log(data)
        messageone.textContent = "Currently at "+data.location+" forecast report is "+data.forecast
    }).catch((e)=>{
        console.log(e)
    })
})
})
