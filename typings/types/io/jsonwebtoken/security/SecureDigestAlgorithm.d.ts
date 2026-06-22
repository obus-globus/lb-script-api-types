import type { DigestAlgorithm } from '../../../io/jsonwebtoken/security/DigestAlgorithm.d.ts'
import type { SecureRequest } from '../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { VerifySecureDigestRequest } from '../../../io/jsonwebtoken/security/VerifySecureDigestRequest.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SecureDigestAlgorithm<S extends Key, V extends Key> extends DigestAlgorithm<SecureRequest<InputStream, S>, VerifySecureDigestRequest<V>>, Object{
    getId(): string;
}