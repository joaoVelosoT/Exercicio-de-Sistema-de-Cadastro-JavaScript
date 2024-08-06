const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

const btn = document.querySelector("button");

const pai = document.getElementsByClassName("cadastrados")[0];
let nextId = 1;
btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const nomeInput = nome.value;
  const emailInput = email.value;
  const telefoneInput = telefone.value;

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

  if (!nomeInput || !emailInput || !telefoneInput) {
    alert("Algum campo esta em branco");
    // window.location.reload()
  } else {
    pai.innerHTML += filho;
    nome.value = "";
    email.value = "";
    telefone.value = "";
    funcDeletar();
    nextId += 1;
  }
});

const deletar = document.getElementsByClassName("del");

async function funcDeletar() {
  if (deletar) {
    console.log(deletar);

    for (let index = 0; index < deletar.length; index++) {
      deletar[index].addEventListener("click", (e) => {
        e.preventDefault();
        try {
          document.getElementById(deletar[index].parentElement.id).remove();
        } catch (error) {
          console.log("caiu no erro");
          document.getElementById(deletar[0].parentElement.id).remove();
        }

        // document.getElementById(deletar[index].id).parentElement.remove();
        // console.log("clicou no botao");

        // console.log("div parent", deletar[index].parentElement);

        // deletar[index].parentElement.remove();
      });
    }
  }
}
