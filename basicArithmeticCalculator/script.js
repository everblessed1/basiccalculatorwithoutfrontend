let operator = prompt('Please enter operator you want to perform (+, -, *, /): ')
let num1 = parseInt(prompt('Enter First Number: ')) 
let num2 = parseInt(prompt('Enter Second Number: '))


if(operator === '+')
{
    let result= num1 + num2
    prompt('The result is:  ' + result)
}

else if(operator === '-')
{
    let result= num1 - num2
    prompt('The result is:  ' + result)
}


else if(operator === '*')
{
    let result= num1 * num2
    prompt('The result is:  ' + result)
}

else if(operator === '/')
{
    let result= num1 / num2
    prompt('The result is:  ' + result)
}
