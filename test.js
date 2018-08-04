const Greeting = require("./production")

const TestSayHelloShouldBeHelloJavascript = () => {
    const expectedMessage = "Hello Javascript"

    const actualMessage = Greeting.SayHello()

    if (actualMessage != expectedMessage) {
        console.error("expect '%s' but it got '%s'",
            expectedMessage, actualMessage)
    }
}

TestSayHelloShouldBeHelloJavascript()
