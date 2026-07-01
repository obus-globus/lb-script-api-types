import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { CancellationException } from '../../../../java/util/concurrent/CancellationException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DefaultPromise$LeanCancellationException extends CancellationException {
    constructor(arg0: () => void)
    fillInStackTrace(): Throwable;
    toString(): string;
}