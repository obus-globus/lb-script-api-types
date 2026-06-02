import type { InvalidKeyException } from '../../../io/jsonwebtoken/security/InvalidKeyException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class MalformedKeyException extends InvalidKeyException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
}