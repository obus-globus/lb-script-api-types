import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { RoundingMode } from '../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class DoubleMath extends Object {
    static factorial(paramn: number): number;
    static fuzzyCompare(parama: number, paramb: number, paramtolerance: number): number;
    static fuzzyEquals(parama: number, paramb: number, paramtolerance: number): boolean;
    static isMathematicalInteger(paramx: number): boolean;
    static isPowerOfTwo(paramx: number): boolean;
    static log2(paramx: number): number;
    static log2(paramx: number, parammode: RoundingMode): number;
    static mean(paramvalues: number[]): number;
    static mean(paramvalues: number[]): number;
    static mean(paramvalues: Number[]): number;
    static mean(paramvalues: Iterator<Number>): number;
    static mean(paramvalues: number[]): number;
    static roundToBigInteger(paramx: number, parammode: RoundingMode): BigInteger;
    static roundToInt(paramx: number, parammode: RoundingMode): number;
    static roundToLong(paramx: number, parammode: RoundingMode): number;
    private constructor()
}