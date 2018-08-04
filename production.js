const SayHello = (message) => {
    return greeting(message)
}

const greeting = (message) => {
    return `Hello ${message}`
}

module.exports = {
    SayHello
}
