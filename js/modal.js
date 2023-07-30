export const Modal = {
    modalCard: document.querySelector('.modal-wrapper'),
    modalMsg: document.querySelector('.modalCard h2'),
    modalBtnClose: document.querySelector('.ButtonClose'),

    open(){
        Modal.modalCard.classList.add('open')
    },
    close(){
        Modal.modalCard.classList.remove('open')
    }
}

Modal.modalBtnClose.onclick = function(){

    Modal.close()

}

window.addEventListener('keydown',handledKeydown)


function handledKeydown(event){
    if(event.key === 'Escape'){
        Modal.close()
    }
}
