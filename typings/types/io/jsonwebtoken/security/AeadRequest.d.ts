import type { AssociatedDataSupplier } from '../../../io/jsonwebtoken/security/AssociatedDataSupplier.d.ts'
import type { SecureRequest } from '../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AeadRequest extends AssociatedDataSupplier, SecureRequest<InputStream, SecretKey>, Object{
    getAssociatedData(): InputStream;
}