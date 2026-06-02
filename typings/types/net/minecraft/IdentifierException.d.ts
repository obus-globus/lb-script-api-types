import type { RuntimeException } from '../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class IdentifierException extends RuntimeException {
    constructor(message: string)
    constructor(message: string, cause: Throwable)
}