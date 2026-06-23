import type { CryptoAlgorithm } from '../../../../io/jsonwebtoken/impl/security/CryptoAlgorithm.d.ts'
import type { AeadAlgorithm } from '../../../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { Curve } from '../../../../io/jsonwebtoken/security/Curve.d.ts'
import type { DecryptionKeyRequest } from '../../../../io/jsonwebtoken/security/DecryptionKeyRequest.d.ts'
import type { KeyAlgorithm } from '../../../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { KeyRequest } from '../../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { KeyResult } from '../../../../io/jsonwebtoken/security/KeyResult.d.ts'
import type { Request } from '../../../../io/jsonwebtoken/security/Request.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EcdhKeyAlgorithm extends CryptoAlgorithm implements KeyAlgorithm<PublicKey, PrivateKey> {
    constructor()
    constructor(arg0: KeyAlgorithm<SecretKey, SecretKey>)
    // private WRAP_ALG: KeyAlgorithm<SecretKey, SecretKey>;
    // private createOtherInfo(arg0: number, arg1: string, arg2: number[], arg3: number[]): number[];
    // private deriveKey(arg0: KeyRequest<Object>, arg1: PublicKey, arg2: PrivateKey): SecretKey;
    generateKeyPair(arg0: Curve, arg1: { [key: string]: any }, arg2: SecureRandom): KeyPair;
    generateZ(arg0: KeyRequest<Object>, arg1: PublicKey, arg2: PrivateKey): number[];
    getConcatKDFAlgorithmId(arg0: AeadAlgorithm): string;
    getDecryptionKey(arg0: DecryptionKeyRequest<PrivateKey>): SecretKey;
    getEncryptionKey(arg0: KeyRequest<PublicKey>): KeyResult;
    getJcaName(): string;
    getJcaName(arg0: Request<Object>): string;
    // private getKeyBitLength(arg0: AeadAlgorithm): number;
}