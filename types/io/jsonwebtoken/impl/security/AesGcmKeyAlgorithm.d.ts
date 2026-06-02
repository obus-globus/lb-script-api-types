import type { AesAlgorithm } from '../../../../io/jsonwebtoken/impl/security/AesAlgorithm.d.ts'
import type { DecryptionKeyRequest } from '../../../../io/jsonwebtoken/security/DecryptionKeyRequest.d.ts'
import type { KeyRequest } from '../../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { KeyResult } from '../../../../io/jsonwebtoken/security/KeyResult.d.ts'
import type { SecretKeyAlgorithm } from '../../../../io/jsonwebtoken/security/SecretKeyAlgorithm.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class AesGcmKeyAlgorithm extends AesAlgorithm implements SecretKeyAlgorithm {
    static TRANSFORMATION: string;
    constructor(arg0: number)
    getDecryptionKey(arg0: DecryptionKeyRequest<SecretKey>): SecretKey;
    getEncryptionKey(arg0: KeyRequest<SecretKey>): KeyResult;
}