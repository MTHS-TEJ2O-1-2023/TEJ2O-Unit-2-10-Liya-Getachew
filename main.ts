/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew
 * Created on: Oct 2023
 * This program uses light level to determine how many leds should turn on.
*/

basic.clearScreen()
basic.showIcon(IconNames.Heart)

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Heart)

input.onButtonPressed(Button.A, function () {
  if (input.lightLevel() <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showIcon(IconNames.Heart)
  }

  if (input.lightLevel() > 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    basic.showIcon(IconNames.Heart)
    neopixelStrip.show()
  }

  if (input.lightLevel() <= 104) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    basic.showIcon(IconNames.Heart)
    neopixelStrip.show()
  }

  if (input.lightLevel() > 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    basic.showIcon(IconNames.Heart)
    neopixelStrip.show()
  }

  if (input.lightLevel() > 208) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    basic.showIcon(IconNames.Heart)
    neopixelStrip.show()
  }
})
