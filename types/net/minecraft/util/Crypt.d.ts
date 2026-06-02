import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { KeyPair } from '../../../java/security/KeyPair.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Base64$Encoder } from '../../../java/util/Base64$Encoder.d.ts'
import type { Cipher } from '../../../javax/crypto/Cipher.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Crypt extends Object {
    static MIME_ENCODER: Base64$Encoder;
    static MIME_LINE_SEPARATOR: string;
    static PRIVATE_KEY_CODEC: Codec<PrivateKey>;
    static PUBLIC_KEY_CODEC: Codec<PublicKey>;
    static RSA_PUBLIC_KEY_HEADER: string;
    static SIGNATURE_BYTES: number;
    static SIGNING_ALGORITHM: string;
    static byteToPublicKey(paramkeyData: number[]): PublicKey;
    static decryptByteToSecretKey(paramprivateKey: PrivateKey, paramkeyData: number[]): SecretKey;
    static decryptUsingKey(paramkey: Key, paraminput: number[]): number[];
    static digestData(paramserverId: string, parampublicKey: PublicKey, paramsharedKey: SecretKey): number[];
    static encryptUsingKey(paramkey: Key, paraminput: number[]): number[];
    static generateKeyPair(): KeyPair;
    static generateSecretKey(): SecretKey;
    static getCipher(paramopMode: number, paramkey: Key): Cipher;
    static pemRsaPrivateKeyToString(paramprivateKey: PrivateKey): string;
    static rsaPublicKeyToString(parampublicKey: PublicKey): string;
    static stringToPemRsaPrivateKey(paramrsaString: string): PrivateKey;
    static stringToRsaPublicKey(paramrsaString: string): PublicKey;
    constructor()
}