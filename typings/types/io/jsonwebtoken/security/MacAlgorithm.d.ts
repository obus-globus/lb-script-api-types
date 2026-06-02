import type { KeyBuilderSupplier } from '../../../io/jsonwebtoken/security/KeyBuilderSupplier.d.ts'
import type { KeyLengthSupplier } from '../../../io/jsonwebtoken/security/KeyLengthSupplier.d.ts'
import type { SecretKeyBuilder } from '../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { SecureDigestAlgorithm } from '../../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MacAlgorithm extends KeyBuilderSupplier<SecretKey, SecretKeyBuilder>, KeyLengthSupplier, SecureDigestAlgorithm<SecretKey, SecretKey>, Object{
}