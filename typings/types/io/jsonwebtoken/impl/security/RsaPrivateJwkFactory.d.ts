import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { RSAPrivateKey } from '../../../../java/security/interfaces/RSAPrivateKey.d.ts'
import type { RSAPublicKey } from '../../../../java/security/interfaces/RSAPublicKey.d.ts'
import type { KeySpec } from '../../../../java/security/spec/KeySpec.d.ts'
export class RsaPrivateJwkFactory extends AbstractFamilyJwkFactory<RSAPrivateKey, { [key: string]: any }> {
    constructor()
    createJwkFromKey(arg0: { [key: string]: any }): { [key: string]: any };
    createJwkFromValues(arg0: { [key: string]: any }): { [key: string]: any };
    // private derivePublic(arg0: { [key: string]: any }): RSAPublicKey;
    generateFromSpec(arg0: { [key: string]: any }, arg1: KeySpec): RSAPrivateKey;
    supportsKeyValues(arg0: { [key: string]: any }): boolean;
}