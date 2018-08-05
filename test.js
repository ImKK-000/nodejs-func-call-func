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

const TestSayHelloInputEmptyMessageShouldBeHelloThailand = () => {
    const expectedMessage = "Hello Thailand"

    const actualMessage = SayHello("")

    if (actualMessage != expectedMessage) {
        console.error("expect '%s' but it got '%s'",
            expectedMessage, actualMessage)
    }
}
TestSayHelloInputEmptyMessageShouldBeHelloThailand()

const TestSayHelloInputWhiteSpaceMessageShouldBeHelloThailand = () => {
    const expectedMessage = "Hello Thailand"

    const actualMessage = SayHello(" ")

    if (actualMessage != expectedMessage) {
        console.error("expect '%s' but it got '%s'",
            expectedMessage, actualMessage)
    }
}
TestSayHelloInputWhiteSpaceMessageShouldBeHelloThailand()
