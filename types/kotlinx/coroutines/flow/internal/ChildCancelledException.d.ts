import type { CancellationException } from '../../../../java/util/concurrent/CancellationException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ChildCancelledException extends CancellationException {
    constructor()
    fillInStackTrace(): Throwable;
}