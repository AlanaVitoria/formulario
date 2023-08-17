var inputNome = document.querySelector(".input-nome")
var inputEmail = document.querySelector(".input-email")
var inputMensagem = document.querySelector(".input-mensagem")
var cardMensagem = document.querySelector('.card-mensagem')

function alertarValores() {
  if (inputNome.value == "" || inputEmail.value == "" || inputMensagem.value == "") {
    alert("PREENCHA OS CAMPOS!")
  } else {
    alert(`Meu nome é: ${inputNome.value}, Email: ${inputEmail.value}, Mensagem: ${inputMensagem.value}`)
  }
}
