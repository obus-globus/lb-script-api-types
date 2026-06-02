import type { OctetJwkFactory } from '../../../../io/jsonwebtoken/impl/security/OctetJwkFactory.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OctetPrivateJwkFactory extends OctetJwkFactory<PrivateKey, Map<PrivateKey, PublicKey>> {
    constructor()
    createJwkFromKey(arg0: JwkContext<PrivateKey>): Map<PrivateKey, PublicKey>;
    createJwkFromValues(arg0: JwkContext<PrivateKey>): Map<PrivateKey, PublicKey>;
    supportsKeyValues(arg0: JwkContext<Object>): boolean;
}