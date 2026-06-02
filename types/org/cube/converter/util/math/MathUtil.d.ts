import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Position3V } from '../../../../../org/cube/converter/util/element/Position3V.d.ts'
export class MathUtil extends Object {
    static canDoHacky(paramarg0: number, paramarg1: boolean): boolean;
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static closeEnoughAbs(paramarg0: number, paramarg1: number): boolean;
    static isValidJavaAngle(paramarg0: number, paramarg1: boolean): boolean;
    static isValidRotation(paramarg0: Position3V): boolean;
    static limitAngle(paramarg0: number, paramarg1: boolean): number;
    static toHackyAngle(paramarg0: number): number;
    private constructor()
}