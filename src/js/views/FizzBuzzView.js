// 1. CONSTANTES

const resultFBArea = document.querySelector("#fbResult")

// B. CONSTANTES - EXPORTACIONES

export const getInputFizzBuzz = document.querySelector("#fizzBuzzInput")

// 2. FUNCIONES - CONSTANTES

// 2. FUNCIONES - EXPORTACIONES

export const parseInputFizzBuzz = (input) => parseInt(input.value)

export const clearFizzBuzz = (area) => resultFBArea.innerHTML = ""

export const renderFizzBuzzView = (result) => {
    let markup = ''
    for(let i=0; i < result.length; i++) {
        markup += `
            <span>
                ${result[i]}
                <br>
            </span>
        `    
    }
    resultFBArea.insertAdjacentHTML('beforeend', markup)
}