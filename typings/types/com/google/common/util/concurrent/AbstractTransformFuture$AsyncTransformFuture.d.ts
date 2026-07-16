import type { AbstractTransformFuture } from '../../../../../com/google/common/util/concurrent/AbstractTransformFuture.d.ts'
import type { AsyncFunction } from '../../../../../com/google/common/util/concurrent/AsyncFunction.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractTransformFuture$AsyncTransformFuture<I extends unknown, O extends unknown> extends AbstractTransformFuture<I, O, (param0: I) => ListenableFuture<O>, ListenableFuture<O>> {
    static from<V extends unknown>(paramfuture: FluentFuture<V>): FluentFuture<V>;
    static from<V extends unknown>(paramfuture: ListenableFuture<V>): FluentFuture<V>;
    constructor(inputFuture: ListenableFuture<I>, function_: (param0: I) => ListenableFuture<O>)
    doTransform(function_: (param0: I) => ListenableFuture<O>, input: I): ListenableFuture<O>;
    setResult(result: ListenableFuture<O>): void;
}