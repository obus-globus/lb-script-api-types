import type { ClosingFuture$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ClosingFuture$State } from '../../../../../com/google/common/util/concurrent/ClosingFuture$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$ValueAndCloser<V extends unknown> extends Object {
    constructor(arg0: ClosingFuture$State<Object>, arg1: ClosingFuture$1)
    private constructor(state: ClosingFuture$State<V>)
    // private state: ClosingFuture$State<V>;
    closeAsync(): void;
    get(): V;
}