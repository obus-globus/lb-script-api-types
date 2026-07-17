import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractEcJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractEcJwkFactory.d.ts'
import type { KeyFactory } from '../../../../java/security/KeyFactory.d.ts'
import type { ECPrivateKey } from '../../../../java/security/interfaces/ECPrivateKey.d.ts'
import type { ECPublicKey } from '../../../../java/security/interfaces/ECPublicKey.d.ts'
import type { ECPublicKeySpec } from '../../../../java/security/spec/ECPublicKeySpec.d.ts'
export class EcPrivateJwkFactory extends AbstractEcJwkFactory<ECPrivateKey, JavaMap<any, any>> {
    constructor()
    createJwkFromKey(arg0: JavaMap<any, any>): JavaMap<any, any>;
    createJwkFromValues(arg0: JavaMap<any, any>): JavaMap<any, any>;
    derivePublic(arg0: JavaMap<any, any>): ECPublicKey;
    derivePublic(arg0: KeyFactory, arg1: ECPublicKeySpec): ECPublicKey;
    supportsKeyValues(arg0: JavaMap<any, any>): boolean;
}