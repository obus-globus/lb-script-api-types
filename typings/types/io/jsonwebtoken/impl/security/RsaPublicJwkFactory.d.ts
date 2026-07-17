import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { RSAPublicKey } from '../../../../java/security/interfaces/RSAPublicKey.d.ts'
export class RsaPublicJwkFactory extends AbstractFamilyJwkFactory<RSAPublicKey, JavaMap<any, any>> {
    constructor()
    createJwkFromKey(arg0: JavaMap<any, any>): JavaMap<any, any>;
    createJwkFromValues(arg0: JavaMap<any, any>): JavaMap<any, any>;
}