/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum Motors {
    //% block="Motor 1"
    Motor1 = 1,
    //% block="Motor 2"
    Motor2 = 2
}

//% color=#0fbc11 weight=10 icon="\uf1b9"
namespace motorbit {

    /**
     * Choose, which motor you want to control
    */
    //% weight=2 blockGap=8
    //% blockId="neopixel_motors" block="%motor"
    export function motors(motor: Motors): number {
        return motor;
    }
    
    /**
    * TODO: describe your function here
    * @param n the n from 0 (min) to 100 (max), eg:0
    */
    //% blockId=motorbit_forward block="move %motors|forward with speed %n"
    //% n.min=0 n.max=100
    export function forward(motors: motor, n: number): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)

        pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)

    }


    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:0
     */
    //% blockId=motorbit_back block="move %motors|back with speed %n"
    //% n.min=0 n.max=100
    export function back(motors: motor, n: number): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)

        pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)

    }

}
 
