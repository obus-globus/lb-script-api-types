import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { DefaultRequest } from '../../../../io/jsonwebtoken/impl/security/DefaultRequest.d.ts'
import type { VerifyDigestRequest } from '../../../../io/jsonwebtoken/security/VerifyDigestRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
export class DefaultVerifyDigestRequest extends DefaultRequest<InputStream> implements VerifyDigestRequest {
    constructor(arg0: InputStream, arg1: JavaMap<any, any>, arg2: SecureRandom, arg3: number[])
    readonly digest: number[];
    getDigest(): number[];
}