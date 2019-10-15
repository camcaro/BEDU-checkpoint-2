// 1. CONSTANTES

const resultFBArea = document.querySelector("#fizzBuzzResult")

// B. CONSTANTES - EXPORTACIONES

export const getInputFizzBuzz = document.querySelector("#fizzBuzzInput")

// 2. FUNCIONES - CONSTANTES

// 2. FUNCIONES - EXPORTACIONES

export const parseInputFizzBuzz = (input) => parseInt(input.value)

export const clearFizzBuzz = (area) => resultFBArea.innerHTML = ""

export const renderFizzBuzzView = (result) => {
    console.log(document.querySelector("#fizzBuzzResult"))
    const markup = `
        <span>
            ${result}
        </span>
    `
    resultFBArea.insertAdjacentHTML('beforeend', markup)
}