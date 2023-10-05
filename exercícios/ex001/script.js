function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagemanha.png'
        document.body.style.background = '#ffcb6e'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'imagemtarde.png'
        document.body.style.background = '#b98b69'
    } else {
        //BOA NOITE
        img.src = 'imagemnoite.png'
        document.body.style.background = '#171e2e'
    }
}
