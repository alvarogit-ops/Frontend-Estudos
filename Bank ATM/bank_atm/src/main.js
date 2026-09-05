import './style.css'



const botao100 = document.querySelector("#valor-100")

botao100.addEventListener('click', ()=>{
  console.log('100 reis')
})

const agora = new Date
const hora = agora.getHours()

let hora_atual = document.getElementById("hora")
hora_atual.textContent = `${hora}:00`;

let valor_montante = document.querySelector("#montante")
let saldo = 4000;

const saldoElemento = document.querySelector("#saldo");

saldoElemento.textContent = saldo.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const formulario = document.querySelector('#form-saque');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const montante_resultado = Number(document.querySelector('#montante').value);
  saldo = saldo - montante_resultado
  console.log(montante_resultado);

    saldoElemento.textContent = saldo.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
});
