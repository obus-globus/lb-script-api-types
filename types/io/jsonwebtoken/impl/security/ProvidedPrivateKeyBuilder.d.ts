import type { ProvidedKeyBuilder } from '../../../../io/jsonwebtoken/impl/security/ProvidedKeyBuilder.d.ts'
import type { PrivateKeyBuilder } from '../../../../io/jsonwebtoken/security/PrivateKeyBuilder.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
export class ProvidedPrivateKeyBuilder extends ProvidedKeyBuilder<PrivateKey, PrivateKeyBuilder> implements PrivateKeyBuilder {
    constructor(arg0: PrivateKey)
    // private publicKey: PublicKey;
    doBuild(): PrivateKey;
    publicKey(arg0: PublicKey): PrivateKeyBuilder;
}