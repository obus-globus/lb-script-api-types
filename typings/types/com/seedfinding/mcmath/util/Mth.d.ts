import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Mth extends Object {
    static MASK_16: number;
    static MASK_32: number;
    static MASK_48: number;
    static MASK_8: number;
    static bigMask(paramarg0: BigInteger, paramarg1: number): BigInteger;
    static clamp(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getBigMask(paramarg0: number): BigInteger;
    static getBigPow2(paramarg0: number): BigInteger;
    static getMask(paramarg0: number): number;
    static getMax(paramarg0: Object | null): Object | null;
    static getMin(paramarg0: Object | null): Object | null;
    static getPow2(paramarg0: number): number;
    static isPowerOf2(paramarg0: BigInteger): boolean;
    static isPowerOf2(paramarg0: number): boolean;
    static mask(paramarg0: number, paramarg1: number): number;
    static maskSigned(paramarg0: number, paramarg1: number): number;
    static max(paramarg0: number[]): number;
    static max(paramarg0: number[]): number;
    static max(paramarg0: number[]): number;
    static max(paramarg0: number[]): number;
    static min(paramarg0: number[]): number;
    static min(paramarg0: number[]): number;
    static min(paramarg0: number[]): number;
    static min(paramarg0: number[]): number;
    static modInverse(paramarg0: number): number;
    static modInverse(paramarg0: number, paramarg1: number): number;
    static modInverseOld(paramarg0: number, paramarg1: number): number;
    constructor()
}