
export function imc(peso, altura){
    return(peso/((altura/100)**2)).toFixed(2)
}


export function notAnumber(value){
    return isNaN(value) || value == ""
}