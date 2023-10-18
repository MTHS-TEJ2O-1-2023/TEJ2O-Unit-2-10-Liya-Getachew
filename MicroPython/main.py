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

# clean up
neopixel_strip[0] = (0, 0, 0)
neopixel_strip[1] = (0, 0, 0)
neopixel_strip[2] = (0, 0, 0)
neopixel_strip[3] = (0, 0, 0)
print(neopixel_strip[0])
print(neopixel_strip[1])
print(neopixel_strip[2])
print(neopixel_strip[3])
neopixel_strip.show()

# loop
while True:
    if button_a.is_pressed():
        display.clear()
        # if amount_of_light is <= 51
        if amount_of_light <= 51:
            neopixel_strip[0] = (0, 0, 0)
            print(neopixel_strip[0])
            neopixel_strip.show()

        # if amount_of_light is >= 52
        if amount_of_light >= 52:
            neopixel_strip[0] = (0, 0, 255)
            print(neopixel_strip[0])
            neopixel_strip.show()

        # if amount_of_light is > 104
        if amount_of_light > 104:
            neopixel_strip[0] = (0, 0, 255)
            neopixel_strip[1] = (0, 0, 255)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            neopixel_strip.show()

        # if amount_of_light is > 156
        if amount_of_light > 156:
            neopixel_strip[0] = (0, 0, 255)
            neopixel_strip[1] = (0, 0, 255)
            neopixel_strip[2] = (0, 0, 255)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            neopixel_strip.show()

        # if amount_of_light is > 208
        if amount_of_light > 208:
            neopixel_strip[0] = (0, 0, 255)
            neopixel_strip[1] = (0, 0, 255)
            neopixel_strip[2] = (0, 0, 255)
            neopixel_strip[3] = (0, 0, 255)
            print(neopixel_strip[0])
            print(neopixel_strip[1])
            print(neopixel_strip[2])
            print(neopixel_strip[3])
            neopixel_strip.show()

    # reset light level
    if button_b.is_pressed():
        display.clear()
        neopixel_strip[0] = (0, 0, 0)
        neopixel_strip[1] = (0, 0, 0)
        neopixel_strip[2] = (0, 0, 0)
        neopixel_strip[3] = (0, 0, 0)
        print(neopixel_strip[0])
        print(neopixel_strip[1])
        print(neopixel_strip[2])
        print(neopixel_strip[3])
        neopixel_strip.show()
