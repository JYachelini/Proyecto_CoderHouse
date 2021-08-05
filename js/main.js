function alertModal(){
    alert('Gracias por tu mensaje!');
}

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-conteiner').classList.add('show');
    }else{
        document.querySelector('.go-top-conteiner').classList.remove('show');
    }
}

document.querySelector('.go-top-conteiner').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});