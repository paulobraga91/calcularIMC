import{Modal} from './modal.js'
import {alertError} from './alert.js'
import{imc, notAnumber} from './utils.js'

const form = document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

form.onsubmit = function(){
    event.preventDefault()
    const peso = inputPeso.value 
    const altura = inputAltura.value 
    const showAlertError = notAnumber(peso) || notAnumber(altura)

    if (showAlertError){
        alertError.open()
        return;
    }

    const resultadoImc = imc(peso, altura)
    Modal.modalMsg.innerText = `Seu IMC é: ${resultadoImc}`
    Modal.open()
    
}

inputPeso.oninput = () => alertError.close()
inputAltura.oninput = () => alertError.close()