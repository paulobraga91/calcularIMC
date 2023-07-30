export const alertError = {

elemento : document.querySelector('.erroAlert'),

open(){ 
    alertError.elemento.classList.add('open')
},
close(){
    alertError.elemento.classList.remove('open')
}

}