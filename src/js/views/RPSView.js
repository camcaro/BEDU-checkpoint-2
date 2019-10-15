// 1. CONSTANTES

const resultArea = document.querySelector("#RPSResult")

// B. CONSTANTES - EXPORTACIONES

// 2. FUNCIONES - CONSTANTES

// 2. FUNCIONES - EXPORTACIONES

export const clearRPS = (area) => resultArea.innerHTML = ""

export const renderRPSView = (result) => {
    const markup = `
        <span>
            ${result}
        </span>
    `

    resultArea.insertAdjacentHTML('beforeend', markup)
}