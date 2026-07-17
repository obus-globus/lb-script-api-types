import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { OctetJwkFactory } from '../../../../io/jsonwebtoken/impl/security/OctetJwkFactory.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
export class OctetPublicJwkFactory extends OctetJwkFactory<PublicKey, JavaMap<any, any>> {
    constructor()
    createJwkFromKey(arg0: JavaMap<any, any>): JavaMap<any, any>;
    createJwkFromValues(arg0: JavaMap<any, any>): JavaMap<any, any>;
}