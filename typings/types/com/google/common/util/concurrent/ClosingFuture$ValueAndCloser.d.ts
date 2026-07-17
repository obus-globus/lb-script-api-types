import type { ClosingFuture$State } from '../../../../../com/google/common/util/concurrent/ClosingFuture$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$ValueAndCloser<V extends unknown> extends Object {
    private constructor(state: ClosingFuture$State<V>)
    // private state: ClosingFuture$State<V>;
    closeAsync(): void;
    get(): V;
}