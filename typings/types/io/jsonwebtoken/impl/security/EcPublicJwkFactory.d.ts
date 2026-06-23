import type { AbstractEcJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractEcJwkFactory.d.ts'
import type { ECPublicKey } from '../../../../java/security/interfaces/ECPublicKey.d.ts'
export class EcPublicJwkFactory extends AbstractEcJwkFactory<ECPublicKey, { [key: string]: any }> {
    constructor()
    createJwkFromKey(arg0: { [key: string]: any }): { [key: string]: any };
    createJwkFromValues(arg0: { [key: string]: any }): { [key: string]: any };
}