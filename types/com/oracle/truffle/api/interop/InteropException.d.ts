import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class InteropException extends Exception {
    constructor(message: string)
    constructor(message: string, cause: Throwable)
    readonly cause: Throwable | null;
    fillInStackTrace(): Throwable;
    initCause(cause: Throwable): Throwable;
}