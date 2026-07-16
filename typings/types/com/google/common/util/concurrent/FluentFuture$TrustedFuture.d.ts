import type { AbstractFuture$Trusted } from '../../../../../com/google/common/util/concurrent/AbstractFuture$Trusted.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class FluentFuture$TrustedFuture<V extends unknown> extends FluentFuture<V> implements AbstractFuture$Trusted<V> {
    static from<V extends unknown>(paramfuture: FluentFuture<V>): FluentFuture<V>;
    static from<V extends unknown>(paramfuture: ListenableFuture<V>): FluentFuture<V>;
    constructor()
    addListener(listener: () => void, executor: Executor): void;
    cancel(mayInterruptIfRunning: boolean): boolean;
    get(): V;
    get(timeout: number, unit: TimeUnit): V;
    isCancelled(): boolean;
    isDone(): boolean;
}