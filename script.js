/**
 * ano automatico
 * @autor Gabriela Queiroz 
 */

const main = document.querySelector('main')
const backgrounds = ['url(img/carrossel.jpg)','url(img/carrosel2.jpg)']

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    //troca da imagem de background no CSS
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)






//inserindo o nome na tag <span>
let ano = document.getElementById('copyrightyear')
// a linha abaixo obtem o ano atual do sistema
let anoAtual = new Date().getFullYear()
// a linha abaixo atribui o ano a tag <span> 
ano.innerHTML = anoAtual 