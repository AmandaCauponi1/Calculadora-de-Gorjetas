const input = document.querySelectorAll('.input')
const btn = document.getElementById('btn')
const value = document.querySelectorAll('.value')
const resposta = document.getElementById('resposta')
const outresposta = document.getElementById('outresposta')
const cant = document.getElementById('cant')
const custom = document.getElementById('custom')
const percentage = document.querySelectorAll('.percentage')
input.forEach((campo) => {
    campo.addEventListener('click', () => {
    if((campo.value) === '' || (campo.value) == 0){
        campo.style.outline = '1px solid brown'

        cant.innerHTML = `Can't be 0`
        cant.style.color = 'brown'
        cant.style.fontSize = '1rem'
        cant.style.display.justifyContent = 'end'

       
    }else {
        input.style.outline = '1px solid blue'
        console.log(input)
    }
})
    
})

// btn.addEventListener('click', () => {
//     resposta.innerHTML = ` $ 0.00`
//     resposta.style.color = 'hsl(172, 67%, 45%)'
//     resposta.style.fontSize = '2rem'

//     outresposta.innerHTML = ` $ 0.00`
//     outresposta.style.color = 'hsl(172, 67%, 45%)'
//     value.style.p = 'none'
    
// })
btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'hsl(185, 41%, 84%)'
})
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'hsl(172, 67%, 45%)'
})

custom.addEventListener('click', () => {
    custom.style.outline = '1px solid hsl(172, 67%, 45%)'
})
percentage.forEach((percent) => {
    percent.addEventListener('click', () => {
        percent.style.backgroundColor = ' hsl(172, 67%, 45%'
        percent.style.Color = ' hsl(183, 100%, 15%)'
    
    })
})
