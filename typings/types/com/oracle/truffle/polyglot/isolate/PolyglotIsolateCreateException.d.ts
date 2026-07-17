import type { IllegalStateException } from '../../../../../java/lang/IllegalStateException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class PolyglotIsolateCreateException extends IllegalStateException {
    constructor(error: string)
    constructor(cause: Throwable)
}