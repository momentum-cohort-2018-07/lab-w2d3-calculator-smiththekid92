//

document.getElementById('clear')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText = ""
})

document.querySelector('.calc_input7')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 7
})

document.querySelector('.calc_input8')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 8
})

document.querySelector('.calc_input9')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 9
})

document.getElementById('division')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += "/"
})

document.querySelector('.calc_input4')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 4
})

document.querySelector('.calc_input5')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 5
})

document.querySelector('.calc_input6')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 6
})

document.getElementById('multiplication')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += "*"
})

document.querySelector('.calc_input1')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 1
})

document.querySelector('.calc_input2')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 2
})

document.querySelector('.calc_input3')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 3
})

document.getElementById('subtraction')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += "-"
})

document.querySelector('.calc_input0')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += 0
})

document.getElementById('dot')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += "."
})

document.getElementById('equal')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText = eval (document.querySelector('.calc_text').innerText)
})

document.getElementById('plus')
.addEventListener('click', function(){
    document.querySelector('.calc_text') .innerText += "+"
})