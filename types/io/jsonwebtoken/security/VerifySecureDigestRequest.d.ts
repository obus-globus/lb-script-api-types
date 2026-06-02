import type { SecureRequest } from '../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { VerifyDigestRequest } from '../../../io/jsonwebtoken/security/VerifyDigestRequest.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface VerifySecureDigestRequest<K extends Key> extends SecureRequest<InputStream, K>, VerifyDigestRequest, Object{
}