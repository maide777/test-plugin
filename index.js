const { num5 } = require("./second_use")

const num1 = 1
const num2 = 2

const num3 = num1 + num2

function calculate_nym3() {
    return num1 + num2
}


function calculate_nym6() {
    return calculate_nym3() - num5
}

module.exports = { calculate_nym3, calculate_nym6 }