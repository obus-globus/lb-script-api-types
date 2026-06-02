import type { KeyPairBuilderSupplier } from '../../../io/jsonwebtoken/security/KeyPairBuilderSupplier.d.ts'
import type { SecureDigestAlgorithm } from '../../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SignatureAlgorithm extends KeyPairBuilderSupplier, SecureDigestAlgorithm<PrivateKey, PublicKey>, Object{
}