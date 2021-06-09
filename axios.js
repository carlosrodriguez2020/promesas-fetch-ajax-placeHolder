axios
.get("https://jsonplaceholder.typicode.com/users/3")
.then((respuesta)=>{
    return console.log(respuesta.data)
})