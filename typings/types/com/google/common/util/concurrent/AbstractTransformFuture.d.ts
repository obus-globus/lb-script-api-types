import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { FluentFuture$TrustedFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture$TrustedFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractTransformFuture<I extends unknown, O extends unknown, F extends unknown, T extends unknown> extends FluentFuture$TrustedFuture<O> implements Runnable {
    static from<V extends unknown>(paramfuture: FluentFuture<V>): FluentFuture<V>;
    static from<V extends unknown>(paramfuture: ListenableFuture<V>): FluentFuture<V>;
    constructor(inputFuture: ListenableFuture<I>, function_: F)
    // private function: F;
    // private inputFuture: ListenableFuture<I>;
    afterDone(): void;
    doTransform(function_: F, result: I): T;
    pendingToString(): string;
    run(): void;
    setResult(result: T): void;
}