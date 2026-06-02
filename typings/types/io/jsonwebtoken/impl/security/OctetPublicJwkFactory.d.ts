import type { OctetJwkFactory } from '../../../../io/jsonwebtoken/impl/security/OctetJwkFactory.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
export class OctetPublicJwkFactory extends OctetJwkFactory<PublicKey, OctetPublicJwk<PublicKey>> {
    constructor()
    createJwkFromKey(arg0: JwkContext<PublicKey>): OctetPublicJwk<PublicKey>;
    createJwkFromValues(arg0: JwkContext<PublicKey>): OctetPublicJwk<PublicKey>;
}