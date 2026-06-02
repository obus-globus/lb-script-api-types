import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ECPoint extends Object {
    static POINT_INFINITY: ECPoint;
    private constructor()
    constructor(arg0: BigInteger, arg1: BigInteger)
    // private x: BigInteger;
    // private y: BigInteger;
    equals(arg0: Object | null): boolean;
    getAffineX(): BigInteger;
    getAffineY(): BigInteger;
    hashCode(): number;
}