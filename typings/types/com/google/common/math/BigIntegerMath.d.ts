import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { RoundingMode } from '../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BigIntegerMath extends Object {
    static binomial(paramn: number, paramk: number): BigInteger;
    static ceilingPowerOfTwo(paramx: BigInteger): BigInteger;
    static divide(paramp: BigInteger, paramq: BigInteger, parammode: RoundingMode): BigInteger;
    static factorial(paramn: number): BigInteger;
    static floorPowerOfTwo(paramx: BigInteger): BigInteger;
    static isPowerOfTwo(paramx: BigInteger): boolean;
    static log10(paramx: BigInteger, parammode: RoundingMode): number;
    static log2(paramx: BigInteger, parammode: RoundingMode): number;
    static roundToDouble(paramx: BigInteger, parammode: RoundingMode): number;
    static sqrt(paramx: BigInteger, parammode: RoundingMode): BigInteger;
    private constructor()
}