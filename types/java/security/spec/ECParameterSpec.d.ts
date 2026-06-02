import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { AlgorithmParameterSpec } from '../../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { ECPoint } from '../../../java/security/spec/ECPoint.d.ts'
import type { EllipticCurve } from '../../../java/security/spec/EllipticCurve.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ECParameterSpec extends Object implements AlgorithmParameterSpec {
    constructor(arg0: EllipticCurve, arg1: ECPoint, arg2: BigInteger, arg3: number)
    readonly curve: EllipticCurve;
    // private g: ECPoint;
    // private h: number;
    // private n: BigInteger;
    getCofactor(): number;
    getCurve(): EllipticCurve;
    getGenerator(): ECPoint;
    getOrder(): BigInteger;
}