import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { RSAPublicKey } from '../../../../java/security/interfaces/RSAPublicKey.d.ts'
export class RsaPublicJwkFactory extends AbstractFamilyJwkFactory<RSAPublicKey, RsaPublicJwk> {
    constructor()
    createJwkFromKey(arg0: JwkContext<RSAPublicKey>): RsaPublicJwk;
    createJwkFromValues(arg0: JwkContext<RSAPublicKey>): RsaPublicJwk;
}