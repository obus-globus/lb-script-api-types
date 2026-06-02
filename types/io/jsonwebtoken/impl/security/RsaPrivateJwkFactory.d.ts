import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { RSAPrivateKey } from '../../../../java/security/interfaces/RSAPrivateKey.d.ts'
import type { RSAPublicKey } from '../../../../java/security/interfaces/RSAPublicKey.d.ts'
import type { KeySpec } from '../../../../java/security/spec/KeySpec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RsaPrivateJwkFactory extends AbstractFamilyJwkFactory<RSAPrivateKey, RsaPrivateJwk> {
    constructor()
    createJwkFromKey(arg0: JwkContext<RSAPrivateKey>): RsaPrivateJwk;
    createJwkFromValues(arg0: JwkContext<RSAPrivateKey>): RsaPrivateJwk;
    // private derivePublic(arg0: JwkContext<RSAPrivateKey>): RSAPublicKey;
    generateFromSpec(arg0: JwkContext<RSAPrivateKey>, arg1: KeySpec): RSAPrivateKey;
    supportsKeyValues(arg0: JwkContext<Object>): boolean;
}