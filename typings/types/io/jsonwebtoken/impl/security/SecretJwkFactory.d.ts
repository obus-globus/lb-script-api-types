import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class SecretJwkFactory extends AbstractFamilyJwkFactory<SecretKey, { [key: string]: any }> {
    constructor()
    createJwkFromKey(arg0: { [key: string]: any }): { [key: string]: any };
    createJwkFromValues(arg0: { [key: string]: any }): { [key: string]: any };
}