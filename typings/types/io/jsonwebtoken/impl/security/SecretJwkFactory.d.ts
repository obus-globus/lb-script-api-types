import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractFamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractFamilyJwkFactory.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class SecretJwkFactory extends AbstractFamilyJwkFactory<SecretKey, JavaMap<any, any>> {
    constructor()
    createJwkFromKey(arg0: JavaMap<any, any>): JavaMap<any, any>;
    createJwkFromValues(arg0: JavaMap<any, any>): JavaMap<any, any>;
}