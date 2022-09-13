

const Clients = {
    id: "4",
    nome: "lucas",
    email: "lucas@gmail.com",
    idade: "22",
    senha: "1234"
}

//create 

const createClient = (client) => {
     const dados = JSON.parse(localStorage.getItem('client')) ?? [] ;
     dados.push(client);
     localStorage.setItem('client', JSON.stringify(dados));
};

//read

const readClient = () => localStorage.getItem('client') 


