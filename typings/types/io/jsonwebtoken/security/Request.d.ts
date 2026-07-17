import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Message } from '../../../io/jsonwebtoken/security/Message.d.ts'
import type { SecureRandom } from '../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Request<T extends unknown> extends Message<T>, Object{
    getProvider(): JavaMap<any, any>;
    getSecureRandom(): SecureRandom;
}