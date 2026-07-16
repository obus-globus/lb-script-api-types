import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Mth extends Object {
    static MASK_16: number;
    static MASK_32: number;
    static MASK_48: number;
    static MASK_8: number;
    static bigMask(paramarg0: BigInteger, paramarg1: number): BigInteger;
    static clamp<T extends Comparable<T>>(paramarg0: T, paramarg1: T, paramarg2: T): T;
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getBigMask(paramarg0: number): BigInteger;
    static getBigPow2(paramarg0: number): BigInteger;
    static getMask(paramarg0: number): number;
    static getMax<T extends Comparable<T>>(...paramarg0: T[]): T;
    static getMin<T extends Comparable<T>>(...paramarg0: T[]): T;
    static getPow2(paramarg0: number): number;
    static isPowerOf2(paramarg0: BigInteger): boolean;
    static isPowerOf2(paramarg0: number): boolean;
    static mask(paramarg0: number, paramarg1: number): number;
    static maskSigned(paramarg0: number, paramarg1: number): number;
    static max(...paramarg0: number[]): number;
    static min(...paramarg0: number[]): number;
    static modInverse(paramarg0: number): number;
    static modInverse(paramarg0: number, paramarg1: number): number;
    static modInverseOld(paramarg0: number, paramarg1: number): number;
    constructor()
}