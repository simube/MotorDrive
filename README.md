# MotorDrive Extension
This extension was created by Simube based on the Extension motor:bit

It is designed to work with the "Motor Drive Breakout Board for Micro:Bit" from Whadda / Velleman
WPI403 or VMM403

[Link to product](https://www.velleman.eu/products/view?id=455662)

![](https://github.com/simube/MotorDrive/blob/master/icon.png?raw=true)



## Code Example
```JavaScript
input.onButtonPressed(Button.A, function () {
    motordrive.move(Motors.A, Directions.Forward, 63)
})
input.onButtonPressed(Button.B, function () {
    motordrive.move(Motors.A, Directions.Forward, 0)
})
motordrive.activate()
```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)

