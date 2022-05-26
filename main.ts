input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    P0_Reading = pins.analogReadPin(AnalogPin.P0)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Delta Reading")
    Delta_Reading = P0_Reading - P1_Reading
    basic.showNumber(Delta_Reading)
    basic.pause(2000)
    basic.clearScreen()
    basic.showString("Measured Voltage")
    Max_Reading = 1023
    Output_Voltage = 3.3
    Measured_Voltage = Output_Voltage * (Delta_Reading / Max_Reading)
    basic.showNumber(Measured_Voltage)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    P1_Reading = pins.analogReadPin(AnalogPin.P1)
    basic.pause(2000)
    basic.clearScreen()
})
let Measured_Voltage = 0
let Output_Voltage = 0
let Max_Reading = 0
let P1_Reading = 0
let Delta_Reading = 0
let P0_Reading = 0
basic.showString("Voltmeter")
basic.forever(function () {
	
})
