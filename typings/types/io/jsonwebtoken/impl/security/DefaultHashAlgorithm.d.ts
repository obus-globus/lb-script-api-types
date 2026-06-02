import type { CryptoAlgorithm } from '../../../../io/jsonwebtoken/impl/security/CryptoAlgorithm.d.ts'
import type { HashAlgorithm } from '../../../../io/jsonwebtoken/security/HashAlgorithm.d.ts'
import type { Request } from '../../../../io/jsonwebtoken/security/Request.d.ts'
import type { VerifyDigestRequest } from '../../../../io/jsonwebtoken/security/VerifyDigestRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class DefaultHashAlgorithm extends CryptoAlgorithm implements HashAlgorithm {
    static SHA1: HashAlgorithm;
    constructor(arg0: string)
    digest(arg0: Request<InputStream>): number[];
    verify(arg0: VerifyDigestRequest): boolean;
}