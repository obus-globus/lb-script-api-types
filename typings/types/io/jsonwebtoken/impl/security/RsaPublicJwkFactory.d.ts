import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { RSAPublicKey } from '../../../../java/security/interfaces/RSAPublicKey.d.ts'
export class RsaPublicJwkFactory extends AbstractFamilyJwkFactory<RSAPublicKey, { [key: string]: any }> {
    constructor()
    createJwkFromKey(arg0: { [key: string]: any }): { [key: string]: any };
    createJwkFromValues(arg0: { [key: string]: any }): { [key: string]: any };
}