import type { SecurityException } from '../../../io/jsonwebtoken/security/SecurityException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class MalformedKeySetException extends SecurityException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
}