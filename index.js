let preInput= document.getElementById('pre-input')
let Input= document.getElementById('input')

let calculation = ''

function touch(id){

     let numId =  document.getElementById(id)

     calculation = calculation + numId.innerText

     Input.innerHTML = calculation
}

function total(){

    preInput.innerHTML = calculation

    Input.innerHTML = eval(calculation)

    calculation = ''
}

function erase(){

    Input.innerHTML = 0

    preInput.innerHTML = calculation + '=' + eval(calculation)

    calculation = ''

}