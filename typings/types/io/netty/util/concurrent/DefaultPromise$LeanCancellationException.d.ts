import type { DefaultPromise$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CancellationException } from '../../../../java/util/concurrent/CancellationException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DefaultPromise$LeanCancellationException extends CancellationException {
    private constructor()
    constructor(arg0: DefaultPromise$1)
    fillInStackTrace(): Throwable;
    toString(): string;
}