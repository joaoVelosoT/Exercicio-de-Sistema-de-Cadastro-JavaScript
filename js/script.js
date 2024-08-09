// Chamando os elementos do HTML para poder manipular no JS
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const btn = document.querySelector("button");
const pai = document.getElementsByClassName("cadastrados")[0];

// Adicionando um evento para a ação de clicar no botão de criar
btn.addEventListener("click", async (e) => {
  e.preventDefault();

  // Criando variavel com o valor de cada input
  const nomeInput = nome.value;
  const emailInput = email.value;
  const telefoneInput = telefone.value;

  // Criando uma varivel com um modelo do container do usuario
  const filho = `
    <div  class="cadastrado">
        <div>
          <p>Nome: ${nomeInput}</p>
          <p>Email: ${emailInput}</p>
          <p>Telefone: ${telefoneInput}</p>
        </div>
        <button class="del" >
          <span class="material-symbols-outlined">
            delete
          </span>
        </button>
    </div>             
  `;

  // Fazendo uma validação para verificar se os inputs estão vazios
  if (!nomeInput || !emailInput || !telefoneInput) {
    alert("Algum campo esta em branco");
  } else {
    // Adicionando o elemento do container do usuario no HTML
    pai.innerHTML += filho;

    // Deixando as caixas do input vazias
    nome.value = "";
    email.value = "";
    telefone.value = "";

    // Executando a função de deletar
    funcDeletar();

    // Enviando mensagem para o usuario
    console.log("Usuario adicionado...");
  }
});

// Criando uma função de deletar
async function funcDeletar() {
  const deletar = document.querySelectorAll(".del");
  console.log(deletar);

  // Fazendo o forEach no NodeList
  deletar.forEach((btnDeletar) => {
    // Ouvindo o evento no botao de deletar
    btnDeletar.addEventListener("click", (e) => {
      // Removendo a div pai do botão
      btnDeletar.parentElement.remove();
      console.log("Usuario Deletado");
    });
  });
}
