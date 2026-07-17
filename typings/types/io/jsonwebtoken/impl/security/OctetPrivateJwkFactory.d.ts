import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { OctetJwkFactory } from '../../../../io/jsonwebtoken/impl/security/OctetJwkFactory.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
export class OctetPrivateJwkFactory extends OctetJwkFactory<PrivateKey, JavaMap<PrivateKey, PublicKey>> {
    constructor()
    createJwkFromKey(arg0: JavaMap<any, any>): JavaMap<PrivateKey, PublicKey>;
    createJwkFromValues(arg0: JavaMap<any, any>): JavaMap<PrivateKey, PublicKey>;
    supportsKeyValues(arg0: JavaMap<any, any>): boolean;
}