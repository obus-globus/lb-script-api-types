import type { DefaultKeyRequest } from '../../../../io/jsonwebtoken/impl/security/DefaultKeyRequest.d.ts'
import type { AeadAlgorithm } from '../../../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { DecryptionKeyRequest } from '../../../../io/jsonwebtoken/security/DecryptionKeyRequest.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
export class DefaultDecryptionKeyRequest<K extends Key> extends DefaultKeyRequest<number[]> implements DecryptionKeyRequest<K> {
    constructor(arg0: number[], arg1: Provider, arg2: SecureRandom, arg3: JweHeader, arg4: AeadAlgorithm, arg5: K)
    // private decryptionKey: K;
    assertBytePayload(arg0: number[]): void;
    getKey(): K;
}