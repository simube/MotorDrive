/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum Motors {
    //% block="Motor A"
    MotorA = 1,
    //% block="Motor B"
    MotorB = 2
}

//% color=#0fbc11 weight=10 icon="\uf1b9"
namespace motorbit {

    /**
     * Choose, which motor you want to control
    */
    //% weight=2 blockGap=8
    //% blockId="motordrive_motors" block="%motor"
    export function motors(motor: Motors): number {
        return motor;
    }
    

    /**
    * TODO: describe your function here
    */
    //% blockId=motordrive_activate block="activate MotorDrive"
    export function activate(): void {

        pins.digitalWritePin(DigitalPin.P14, 1)

    }
    
    /**
    * TODO: describe your function here
    * @param n the n from 0 (min) to 100 (max), eg:0
    */
    //% blockId=motordrive_forwards block="move %motors|forward with speed %n"
    //% n.min=0 n.max=100
    export function forwards(motors: motor, n: number): void {

        if (motors === 1) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P13, 1)
    
            pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)
            
        } else {
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
    
            pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)
            
        }

    }


    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:0
     */
    //% blockId=motordrive_backwards block="move %motors|backwards with speed %n"
    //% n.min=0 n.max=100
    export function backwards(motors: motor, n: number): void {

        if (motors === 1) {
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P13, 0)
    
            pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)
            
        } else {
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
    
            pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)
            
        }

    }

}
 
