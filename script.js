let question1=document.querySelector(".division1")
let question2=document.querySelector(".division2")
let question3=document.querySelector(".division3")
let question4=document.querySelector(".division4")
let question5=document.querySelector(".division5")
let question6=document.querySelector(".division6")
let answer1=document.querySelector(".answer1")
let answer2=document.querySelector(".answer2")
let answer3=document.querySelector(".answer3")
let answer4=document.querySelector(".answer4")
let answer5=document.querySelector(".answer5")
let answer6=document.querySelector(".answer6")
question1.addEventListener("click",()=>{
    answer1.classList.toggle("specialclass")
})
question2.addEventListener("click",()=>{
    answer2.classList.toggle("specialclass")
})
question3.addEventListener("click",()=>{
    answer3.classList.toggle("specialclass")
})
question4.addEventListener("click",()=>{
    answer4.classList.toggle("specialclass")
})
question5.addEventListener("click",()=>{
    answer5.classList.toggle("specialclass")
})
question6.addEventListener("click",()=>{
    answer6.classList.toggle("specialclass")
})