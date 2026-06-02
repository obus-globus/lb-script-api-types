import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$ValueAndCloser<V extends Object | number | string | boolean> extends Object {
    constructor(closingFuture: ClosingFuture<V>)
    // private closingFuture: ClosingFuture<V>;
    closeAsync(): void;
    get(): V;
}