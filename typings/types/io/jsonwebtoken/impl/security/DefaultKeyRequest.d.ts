import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { DefaultRequest } from '../../../../io/jsonwebtoken/impl/security/DefaultRequest.d.ts'
import type { AeadAlgorithm } from '../../../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { KeyRequest } from '../../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultKeyRequest<T extends unknown> extends DefaultRequest<T> implements KeyRequest<T> {
    constructor(arg0: T, arg1: JavaMap<any, any>, arg2: SecureRandom, arg3: JavaMap<any, any>, arg4: AeadAlgorithm)
    readonly encryptionAlgorithm: AeadAlgorithm;
    readonly header: JavaMap<any, any>;
    getEncryptionAlgorithm(): AeadAlgorithm;
    getHeader(): JavaMap<any, any>;
}