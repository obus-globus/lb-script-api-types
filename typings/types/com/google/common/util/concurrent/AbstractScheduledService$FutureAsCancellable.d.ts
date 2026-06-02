import type { AbstractScheduledService$Cancellable } from '../../../../../com/google/common/util/concurrent/AbstractScheduledService$Cancellable.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractScheduledService$FutureAsCancellable extends Object implements AbstractScheduledService$Cancellable {
    constructor(delegate: Future<Object>)
    // private delegate: Future<Object>;
    cancel(mayInterruptIfRunning: boolean): void;
    isCancelled(): boolean;
}