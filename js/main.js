function alertModal(){
    alert('Gracias por tu mensaje!');
}

function alertModalRegister(){
    alert('Registro completado! Redireccionando a la página principal.');
}

function alertModalLogin(){
    alert('Ingresaste con éxito! Redireccionando a la página principal.');
}

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-conteiner').classList.add('showGoTop');
    }else{
        document.querySelector('.go-top-conteiner').classList.remove('showGoTop');
    }
}

document.querySelector('.go-top-conteiner').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});