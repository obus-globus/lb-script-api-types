import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { RSAPrivateKey } from '../../../../java/security/interfaces/RSAPrivateKey.d.ts'
import type { RSAPublicKey } from '../../../../java/security/interfaces/RSAPublicKey.d.ts'
import type { KeySpec } from '../../../../java/security/spec/KeySpec.d.ts'
export class RsaPrivateJwkFactory extends AbstractFamilyJwkFactory<RSAPrivateKey, JavaMap<any, any>> {
    constructor()
    createJwkFromKey(arg0: JavaMap<any, any>): JavaMap<any, any>;
    createJwkFromValues(arg0: JavaMap<any, any>): JavaMap<any, any>;
    // private derivePublic(arg0: JavaMap<any, any>): RSAPublicKey;
    generateFromSpec(arg0: JavaMap<any, any>, arg1: KeySpec): RSAPrivateKey;
    supportsKeyValues(arg0: JavaMap<any, any>): boolean;
}