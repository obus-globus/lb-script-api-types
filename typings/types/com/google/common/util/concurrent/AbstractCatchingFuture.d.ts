import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { FluentFuture$TrustedFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture$TrustedFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractCatchingFuture<V extends unknown, X extends Throwable, F extends unknown, T extends unknown> extends FluentFuture$TrustedFuture<V> implements Runnable {
    static from(paramfuture: FluentFuture<Object>): FluentFuture<Object>;
    static from(paramfuture: ListenableFuture<Object>): FluentFuture<Object>;
    constructor(inputFuture: ListenableFuture<V>, exceptionType: Class<X>, fallback: F)
    // private exceptionType: Class<X>;
    // private fallback: F;
    // private inputFuture: ListenableFuture<V>;
    afterDone(): void;
    doFallback(fallback: F, throwable: X): T;
    pendingToString(): string;
    run(): void;
    setResult(result: T): void;
}