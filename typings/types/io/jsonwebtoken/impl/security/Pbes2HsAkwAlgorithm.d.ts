import type { CryptoAlgorithm } from '../../../../io/jsonwebtoken/impl/security/CryptoAlgorithm.d.ts'
import type { DecryptionKeyRequest } from '../../../../io/jsonwebtoken/security/DecryptionKeyRequest.d.ts'
import type { KeyAlgorithm } from '../../../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { KeyRequest } from '../../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { KeyResult } from '../../../../io/jsonwebtoken/security/KeyResult.d.ts'
import type { Password } from '../../../../io/jsonwebtoken/security/Password.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { SecretKeyFactory } from '../../../../javax/crypto/SecretKeyFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pbes2HsAkwAlgorithm extends CryptoAlgorithm implements KeyAlgorithm<Password, Password> {
    static assertIterations(paramarg0: number): number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: KeyAlgorithm<SecretKey, SecretKey>)
    // private DEFAULT_ITERATIONS: number;
    // private DERIVED_KEY_BIT_LENGTH: number;
    // private HASH_BYTE_LENGTH: number;
    // private MAX_ITERATIONS: number;
    // private SALT_PREFIX: number[];
    // private wrapAlg: KeyAlgorithm<SecretKey, SecretKey>;
    // private deriveKey(arg0: KeyRequest<Object>, arg1: string[], arg2: number[], arg3: number): SecretKey;
    deriveKey(arg0: SecretKeyFactory, arg1: string[], arg2: number[], arg3: number): SecretKey;
    generateInputSalt(arg0: KeyRequest<Object>): number[];
    getDecryptionKey(arg0: DecryptionKeyRequest<Password>): SecretKey;
    getEncryptionKey(arg0: KeyRequest<Password>): KeyResult;
    toRfcSalt(arg0: number[]): number[];
}