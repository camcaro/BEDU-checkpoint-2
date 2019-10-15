//IMPORTACIONES
import Sum from './models/Sum.js'
import Sub from './models/Subtract.js'
import Div from './models/Divide.js'
import Mul from './models/Multiply.js'

import * as sumView from './views/SumView'

import styles from '../css/style.css'
import sassStyles from '../scss/style.scss'

//Calculator
//Press Sum button
document.querySelector("#sum").addEventListener(("click"), () => {
    event.preventDefault()

    sumView.clearArea()

    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)

    const resultado = Sum(numA, numB)

    return sumView.renderSumView(resultado)
})

//Press Subtract button
document.querySelector("#subtract").addEventListener(("click"), () => {
    event.preventDefault()
    sumView.clearArea()
    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)
    return sumView.renderSumView(Sub(numA,numB))
})

//Press Divide button
document.querySelector("#divide").addEventListener(("click"), () => {
    event.preventDefault()
    sumView.clearArea()
    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)
    return sumView.renderSumView(Div(numA,numB))
})

//Press Multiply button
document.querySelector("#multiply").addEventListener(("click"), () => {
    event.preventDefault()
    sumView.clearArea()
    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)
    return sumView.renderSumView(Mul(numA,numB))
})

//End calculator