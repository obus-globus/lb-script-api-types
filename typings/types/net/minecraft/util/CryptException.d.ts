import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class CryptException extends Exception {
    constructor(cause: Throwable)
}