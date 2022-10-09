enum Motors {
    //% block="Motor on A1/A2"
    A1A2 = 1,
    //% block="Motor on B1/B2"
    B1B2 = 2
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
    * Put this block in the "on start" block
    */
    //% blockId=motordrive_activate
    //% block="Activate MotorDrive"
    export function activate(): void {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }

    /**
     * Choose the direction of rotation
     * @param direction the direction to rotate
    */
    //% weight=2 blockGap=8
    //% blockId="motordrive_directions"
    //% block="Direction %direction"
    export function directions(direction: Directions): number {
        return direction;
    }
    
    /**
     * Choose, which motor you want to control
     * @param motor the motor to control (A or B)
    */
    //% weight=2 blockGap=8
    //% blockId="motordrive_motors"
    //% block="Motor %motor"
    export function motors(motor: Motors): number {
        return motor;
    }
    
    /**
    * Turns the motor in the chosen direction
    * @param motor the motor to control (A or B)
    * @param direction the direction to rotate
    * @param n the n from 0 (min) to 100 (max), eg:0
    */
    //% blockId=motordrive_move
    //% block="move Motor %motor | %direction | with speed %n"
    //% n.min=0 n.max=100
    export function move(motor: Motors, direction: Directions, n: number): void {
        if (motor === Motors.A1A2) {
            pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)
    
            pins.digitalWritePin(DigitalPin.P12, direction === Directions.Forward ? 1 : 0)
            pins.digitalWritePin(DigitalPin.P13, direction === Directions.Forward ? 0 : 1)
        } else {
            pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)
    
            pins.digitalWritePin(DigitalPin.P15, direction === Directions.Forward ? 1 : 0)
            pins.digitalWritePin(DigitalPin.P16, direction === Directions.Forward ? 0 : 1)
        }

    }

}
 
