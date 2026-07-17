import type { JavaMap } from '../../../JavaMap.d.ts'
import type { PrivateJwkBuilder } from '../../../io/jsonwebtoken/security/PrivateJwkBuilder.d.ts'
import type { ECPrivateKey } from '../../../java/security/interfaces/ECPrivateKey.d.ts'
import type { ECPublicKey } from '../../../java/security/interfaces/ECPublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface EcPrivateJwkBuilder extends PrivateJwkBuilder<ECPrivateKey, ECPublicKey, JavaMap<any, any>, JavaMap<any, any>, EcPrivateJwkBuilder>, Object{
}