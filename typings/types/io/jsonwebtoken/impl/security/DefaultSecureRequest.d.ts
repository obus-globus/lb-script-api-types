import type { DefaultRequest } from '../../../../io/jsonwebtoken/impl/security/DefaultRequest.d.ts'
import type { SecureRequest } from '../../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultSecureRequest<T extends Object | number | string | boolean, K extends Key> extends DefaultRequest<T> implements SecureRequest<T, K> {
    constructor(arg0: T, arg1: { [key: string]: any }, arg2: SecureRandom, arg3: K)
    // private KEY: K;
    getKey(): K;
}