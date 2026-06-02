import type { DecryptionKeyRequest } from '../../../../io/jsonwebtoken/security/DecryptionKeyRequest.d.ts'
import type { KeyAlgorithm } from '../../../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { KeyRequest } from '../../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { KeyResult } from '../../../../io/jsonwebtoken/security/KeyResult.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DirectKeyAlgorithm extends Object implements KeyAlgorithm<SecretKey, SecretKey> {
    constructor()
    getDecryptionKey(arg0: DecryptionKeyRequest<SecretKey>): SecretKey;
    getEncryptionKey(arg0: KeyRequest<SecretKey>): KeyResult;
    getId(): string;
}