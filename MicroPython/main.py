"""
Created by: Liya Getachew
Created on: Oct 2023 
This module is a Micro:bit MicroPython program uses light level to turn on Neopixels.
"""

from microbit import *
import neopixel

display.clear()
display.show(Image.HEART)

# variables
neopixel_strip = neopixel.NeoPixel(pin16, 4)
amount_of_light = display.read_light_level()

while True:
    if button_a.is_pressed():

        if amount_of_light <= 51:
            neopixel_strip[0] = (0, 0, 0)
            print(neopixel_strip[0])
            neopixel_strip.show()

        if amount_of_light >= 52:
            neopixel_strip[0] = (0, 255, 255)
            print(neopixel_strip[0])
            neopixel_strip.show()

        if amount_of_light > 104:
            neopixel_strip[0] = (0, 255, 255)
            neopixel_strip[1] = (0, 255, 255)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            neopixel_strip.show()

        if amount_of_light > 156:
            neopixel_strip[0] = (0, 255, 255)
            neopixel_strip[1] = (0, 255, 255)
            neopixel_strip[2] = (0, 255, 255)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            neopixel_strip.show()

        if amount_of_light > 208:
            neopixel_strip[0] = (0, 255, 255)
            neopixel_strip[1] = (0, 255, 255)
            neopixel_strip[2] = (0, 255, 255)
            neopixel_strip[3] = (0, 255, 255)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()
