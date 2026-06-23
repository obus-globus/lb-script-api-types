import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { ChildHandle } from '../../kotlinx/coroutines/ChildHandle.d.ts'
import type { ChildJob } from '../../kotlinx/coroutines/ChildJob.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
export interface CompletableDeferred<T extends unknown> extends Object, Deferred<T>{
    attachChild(child: ChildJob): ChildHandle;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    complete(value: T): boolean;
    completeExceptionally(exception: Throwable): boolean;
    getCancellationException(): CancellationException;
    join(): void;
    start(): boolean;
}