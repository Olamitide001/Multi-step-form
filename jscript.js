"use strict"
const nextBtn = document.querySelector('.proceed')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const nameInput = document.querySelector('.name-info')
const emailInput = document.querySelector('.email-info')
const numberInput = document.querySelector('.number-info')
const planpage = document.querySelector('.plan-page')
const landPage = document.querySelector('.landing-page')


one.style.display ="none"
two.style.display ="none"
three.style.display ="none"
planpage.style.display='none'
nextBtn.addEventListener('click' , function(stop){
    stop.preventDefault()
    if(nameInput.value && emailInput.value && numberInput.value){
        one.style.display ="none"
        two.style.display ="none"
        three.style.display ="none"
        landPage.style.display ="none"
        planpage.style.display='block'
    }
    else if(nameInput.value === "" ){
        one.style.display ="inline"
    }
    else if(emailInput.value === ""){
        two.style.display ="inline"
    }
    else if(numberInput.value === ""){
        three.style.display ="inline"
    }
})
