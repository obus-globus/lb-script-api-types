import type { CryptoAlgorithm } from '../../../../io/jsonwebtoken/impl/security/CryptoAlgorithm.d.ts'
import type { SecureDigestAlgorithm } from '../../../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { SecureRequest } from '../../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { VerifySecureDigestRequest } from '../../../../io/jsonwebtoken/security/VerifySecureDigestRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
export abstract class AbstractSecureDigestAlgorithm<S extends Key, V extends Key> extends CryptoAlgorithm implements SecureDigestAlgorithm<S, V> {
    constructor(arg0: string, arg1: string)
    digest(arg0: SecureRequest<InputStream, S>): number[];
    doDigest(arg0: SecureRequest<InputStream, S>): number[];
    doVerify(arg0: VerifySecureDigestRequest<V>): boolean;
    validateKey(arg0: Key, arg1: boolean): void;
    verify(arg0: VerifySecureDigestRequest<V>): boolean;
}