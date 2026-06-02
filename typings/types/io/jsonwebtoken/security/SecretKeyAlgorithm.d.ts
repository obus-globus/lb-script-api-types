import type { KeyAlgorithm } from '../../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { KeyBuilderSupplier } from '../../../io/jsonwebtoken/security/KeyBuilderSupplier.d.ts'
import type { KeyLengthSupplier } from '../../../io/jsonwebtoken/security/KeyLengthSupplier.d.ts'
import type { SecretKeyBuilder } from '../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SecretKeyAlgorithm extends KeyAlgorithm<SecretKey, SecretKey>, KeyBuilderSupplier<SecretKey, SecretKeyBuilder>, KeyLengthSupplier, Object{
}