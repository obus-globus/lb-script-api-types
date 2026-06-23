import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImmediateFuture<V extends unknown> extends Object implements ListenableFuture<V> {
    constructor(value: V)
    // private value: V;
    addListener(listener: () => void, executor: Executor): void;
    cancel(mayInterruptIfRunning: boolean): boolean;
    get(): V;
    get(timeout: number, unit: TimeUnit): V;
    isCancelled(): boolean;
    isDone(): boolean;
    toString(): string;
}