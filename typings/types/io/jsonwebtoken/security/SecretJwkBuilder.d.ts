import type { JavaMap } from '../../../JavaMap.d.ts'
import type { JwkBuilder } from '../../../io/jsonwebtoken/security/JwkBuilder.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SecretJwkBuilder extends JwkBuilder<SecretKey, JavaMap<any, any>, SecretJwkBuilder>, Object{
}