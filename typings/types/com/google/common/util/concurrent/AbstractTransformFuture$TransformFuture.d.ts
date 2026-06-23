import type { Function } from '../../../../../com/google/common/base/Function.d.ts'
import type { AbstractTransformFuture } from '../../../../../com/google/common/util/concurrent/AbstractTransformFuture.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractTransformFuture$TransformFuture<I extends unknown, O extends unknown> extends AbstractTransformFuture<I, O, (param0: Object) => boolean, O> {
    static from(paramfuture: FluentFuture<Object>): FluentFuture<Object>;
    static from(paramfuture: ListenableFuture<Object>): FluentFuture<Object>;
    constructor(inputFuture: ListenableFuture<I>, function_: (param0: Object) => boolean)
    doTransform(function_: (param0: Object) => boolean, input: I): O;
    setResult(result: O): void;
}