const promesa = async () => {
  const datos = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await datos.json();

  // const datotxt = data.name;
  // document.write(datotxt);
  return data;
};

const data = promesa().then(console.log);
