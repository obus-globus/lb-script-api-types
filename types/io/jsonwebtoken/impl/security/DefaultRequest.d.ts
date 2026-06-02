import type { DefaultMessage } from '../../../../io/jsonwebtoken/impl/security/DefaultMessage.d.ts'
import type { Request } from '../../../../io/jsonwebtoken/security/Request.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultRequest<T extends Object | number | string | boolean> extends DefaultMessage<T> implements Request<T> {
    constructor(arg0: T, arg1: Provider, arg2: SecureRandom)
    readonly provider: Provider;
    readonly secureRandom: SecureRandom;
    getProvider(): Provider;
    getSecureRandom(): SecureRandom;
}