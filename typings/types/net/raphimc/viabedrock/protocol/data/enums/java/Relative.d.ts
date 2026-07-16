import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Relative extends Enum<Relative> {
    static DELTA_X: Relative;
    static DELTA_Y: Relative;
    static DELTA_Z: Relative;
    static NONE: Relative[];
    static ROTATE_DELTA: Relative;
    static ROTATION: Relative[];
    static VELOCITY: Relative[];
    static X: Relative;
    static X_ROT: Relative;
    static Y: Relative;
    static Y_ROT: Relative;
    static Z: Relative;
    static union(...paramarg0: Relative[][]): Relative[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Relative;
    static values(): Relative[];
    private constructor()
    getBit(): number;
    name(): "X" | "Y" | "Z" | "Y_ROT" | "X_ROT" | "DELTA_X" | "DELTA_Y" | "DELTA_Z" | "ROTATE_DELTA";
}