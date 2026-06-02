import type { RoundingMode } from '../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LongMath extends Object {
    static binomial(paramn: number, paramk: number): number;
    static ceilingPowerOfTwo(paramx: number): number;
    static checkedAdd(parama: number, paramb: number): number;
    static checkedMultiply(parama: number, paramb: number): number;
    static checkedPow(paramb: number, paramk: number): number;
    static checkedSubtract(parama: number, paramb: number): number;
    static divide(paramp: number, paramq: number, parammode: RoundingMode): number;
    static factorial(paramn: number): number;
    static floorPowerOfTwo(paramx: number): number;
    static gcd(parama: number, paramb: number): number;
    static isPowerOfTwo(paramx: number): boolean;
    static isPrime(paramn: number): boolean;
    static log10(paramx: number, parammode: RoundingMode): number;
    static log2(paramx: number, parammode: RoundingMode): number;
    static mean(paramx: number, paramy: number): number;
    static mod(paramx: number, paramm: number): number;
    static mod(paramx: number, paramm: number): number;
    static pow(paramb: number, paramk: number): number;
    static roundToDouble(paramx: number, parammode: RoundingMode): number;
    static saturatedAbs(paramx: number): number;
    static saturatedAdd(parama: number, paramb: number): number;
    static saturatedMultiply(parama: number, paramb: number): number;
    static saturatedPow(paramb: number, paramk: number): number;
    static saturatedSubtract(parama: number, paramb: number): number;
    static sqrt(paramx: number, parammode: RoundingMode): number;
    private constructor()
}