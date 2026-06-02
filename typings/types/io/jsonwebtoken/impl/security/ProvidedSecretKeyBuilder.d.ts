import type { ProvidedKeyBuilder } from '../../../../io/jsonwebtoken/impl/security/ProvidedKeyBuilder.d.ts'
import type { SecretKeyBuilder } from '../../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class ProvidedSecretKeyBuilder extends ProvidedKeyBuilder<SecretKey, SecretKeyBuilder> implements SecretKeyBuilder {
    constructor(arg0: SecretKey)
    doBuild(): SecretKey;
}