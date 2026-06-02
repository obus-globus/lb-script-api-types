import type { KeyBuilder } from '../../../io/jsonwebtoken/security/KeyBuilder.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PrivateKeyBuilder extends KeyBuilder<PrivateKey, PrivateKeyBuilder>, Object{
    publicKey(arg0: PublicKey): PrivateKeyBuilder;
}