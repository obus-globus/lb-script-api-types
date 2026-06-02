import type { KeyException } from '../../../io/jsonwebtoken/security/KeyException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class UnsupportedKeyException extends KeyException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
}