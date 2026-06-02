import type { Locator } from '../../../../../io/jsonwebtoken/Locator.d.ts'
import type { Key } from '../../../../../java/security/Key.d.ts'
import type { KeyFactory } from '../../../../../java/security/KeyFactory.d.ts'
import type { KeyPair } from '../../../../../java/security/KeyPair.d.ts'
import type { ECPublicKey } from '../../../../../java/security/interfaces/ECPublicKey.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CryptUtil extends Object {
    static EC_KEYFACTORY: KeyFactory;
    static X5U_KEY_LOCATOR: Locator<Key>;
    static ecPublicKeyFromBase64(paramarg0: string): ECPublicKey;
    static ecPublicKeyFromBytes(paramarg0: number[]): ECPublicKey;
    static generateEcdsa384KeyPair(): KeyPair;
    constructor()
}