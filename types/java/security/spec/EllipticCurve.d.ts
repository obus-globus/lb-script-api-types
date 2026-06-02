import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { ECField } from '../../../java/security/spec/ECField.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EllipticCurve extends Object {
    constructor(arg0: ECField, arg1: BigInteger, arg2: BigInteger)
    constructor(arg0: ECField, arg1: BigInteger, arg2: BigInteger, arg3: number[])
    readonly a: BigInteger;
    readonly b: BigInteger;
    readonly field: ECField;
    readonly seed: number[];
    equals(arg0: Object | null): boolean;
    getA(): BigInteger;
    getB(): BigInteger;
    getField(): ECField;
    getSeed(): number[];
    hashCode(): number;
}