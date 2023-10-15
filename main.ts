/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew
 * Created on: Oct 2023
 * This program uses light level to determine how many leds should turn on.
*/

basic.clearScreen()
basic.showIcon(IconNames.Umbrella)

// variables
let neopixelStrip: neopixel.Strip = null
let amountOfLight: number

// cleanup
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
  amountOfLight = input.lightLevel()
  if (amountOfLight <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }

  if (amountOfLight > 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }

  if (amountOfLight > 104) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }

  if (amountOfLight > 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }

  if (amountOfLight > 208) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }
  basic.showIcon(IconNames.Duck)
})
