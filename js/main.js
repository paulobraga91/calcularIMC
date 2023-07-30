import{Modal} from './modal.js'
import { alertError } from './alert.js'

const form = document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')
const alerta = document.querySelector('.erroAlert')

form.onsubmit = function(){
    event.preventDefault()
    const peso = inputPeso.value 
    const altura = inputAltura.value 
    const showAlertError = notAnumber(peso) || notAnumber(altura)

    if (showAlertError){
        alertError.open
        return;
    }

    const resultadoImc = imc(peso, altura)
    Modal.modalMsg.innerText = `Seu IMC é: ${resultadoImc}`
    Modal.open()
    
}

 function imc(peso, altura){
    return(peso/((altura/100)**2)).toFixed(2)
}


function notAnumber(value){
    return isNaN(value) || value == ""
}