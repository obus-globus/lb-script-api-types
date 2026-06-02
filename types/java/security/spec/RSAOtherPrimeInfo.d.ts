import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RSAOtherPrimeInfo extends Object {
    constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger)
    readonly crtCoefficient: BigInteger;
    readonly prime: BigInteger;
    // private primeExponent: BigInteger;
    getCrtCoefficient(): BigInteger;
    getExponent(): BigInteger;
    getPrime(): BigInteger;
}