const Rps = (RPSSelected) => {
    // const result
    let RPSCounterSelected = 0
    const randomN = Math.random()
    // console.log(randomN)
    if(randomN < .333) RPSCounterSelected = 'rock'
    else if(randomN < .667) RPSCounterSelected = 'paper'
    else RPSCounterSelected = 'scissors'
    // console.log(RPSCounterSelected)
    if(RPSSelected === RPSCounterSelected) return 'Tied'
    else if ((RPSSelected === 'rock' && RPSCounterSelected === 'scissors') || (RPSSelected === 'paper' && RPSCounterSelected === 'rock') || (RPSSelected === 'scissors' && RPSCounterSelected === 'paper')) return "You win!"
    else return "You lose"
}

export default Rps