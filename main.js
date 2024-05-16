const listaTeclas = document.querySelectorAll('.tecla');

function tocaSom(idAudio) {
    const elemento = document.querySelector(idAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

for(let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(evento) {

        console.log(evento)

        if (evento.code == 'Enter' || evento.code == 'Space') {
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function(evento) {
        if (evento.code == 'Enter' || evento.code == 'Space') {
            tecla.classList.remove('ativa')
        }
    }

}