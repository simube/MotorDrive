/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum Motors {
    //% block="Motor A"
    MotorA = 1,
    //% block="Motor B"
    MotorB = 2
}

enum Directions {
    //% block="forwards"
    Forward = 1,
    //% block="backwards"
    Backward = 2
}

//% color=#16ADEC weight=10 icon="\uf21c"
namespace motordrive {

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
    * @param motor the motor to control (A or B)
    * @param n the n from 0 (min) to 100 (max), eg:0
    */
    //% blockId=motordrive_move block="move %motor | %direction | with speed %n"
    //% n.min=0 n.max=100
    export function move(motor: Motors, direction: Directions, n: number): void {
        if (motor === Motors.MotorA) {
            let pinSpeed = AnalogPin.P1
            let pin1 = DigitalPin.P12
            let pin2 = DigitalPin.P13
        } else {
            let pinSpeed = AnalogPin.P2
            let pin1 = DigitalPin.P15
            let pin2 = DigitalPin.P16
        }

        pins.analogWritePin(pinSpeed, n * 1023 / 100)

        pins.digitalWritePin(pin1, direction === Directions.Forward ? 1 : 0)
        pins.digitalWritePin(pin2, direction === Directions.Forward ? 0 : 1)
    }

}
 
