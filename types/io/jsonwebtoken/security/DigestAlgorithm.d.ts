import type { Identifiable } from '../../../io/jsonwebtoken/Identifiable.d.ts'
import type { Request } from '../../../io/jsonwebtoken/security/Request.d.ts'
import type { VerifyDigestRequest } from '../../../io/jsonwebtoken/security/VerifyDigestRequest.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DigestAlgorithm<R extends Request<InputStream>, V extends VerifyDigestRequest> extends Identifiable, Object{
    digest(arg0: R): number[];
    verify(arg0: V): boolean;
}