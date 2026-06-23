import type { JwkBuilder } from '../../../io/jsonwebtoken/security/JwkBuilder.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SecretJwkBuilder extends JwkBuilder<SecretKey, { [key: string]: any }, SecretJwkBuilder>, Object{
}