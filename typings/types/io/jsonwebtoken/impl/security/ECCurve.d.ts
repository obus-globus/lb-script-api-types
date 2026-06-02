import type { AbstractCurve } from '../../../../io/jsonwebtoken/impl/security/AbstractCurve.d.ts'
import type { KeyPairBuilder } from '../../../../io/jsonwebtoken/security/KeyPairBuilder.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { ECParameterSpec } from '../../../../java/security/spec/ECParameterSpec.d.ts'
import type { ECPoint } from '../../../../java/security/spec/ECPoint.d.ts'
export class ECCurve extends AbstractCurve {
    static P256: ECCurve;
    static P384: ECCurve;
    static P521: ECCurve;
    static VALUES: E[];
    constructor(arg0: string, arg1: string)
    // private spec: ECParameterSpec;
    // private add(arg0: ECPoint, arg1: ECPoint): ECPoint;
    contains(arg0: Key): boolean;
    contains(arg0: ECPoint): boolean;
    // private doublePoint(arg0: ECPoint): ECPoint;
    keyPair(): KeyPairBuilder;
    // private multiply(arg0: BigInteger): ECPoint;
    // private multiply(arg0: ECPoint, arg1: BigInteger): ECPoint;
    toParameterSpec(): ECParameterSpec;
}