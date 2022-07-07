
const categories = document.querySelectorAll("#hide")
const buttons = document.querySelector('#buttons')


categories[3].classList.add('hideItem')
categories[1].classList.add('hideItem')

function hideFunction(e){

    categories.forEach(event => event.classList.add('hideItem'))

    if(e.target == buttons.childNodes[1]){
        categories[3].classList.add('hideItem')
        categories[1].classList.add('hideItem')

        categories[0].classList.remove('hideItem')
    }

    if(e.target == buttons.childNodes[3]){
        categories[3].classList.add('hideItem')
        categories[0].classList.add('hideItem')

        categories[1].classList.remove('hideItem')
    }

    if(e.target == buttons.childNodes[5]){
        categories[0].classList.add('hideItem')
        categories[1].classList.add('hideItem')

        categories[3].classList.remove('hideItem')
    }
}
buttons.onclick=hideFunction


/*Slide 3D*/

const slideVehicule = document.querySelector("#slideVehicule")
const buttonVehicule = document.querySelectorAll("#buttonVehicule")

function showVehicule (){

    if(slideVehicule.classList.contains('noVisualize')) {slideVehicule.classList.remove('noVisualize');slideVehicule.classList.add('Visualize');}
    else{slideVehicule.classList.remove('Visualize');slideVehicule.classList.add('noVisualize');}
    }

buttonVehicule.forEach(e => e.addEventListener('click', showVehicule))


const slideCharacterC = document.querySelector("#slideCharacterC")
const buttonCharacterC = document.querySelectorAll("#buttonCharacterC")

function showCharacterC (){

    if(slideCharacterC.classList.contains('noVisualize')) {slideCharacterC.classList.remove('noVisualize');slideCharacterC.classList.add('Visualize');}
    else{slideCharacterC.classList.remove('Visualize');slideCharacterC.classList.add('noVisualize');}
    }

buttonCharacterC.forEach(e => e.addEventListener('click', showCharacterC))


const slideCena = document.querySelector("#slideCena")
const buttonCena = document.querySelectorAll("#buttonCena")

function showCena (){

    if(slideCena.classList.contains('noVisualize')) {slideCena.classList.remove('noVisualize');slideCena.classList.add('Visualize');}
    else{slideCena.classList.remove('Visualize');slideCena.classList.add('noVisualize');}
    }

buttonCena.forEach(e => e.addEventListener('click', showCena))

/*Desig Slides*/

const slideUX = document.querySelector("#slideUXDesign")
const buttonUX = document.querySelectorAll("#buttonUX")
function showUXDesign (){

    if(slideUX.classList.contains('noVisualize')) {slideUX.classList.remove('noVisualize');slideUX.classList.add('Visualize');}
    else{slideUX.classList.remove('Visualize');slideUX.classList.add('noVisualize');}
    }

buttonUX.forEach(e => e.addEventListener('click', showUXDesign))

const slideWD = document.querySelector("#slideWD")
const buttonWD = document.querySelectorAll("#buttonWD")

function showWD (){

    if(slideWD.classList.contains('noVisualize')) {slideWD.classList.remove('noVisualize');slideWD.classList.add('Visualize');}
    else{slideWD.classList.remove('Visualize');slideWD.classList.add('noVisualize');}

    }

buttonWD.forEach(e => e.addEventListener('click', showWD))


const slideLogo = document.querySelector("#slideLogo")
const buttonLogo = document.querySelectorAll("#buttonLogo")

function showLogo (){

    if(slideLogo.classList.contains('noVisualize')) {slideLogo.classList.remove('noVisualize');slideLogo.classList.add('Visualize');}
    else{slideLogo.classList.remove('Visualize');slideLogo.classList.add('noVisualize');}
    }

buttonLogo.forEach(e => e.addEventListener('click', showLogo))