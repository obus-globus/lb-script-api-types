import type { AeadRequest } from '../../../io/jsonwebtoken/security/AeadRequest.d.ts'
import type { DigestSupplier } from '../../../io/jsonwebtoken/security/DigestSupplier.d.ts'
import type { IvSupplier } from '../../../io/jsonwebtoken/security/IvSupplier.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DecryptAeadRequest extends AeadRequest, DigestSupplier, IvSupplier, Object{
    getAssociatedData(): InputStream;
}