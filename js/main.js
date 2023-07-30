import{Modal} from './modal.js'
const form = document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

form.onsubmit = function(){
    event.preventDefault()
    const peso = inputPeso.value 
    const altura = inputAltura.value 
    const resultadoImc = imc(peso, altura)
    Modal.modalMsg.innerText = `Seu IMC é: ${resultadoImc}`
    Modal.open()
    
}

 function imc(peso, altura){
    return(peso/((altura/100)**2)).toFixed(2)
}