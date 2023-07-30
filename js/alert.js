export const alertError = {

elemento: document.querySelector('.erroAlert'),

open(){ 
    elemento.classList.add('open')
},
close(){
    elemento.classList.remove('open')
}

}