import type { OctetJwkFactory } from '../../../../io/jsonwebtoken/impl/security/OctetJwkFactory.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
export class OctetPublicJwkFactory extends OctetJwkFactory<PublicKey, { [key: string]: any }> {
    constructor()
    createJwkFromKey(arg0: { [key: string]: any }): { [key: string]: any };
    createJwkFromValues(arg0: { [key: string]: any }): { [key: string]: any };
}