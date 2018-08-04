const { SayHello } = require("./production")

const TestSayHelloShouldBeHelloJavascript = () => {
    const expectedMessage = "Hello Javascript"

    const actualMessage = SayHello("Javascript")

    if (actualMessage != expectedMessage) {
        console.error("expect '%s' but it got '%s'",
            expectedMessage, actualMessage)
    }
}

TestSayHelloShouldBeHelloJavascript()
