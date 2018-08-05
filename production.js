const PREFIX_MESSAGE = "Hello"
const DEFAULT_EMPTY_MESSAGE = "Thailand"

const SayHello = (message) => {
    return greeting(message)
}

const greeting = (message) => {
    let messageWithTrim = message.trim()
    if (isEmpty(messageWithTrim)) {
        messageWithTrim = DEFAULT_EMPTY_MESSAGE
    }
    return `${PREFIX_MESSAGE} ${messageWithTrim}`
}

const isEmpty = (message) => {
    return message.length === 0
}

module.exports = {
    SayHello
}
