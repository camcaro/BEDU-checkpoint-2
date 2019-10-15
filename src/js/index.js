//IMPORTACIONES
import Sum from './models/Sum.js'

import * as sumView from './views/SumView'

import styles from '../css/style.css'
import sassStyles from '../scss/style.scss'

//Calculadora

document.querySelector("#sumar").addEventListener(("click"), () => {
    event.preventDefault()

    sumView.clearArea()

    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)

    const resultado = Sum(numA, numB)

    return sumView.renderSumView(resultado)
})

//Fin calculadora