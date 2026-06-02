import type { CancellationException } from '../../../../java/util/concurrent/CancellationException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DefaultPromise$StacklessCancellationException extends CancellationException {
    private constructor()
    fillInStackTrace(): Throwable;
}