import type { AbstractEcJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractEcJwkFactory.d.ts'
import type { ECPublicKey } from '../../../../java/security/interfaces/ECPublicKey.d.ts'
export class EcPublicJwkFactory extends AbstractEcJwkFactory<ECPublicKey, EcPublicJwk> {
    constructor()
    createJwkFromKey(arg0: JwkContext<ECPublicKey>): EcPublicJwk;
    createJwkFromValues(arg0: JwkContext<ECPublicKey>): EcPublicJwk;
}