import type { IllegalArgumentException } from '../../../../../../../java/lang/IllegalArgumentException.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class IllegalIcuArgumentException extends IllegalArgumentException {
    constructor(errorMessage: string)
    constructor(errorMessage: string, cause: Throwable)
    constructor(cause: Throwable)
    initCause(cause: Throwable): IllegalIcuArgumentException;
}