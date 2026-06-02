import type { RuntimeException } from '../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class DateTimeArithmeticException extends RuntimeException {
    constructor()
    constructor(message: string)
    constructor(message: string, cause: Throwable)
    constructor(cause: Throwable)
}