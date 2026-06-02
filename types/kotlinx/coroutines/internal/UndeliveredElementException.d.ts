import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class UndeliveredElementException extends RuntimeException {
    constructor(message: string, cause: Throwable)
}