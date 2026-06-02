import type { KeyException } from '../../java/security/KeyException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class InvalidKeyException extends KeyException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}