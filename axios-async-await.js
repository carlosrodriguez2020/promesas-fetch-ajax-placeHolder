const _axiosPropuesta=async()=>{
const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/5");

console.log(data)
document.write(data.name)
};

_axiosPropuesta(); // de esta manera si se puede manipular los datos


//__axiosPropuesta().then(console.log) // pero el curso lo realiza de esta manera