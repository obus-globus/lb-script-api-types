import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
export class DiagnosticCoroutineContextException extends RuntimeException {
    constructor(context: CoroutineContext)
    // private context: CoroutineContext | null;
    fillInStackTrace(): Throwable;
    getLocalizedMessage(): string;
}