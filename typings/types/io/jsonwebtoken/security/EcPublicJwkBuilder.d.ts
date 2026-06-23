import type { EcPrivateJwkBuilder } from '../../../io/jsonwebtoken/security/EcPrivateJwkBuilder.d.ts'
import type { PublicJwkBuilder } from '../../../io/jsonwebtoken/security/PublicJwkBuilder.d.ts'
import type { ECPrivateKey } from '../../../java/security/interfaces/ECPrivateKey.d.ts'
import type { ECPublicKey } from '../../../java/security/interfaces/ECPublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface EcPublicJwkBuilder extends PublicJwkBuilder<ECPublicKey, ECPrivateKey, { [key: string]: any }, { [key: string]: any }, EcPrivateJwkBuilder, EcPublicJwkBuilder>, Object{
}