import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotEngineException extends RuntimeException {
    constructor(e: RuntimeException)
    constructor(e: RuntimeException, closedException: boolean)
    // private closedException: boolean;
    // private e: RuntimeException;
    fillInStackTrace(): Throwable;
}