import type { ClosingFuture$ValueAndCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$ValueAndCloser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ClosingFuture$ValueAndCloserConsumer<V extends Object | number | string | boolean> extends Object{
    accept(valueAndCloser: ClosingFuture$ValueAndCloser<V>): void;
}