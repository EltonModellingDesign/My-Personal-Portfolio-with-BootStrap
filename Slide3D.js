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

const slideAsset = document.querySelector("#slideAsset")
const buttonAsset = document.querySelectorAll("#buttonAsset")

function showAsset (){

    if(slideAsset.classList.contains('noVisualize')) {slideAsset.classList.remove('noVisualize');slideAsset.classList.add('Visualize');}
    else{slideAsset.classList.remove('Visualize');slideAsset.classList.add('noVisualize');}
    }

buttonAsset.forEach(e => e.addEventListener('click', showAsset))


const slideMoveis = document.querySelector("#slideMoveis")
const buttonMoveis = document.querySelectorAll("#buttonMoveis")

function showMoveis (){

    if(slideMoveis.classList.contains('noVisualize')) {slideMoveis.classList.remove('noVisualize');slideMoveis.classList.add('Visualize');}
    else{slideMoveis.classList.remove('Visualize');slideMoveis.classList.add('noVisualize');}
    }

buttonMoveis.forEach(e => e.addEventListener('click', showMoveis))

const slideAnimations = document.querySelector("#slideAnimations")
const buttonAnimation = document.querySelectorAll("#buttonAnimation")

function showAnimations (){

    if(slideAnimations.classList.contains('noVisualize')) {slideAnimations.classList.remove('noVisualize');slideAnimations.classList.add('Visualize');}
    else{slideAnimations.classList.remove('Visualize');slideAnimations.classList.add('noVisualize');}
    }

buttonAnimation.forEach(e => e.addEventListener('click', showAnimations))

const slideJewelry = document.querySelector("#slideJewelry")
const buttonJewelry = document.querySelectorAll("#buttonJewelry")

function showJewelry (){

    if(slideJewelry.classList.contains('noVisualize')) {slideJewelry.classList.remove('noVisualize');slideJewelry.classList.add('Visualize');}
    else{slideJewelry.classList.remove('Visualize');slideJewelry.classList.add('noVisualize');}
    }

buttonJewelry.forEach(e => e.addEventListener('click', showJewelry))

const slideArch = document.querySelector("#slideArch")
const buttonArch = document.querySelectorAll("#buttonArch")

function showArch (){

    if(slideArch.classList.contains('noVisualize')) {slideArch.classList.remove('noVisualize');slideArch.classList.add('Visualize');}
    else{slideArch.classList.remove('Visualize');slideArch.classList.add('noVisualize');}
    }

buttonArch.forEach(e => e.addEventListener('click', showArch))
