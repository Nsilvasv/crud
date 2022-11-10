/*const Clients = { 
    id: "5",
    nome: "m",
    email: "m@gmail.com",
    idade: "22",
    senha: "1234"
}

const getStorage = () => JSON.parse(localStorage.getItem("dados")) ?? [];
const setStorage = (dados) => localStorage.setItem("dados", JSON.stringify(dados)) ;

//create 
const createClient = (client) => {
     const dados = getStorage();
     dados.push(client);
     setStorage(dados);
};

//read
const readClient = () => getStorage() ;

//update
const updateClient = (index, client) => {
    const dados = readClient();
    dados[index] = client;
    setStorage(dados);
}
//delete
const deleteClient = (index) => {
    const dados = readClient();
    dados.slice(index, 1)
    setStorage(dados);
}*/