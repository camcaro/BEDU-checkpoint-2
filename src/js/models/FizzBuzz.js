const FizzBuzz = (numbersToGenerate) => {
    let result = []
    for(let i=0; i < numbersToGenerate; i++) {
        let randomInteger = Math.floor(Math.random()*(100))
        let element = `${randomInteger}`
        if(randomInteger % 3 === 0 && randomInteger % 5 === 0) {
            element += ' FIZZBUZZ'
        } else if(randomInteger % 3 === 0) {
            element += ' Fizz'
        } else if(randomInteger % 5 === 0) {
            element += ' Buzz'
        }
        result.push(element)
    }

    console.log(result)
    return result
}

export default FizzBuzz