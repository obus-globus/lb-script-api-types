import type { PrivateJwkBuilder } from '../../../io/jsonwebtoken/security/PrivateJwkBuilder.d.ts'
import type { RSAPrivateKey } from '../../../java/security/interfaces/RSAPrivateKey.d.ts'
import type { RSAPublicKey } from '../../../java/security/interfaces/RSAPublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RsaPrivateJwkBuilder extends PrivateJwkBuilder<RSAPrivateKey, RSAPublicKey, RsaPublicJwk, RsaPrivateJwk, RsaPrivateJwkBuilder>, Object{
}