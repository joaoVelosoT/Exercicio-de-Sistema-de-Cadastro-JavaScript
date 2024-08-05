const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

const btn = document.querySelector("button");

const pai = document.getElementsByClassName("cadastrados")[0];

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const nomeInput = nome.value;
  const emailInput = email.value;
  const telefoneInput = telefone.value;

  const filho = `
    <div>
                        <p>Nome: ${nomeInput}</p>
                        <p>Email: ${emailInput}</p>
                        <p>Telefone: ${telefoneInput}</p>
                        <button class = "del">Deletar</button>
                         
                    </div>
                    <br>
                   
  `;

  if (!nomeInput || !emailInput || !telefoneInput) {
    alert("Algum campo esta em branco");
    // window.location.reload()
  } else {
    pai.innerHTML += filho;
    funcDeletar();
  }
});

const deletar = document.getElementsByClassName("del");

async function funcDeletar() {
  if (deletar) {
    console.log(deletar);

    for (let index = 0; index < deletar.length; index++) {
      deletar[index].addEventListener("click", (e) => {
        e.preventDefault();
        console.log("div parent", deletar[index].parentElement);

        deletar[index].parentElement.remove();
      });
      console.log(deletar[index]);
    }
  }
}
