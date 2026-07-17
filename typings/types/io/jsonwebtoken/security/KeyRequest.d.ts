import type { JavaMap } from '../../../JavaMap.d.ts'
import type { AeadAlgorithm } from '../../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { Request } from '../../../io/jsonwebtoken/security/Request.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyRequest<T extends unknown> extends Request<T>, Object{
    getEncryptionAlgorithm(): AeadAlgorithm;
    getHeader(): JavaMap<any, any>;
}