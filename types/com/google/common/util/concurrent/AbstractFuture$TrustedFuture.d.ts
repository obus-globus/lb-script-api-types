import type { AbstractFuture } from '../../../../../com/google/common/util/concurrent/AbstractFuture.d.ts'
import type { AbstractFuture$Trusted } from '../../../../../com/google/common/util/concurrent/AbstractFuture$Trusted.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractFuture$TrustedFuture<V extends Object | number | string | boolean> extends AbstractFuture<V> implements AbstractFuture$Trusted<V> {
    constructor()
    addListener(listener: () => void, executor: Executor): void;
    cancel(mayInterruptIfRunning: boolean): boolean;
    get(): V;
    get(timeout: number, unit: TimeUnit): V;
    isCancelled(): boolean;
    isDone(): boolean;
}