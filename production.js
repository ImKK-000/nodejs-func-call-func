const PREFIX_MESSAGE = "Hello"

const SayHello = (message) => {
    return greeting(message)
}

const greeting = (message) => {
    return `${PREFIX_MESSAGE} ${message}`
}

module.exports = {
    SayHello
}
