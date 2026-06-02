import type { DefaultAeadRequest } from '../../../../io/jsonwebtoken/impl/security/DefaultAeadRequest.d.ts'
import type { DecryptAeadRequest } from '../../../../io/jsonwebtoken/security/DecryptAeadRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class DefaultDecryptAeadRequest extends DefaultAeadRequest implements DecryptAeadRequest {
    constructor(arg0: InputStream, arg1: SecretKey, arg2: InputStream, arg3: number[], arg4: number[])
    // private TAG: number[];
    getDigest(): number[];
}