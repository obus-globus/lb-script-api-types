import type { KeyBuilder } from '../../../io/jsonwebtoken/security/KeyBuilder.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SecretKeyBuilder extends KeyBuilder<SecretKey, SecretKeyBuilder>, Object{
}