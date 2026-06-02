import type { CryptoAlgorithm } from '../../../../io/jsonwebtoken/impl/security/CryptoAlgorithm.d.ts'
import type { DecryptionKeyRequest } from '../../../../io/jsonwebtoken/security/DecryptionKeyRequest.d.ts'
import type { KeyAlgorithm } from '../../../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { KeyRequest } from '../../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { KeyResult } from '../../../../io/jsonwebtoken/security/KeyResult.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { AlgorithmParameterSpec } from '../../../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class DefaultRsaKeyAlgorithm extends CryptoAlgorithm implements KeyAlgorithm<PublicKey, PrivateKey> {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: AlgorithmParameterSpec)
    // private SPEC: AlgorithmParameterSpec;
    getDecryptionKey(arg0: DecryptionKeyRequest<PrivateKey>): SecretKey;
    getEncryptionKey(arg0: KeyRequest<PublicKey>): KeyResult;
    validate(arg0: Key, arg1: boolean): void;
}