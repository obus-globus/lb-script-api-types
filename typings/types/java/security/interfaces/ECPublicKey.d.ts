import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { ECKey } from '../../../java/security/interfaces/ECKey.d.ts'
import type { ECParameterSpec } from '../../../java/security/spec/ECParameterSpec.d.ts'
import type { ECPoint } from '../../../java/security/spec/ECPoint.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ECPublicKey extends PublicKey, ECKey, Object{
    getParams(): ECParameterSpec;
    getW(): ECPoint;
}