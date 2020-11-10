const moment = require('moment')
const { Copiar } = require('./Copiar.ts');
const btnCopy = document.getElementById('btnCopy');
//Pega o mês e o dia referente ao atual
moment.locale('pt-br')
let day = moment()
.format('L')
.substring('/')
day = day.replace('/', '')
day = day.replace('/', '')

console.log(day)
//Copia estática, passando o path da pasta
//const arquivo = `//172.20.15.10/wlan_ftp/CADPDA/${day}`
const arquivo = `./src/pastasTeste/${day}`
const destino = "./src/teste"
btnCopy.onclick = function () {
  Copiar(arquivo, destino)
}