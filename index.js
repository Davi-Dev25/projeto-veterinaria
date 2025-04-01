function clickMenu() {
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}
let elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida){
    duvida.addEventListener('cick', function(){
        duvida.classList.add('fundo-verde')
    })
})