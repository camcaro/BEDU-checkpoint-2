//IMPORTACIONES
import Sum from './models/Sum.js'
import Sub from './models/Subtract.js'
import Div from './models/Divide.js'
import Mul from './models/Multiply.js'
import Rps from './models/Rps.js'
import FizzBuzz from './models/FizzBuzz.js'
import CalculatePayroll from './models/Payroll.js'
// import AddEmployee from './models/Payroll.js'

import * as sumView from './views/SumView'
import * as RPSView from './views/RPSView'
import * as FizzBuzzView from './views/FizzBuzzView'

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

///Rock, Paper, Scissors
document.querySelector("#rock").addEventListener(("click"), (event) => {
    // console.log(event.target.id)
    RPSView.clearRPS()
    return RPSView.renderRPSView(Rps(event.target.id))
})
document.querySelector("#paper").addEventListener(("click"), (event) => {
    // console.log(event.target.id)
    RPSView.clearRPS()
    return RPSView.renderRPSView(Rps(event.target.id))
})
document.querySelector("#scissors").addEventListener(("click"), (event) => {
    // console.log(event.target.id)
    RPSView.clearRPS()
    return RPSView.renderRPSView(Rps(event.target.id))
})


// End Rock, Paper, Scissors


///Fizz Buzz
document.querySelector("#fizzBuzzButton").addEventListener(("click"), () => {
        event.preventDefault()
        // FizzBuzzView.clearFizzBuzz()
        const numFizzBuzz = FizzBuzzView.parseInputFizzBuzz(FizzBuzzView.getInputFizzBuzz)
        // console.log(FizzBuzz(numFizzBuzz))
        console.log(document.querySelector("#test"));
        
        return FizzBuzzView.renderFizzBuzzView(FizzBuzz(numFizzBuzz))
    })
    
//End Fizz Buzz

//Payroll Calculator


document.querySelector("#addEmployeeButton").addEventListener(("click"), () => {
    console.log('addEmployeeButton clicked')
    return "Add employee"
    // AddEmployee()
})

document.querySelector("#calculatePayrollButton").addEventListener(("click"), () => {
    console.log('calculatePayrollButton clicked')
    return alert(CalculatePayroll())
})



// let removeButtonsList = document.querySelectorAll(".removeButton")
// console.log(removeButtonsList[0])
//     removeButtonsList.map((element) => {
//         element.addEventListener(("click"), () => {
//             console.log(element)
//             return alert("Aqui va Delete Employee")
//         })
//         console.log(element)
//     })

//End Payroll Calculator
    