enum RadioMessage {
    left = 14947,
    forward = 16348,
    right = 32391,
    message1 = 49434,
    stop = 61268
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        robobit.RBBias(RBRobotDirection.Left, 5)
        robobit.go(RBDirection.Forward, 75)
    }
    if (receivedNumber == 1) {
        robobit.rotatems(RBRobotDirection.Left, 75, 60)
    }
    if (receivedNumber == 2) {
        robobit.rotatems(RBRobotDirection.Right, 75, 60)
    }
    if (receivedNumber == 3) {
    	
    }
    if (receivedNumber == 4) {
        robobit.stop(RBStopMode.Coast)
    }
})
input.onButtonPressed(Button.A, function () {
    freqBand += -1
    if (freqBand <= 0) {
        freqBand = 15
    }
    radio.setFrequencyBand(freqBand)
    basic.showNumber(freqBand)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    freqBand += 1
    if (freqBand >= 15) {
        freqBand = 1
    }
    radio.setFrequencyBand(freqBand)
    basic.showNumber(freqBand)
    basic.pause(500)
    basic.clearScreen()
})
let freqBand = 0
robobit.select_model(RBModel.Mk1)
radio.setGroup(1)
freqBand = 1
radio.setFrequencyBand(freqBand)
