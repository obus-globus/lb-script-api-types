import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ComputationException extends RuntimeException {
    constructor(cause: Throwable)
}