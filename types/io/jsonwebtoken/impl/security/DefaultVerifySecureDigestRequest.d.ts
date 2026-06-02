import type { DefaultSecureRequest } from '../../../../io/jsonwebtoken/impl/security/DefaultSecureRequest.d.ts'
import type { VerifySecureDigestRequest } from '../../../../io/jsonwebtoken/security/VerifySecureDigestRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
export class DefaultVerifySecureDigestRequest<K extends Key> extends DefaultSecureRequest<InputStream, K> implements VerifySecureDigestRequest<K> {
    constructor(arg0: InputStream, arg1: Provider, arg2: SecureRandom, arg3: K, arg4: number[])
    readonly digest: number[];
    getDigest(): number[];
}