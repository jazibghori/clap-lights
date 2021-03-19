let lightON = false
input.onSound(DetectedSound.Loud, function () {
    lightON = !(lightON)
    if (lightON) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
