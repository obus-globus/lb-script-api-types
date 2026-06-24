import type { CancellationException } from '../../../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class AbstractFuture$Cancellation extends Object {
    constructor(wasInterrupted: boolean, cause: Throwable)
    // private cause: Throwable;
    // private wasInterrupted: boolean;
    newCancellationException(): CancellationException;
}