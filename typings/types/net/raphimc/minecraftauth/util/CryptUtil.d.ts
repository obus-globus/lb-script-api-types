import type { KeyFactory } from '../../../../java/security/KeyFactory.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { ECPrivateKey } from '../../../../java/security/interfaces/ECPrivateKey.d.ts'
import type { ECPublicKey } from '../../../../java/security/interfaces/ECPublicKey.d.ts'
import type { RSAPrivateKey } from '../../../../java/security/interfaces/RSAPrivateKey.d.ts'
import type { RSAPublicKey } from '../../../../java/security/interfaces/RSAPublicKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CryptUtil extends Object {
    static EC_KEYFACTORY: KeyFactory;
    static RSA_KEYFACTORY: KeyFactory;
    static ecPrivateKeyFromBase64(paramarg0: string): ECPrivateKey;
    static ecPrivateKeyFromBytes(paramarg0: number[]): ECPrivateKey;
    static ecPublicKeyFromBase64(paramarg0: string): ECPublicKey;
    static ecPublicKeyFromBytes(paramarg0: number[]): ECPublicKey;
    static generateEcdsa256KeyPair(): KeyPair;
    static generateEcdsa384KeyPair(): KeyPair;
    static rsaPrivateKeyFromBase64(paramarg0: string): RSAPrivateKey;
    static rsaPrivateKeyFromBytes(paramarg0: number[]): RSAPrivateKey;
    static rsaPublicKeyFromBase64(paramarg0: string): RSAPublicKey;
    static rsaPublicKeyFromBytes(paramarg0: number[]): RSAPublicKey;
    static signSha256InP1363Format(paramarg0: ECPrivateKey, paramarg1: number[]): number[];
    constructor()
}