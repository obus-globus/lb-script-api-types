import type { DefaultSecureRequest } from '../../../../io/jsonwebtoken/impl/security/DefaultSecureRequest.d.ts'
import type { AeadRequest } from '../../../../io/jsonwebtoken/security/AeadRequest.d.ts'
import type { IvSupplier } from '../../../../io/jsonwebtoken/security/IvSupplier.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class DefaultAeadRequest extends DefaultSecureRequest<InputStream, SecretKey> implements AeadRequest, IvSupplier {
    constructor(arg0: InputStream, arg1: Provider, arg2: SecureRandom, arg3: SecretKey, arg4: InputStream)
    constructor(arg0: InputStream, arg1: Provider, arg2: SecureRandom, arg3: SecretKey, arg4: InputStream, arg5: number[])
    // private AAD: InputStream;
    // private IV: number[];
    getAssociatedData(): InputStream;
    getIv(): number[];
}