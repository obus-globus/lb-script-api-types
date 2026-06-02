import type { AbstractEcJwkFactory } from '../../../../io/jsonwebtoken/impl/security/AbstractEcJwkFactory.d.ts'
import type { KeyFactory } from '../../../../java/security/KeyFactory.d.ts'
import type { ECPrivateKey } from '../../../../java/security/interfaces/ECPrivateKey.d.ts'
import type { ECPublicKey } from '../../../../java/security/interfaces/ECPublicKey.d.ts'
import type { ECPublicKeySpec } from '../../../../java/security/spec/ECPublicKeySpec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EcPrivateJwkFactory extends AbstractEcJwkFactory<ECPrivateKey, EcPrivateJwk> {
    constructor()
    createJwkFromKey(arg0: JwkContext<ECPrivateKey>): EcPrivateJwk;
    createJwkFromValues(arg0: JwkContext<ECPrivateKey>): EcPrivateJwk;
    derivePublic(arg0: JwkContext<ECPrivateKey>): ECPublicKey;
    derivePublic(arg0: KeyFactory, arg1: ECPublicKeySpec): ECPublicKey;
    supportsKeyValues(arg0: JwkContext<Object>): boolean;
}