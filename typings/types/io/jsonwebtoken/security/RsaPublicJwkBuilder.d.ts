import type { PublicJwkBuilder } from '../../../io/jsonwebtoken/security/PublicJwkBuilder.d.ts'
import type { RsaPrivateJwkBuilder } from '../../../io/jsonwebtoken/security/RsaPrivateJwkBuilder.d.ts'
import type { RSAPrivateKey } from '../../../java/security/interfaces/RSAPrivateKey.d.ts'
import type { RSAPublicKey } from '../../../java/security/interfaces/RSAPublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RsaPublicJwkBuilder extends PublicJwkBuilder<RSAPublicKey, RSAPrivateKey, RsaPublicJwk, RsaPrivateJwk, RsaPrivateJwkBuilder, RsaPublicJwkBuilder>, Object{
}