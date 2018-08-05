const PREFIX_MESSAGE = "Hello"
const DEFAULT_EMPTY_MESSAGE = "Thailand"

const SayHello = (message) => {
    return greeting(message)
}

const greeting = (message) => {
    if (isEmpty(message)) {
        message = DEFAULT_EMPTY_MESSAGE
    }
    return `${PREFIX_MESSAGE} ${message}`
}

const isEmpty = (message) => {
    return message.length === 0
}

module.exports = {
    SayHello
}
