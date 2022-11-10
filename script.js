const usuarios = {
  nome: 'Nathan',
  email: 'nathan@gmail.com',
  senha: '12345'
};

const converterJsn = JSON.stringify(usuarios); 

localStorage.setItem('chave', converterJsn);

// pegar dados do formulario
const botaoAdd = document.querySelector('#add-usuario');
botaoAdd.addEventListener('click', function(event){
  event.preventDefault();

  pegarDados

});

function pegarDados() {
  
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  const db = {
    nome: nome,
    email: email,
    senha: senha
  }

  console.log(db);

}

const create = function (pessoa) {
  
  db.push(usuarios);

};

console.log(usuarios);





