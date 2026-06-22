import type { DigestAlgorithm } from '../../../io/jsonwebtoken/security/DigestAlgorithm.d.ts'
import type { Request } from '../../../io/jsonwebtoken/security/Request.d.ts'
import type { VerifyDigestRequest } from '../../../io/jsonwebtoken/security/VerifyDigestRequest.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HashAlgorithm extends DigestAlgorithm<Request<InputStream>, VerifyDigestRequest>, Object{
    getId(): string;
}