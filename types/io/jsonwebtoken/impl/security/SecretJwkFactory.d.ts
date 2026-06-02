import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class SecretJwkFactory extends AbstractFamilyJwkFactory<SecretKey, SecretJwk> {
    constructor()
    createJwkFromKey(arg0: JwkContext<SecretKey>): SecretJwk;
    createJwkFromValues(arg0: JwkContext<SecretKey>): SecretJwk;
}