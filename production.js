const PREFIX_MESSAGE = "Hello"

const SayHello = (message) => {
    return greeting(message)
}

const greeting = (message) => {
    if (isEmpty(message)) {
        message = "Thailand"
    }
    return `${PREFIX_MESSAGE} ${message}`
}

const isEmpty = (message) => {
    return message.length === 0
}

module.exports = {
    SayHello
}
