import type { Identifiable } from '../../../io/jsonwebtoken/Identifiable.d.ts'
import type { DecryptionKeyRequest } from '../../../io/jsonwebtoken/security/DecryptionKeyRequest.d.ts'
import type { KeyRequest } from '../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { KeyResult } from '../../../io/jsonwebtoken/security/KeyResult.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyAlgorithm<E extends Key, D extends Key> extends Identifiable, Object{
    getDecryptionKey(arg0: DecryptionKeyRequest<D>): SecretKey;
    getEncryptionKey(arg0: KeyRequest<E>): KeyResult;
    getId(): string;
}