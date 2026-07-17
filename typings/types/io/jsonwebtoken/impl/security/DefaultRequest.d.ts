import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { DefaultMessage } from '../../../../io/jsonwebtoken/impl/security/DefaultMessage.d.ts'
import type { Request } from '../../../../io/jsonwebtoken/security/Request.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultRequest<T extends unknown> extends DefaultMessage<T> implements Request<T> {
    constructor(arg0: T, arg1: JavaMap<any, any>, arg2: SecureRandom)
    readonly provider: JavaMap<any, any>;
    readonly secureRandom: SecureRandom;
    getProvider(): JavaMap<any, any>;
    getSecureRandom(): SecureRandom;
}