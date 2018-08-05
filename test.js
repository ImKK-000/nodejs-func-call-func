const { SayHello } = require("./production")

const TestSayHelloInputJavascriptShouldBeHelloJavascript = () => {
    const expectedMessage = "Hello Javascript"

    const actualMessage = SayHello("Javascript")

    if (actualMessage != expectedMessage) {
        console.error("expect '%s' but it got '%s'",
            expectedMessage, actualMessage)
    }
}
TestSayHelloInputJavascriptShouldBeHelloJavascript()

const TestSayHelloEmptyMessageShouldBeHelloThailand = () => {
    const expectedMessage = "Hello Thailand"

    const actualMessage = SayHello("")

    if (actualMessage != expectedMessage) {
        console.error("expect '%s' but it got '%s'",
            expectedMessage, actualMessage)
    }
}
TestSayHelloEmptyMessageShouldBeHelloThailand()
