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


const slidePost = document.querySelector("#slidePost")
const buttonPost = document.querySelectorAll("#buttonPost")

function showPost (){

    if(slidePost.classList.contains('noVisualize')) {slidePost.classList.remove('noVisualize');slidePost.classList.add('Visualize');}
    else{slidePost.classList.remove('Visualize');slidePost.classList.add('noVisualize');}
    }

buttonPost.forEach(e => e.addEventListener('click', showPost))


const slideEdit = document.querySelector("#slideEdit")
const buttonEdit = document.querySelectorAll("#buttonEdit")

function showEdit (){

    if(slideEdit.classList.contains('noVisualize')) {slideEdit.classList.remove('noVisualize');slideEdit.classList.add('Visualize');}
    else{slideEdit.classList.remove('Visualize');slideEdit.classList.add('noVisualize');}
    }

buttonEdit.forEach(e => e.addEventListener('click', showEdit))

const slideGame = document.querySelector("#slideGame")
const buttonGame = document.querySelectorAll("#buttonGame")

function showGame (){

    if(slideGame.classList.contains('noVisualize')) {slideGame.classList.remove('noVisualize');slideGame.classList.add('Visualize');}
    else{slideGame.classList.remove('Visualize');slideGame.classList.add('noVisualize');}
    }

buttonGame.forEach(e => e.addEventListener('click', showGame))
