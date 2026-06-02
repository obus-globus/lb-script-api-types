import type { ECParameterSpec } from '../../../java/security/spec/ECParameterSpec.d.ts'
import type { ECPoint } from '../../../java/security/spec/ECPoint.d.ts'
import type { KeySpec } from '../../../java/security/spec/KeySpec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ECPublicKeySpec extends Object implements KeySpec {
    constructor(arg0: ECPoint, arg1: ECParameterSpec)
    readonly params: ECParameterSpec;
    readonly w: ECPoint;
    getParams(): ECParameterSpec;
    getW(): ECPoint;
}