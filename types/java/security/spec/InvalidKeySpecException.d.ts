import type { GeneralSecurityException } from '../../../java/security/GeneralSecurityException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class InvalidKeySpecException extends GeneralSecurityException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}