import type { DigestSupplier } from '../../../io/jsonwebtoken/security/DigestSupplier.d.ts'
import type { Request } from '../../../io/jsonwebtoken/security/Request.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface VerifyDigestRequest extends DigestSupplier, Request<InputStream>, Object{
}