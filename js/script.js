// Chamando os elementos do HTML para poder manipular no JS
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const btn = document.querySelector("button");
const pai = document.getElementsByClassName("cadastrados")[0];

// Criando uma variavel para simular um ID único
let nextId = 1;

// Adicionando um evento para a ação de clicar no botão de criar
btn.addEventListener("click", async (e) => {
  e.preventDefault();

  // Criando variavel com o valor de cada input
  const nomeInput = nome.value;
  const emailInput = email.value;
  const telefoneInput = telefone.value;

  // Criando uma varivel com um modelo do container do usuario
  const filho = `
    <div id="${nextId}" class="cadastrado">
        <div>
          <p>Nome: ${nomeInput}</p>
          <p>Email: ${emailInput}</p>
          <p>Telefone: ${telefoneInput}</p>
        </div>
        <button class="del">
          <span class="material-symbols-outlined">
            delete
          </span>
        </button>
    </div>             
  `;

  // Fazendo uma validação para verificar se os inputs estão vazios
  if (!nomeInput || !emailInput || !telefoneInput) {
    alert("Algum campo esta em branco");
    // window.location.reload()
  } else {
    // Adicionando o elemento do container do usuario no HTML
    pai.innerHTML += filho;

    // Deixando as caixas do input vazias
    nome.value = "";
    email.value = "";
    telefone.value = "";

    // Executando a função de deletar
    funcDeletar();

    // Mudando o ID
    nextId += 1;

    // Enviando mensagem para o usuario
    console.log("Usuario adicionado...");
  }
});

// Chamando o elemento do HTML para poder manipular no JS
const deletar = document.getElementsByClassName("del");

// Criando uma função de deletar
async function funcDeletar() {
  for (let index = 0; index < deletar.length; index++) {
    // Adicionando evento no botao de deletar
    deletar[index].addEventListener("click", (e) => {
      e.preventDefault();
      if (deletar.length === 1) {
        console.log("Usuario Deletado...");
        document.getElementById(deletar[0].parentElement.id).remove();
      } else {
        console.log("Usuario Deletado...");
        document.getElementById(deletar[index].parentElement.id).remove();
      }
    });
  }
}
