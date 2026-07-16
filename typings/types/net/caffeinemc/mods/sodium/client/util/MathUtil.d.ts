import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vector3dc } from '../../../../../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../../../../../org/joml/Vector3fc.d.ts'
export class MathUtil extends Object {
    static align(paramarg0: number, paramarg1: number): number;
    static comparableIntToFloat(paramarg0: number): number;
    static exponentialMovingAverage(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static floatDoubleDot(paramarg0: Vector3fc, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static floatDoubleDot(paramarg0: Vector3fc, paramarg1: Vector3dc): number;
    static floatToComparableInt(paramarg0: number): number;
    static isPowerOfTwo(paramarg0: number): boolean;
    static toMib(paramarg0: number): number;
    constructor()
}