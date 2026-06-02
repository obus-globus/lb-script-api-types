import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IntReferencePair<V extends Object | number | string | boolean> extends Pair<number, V>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): IntReferencePair<V>;
    first(arg0: number): IntReferencePair<V>;
    firstInt(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): IntReferencePair<V>;
    key(arg0: number): IntReferencePair<V>;
    keyInt(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): IntReferencePair<V>;
    left(arg0: number): IntReferencePair<V>;
    leftInt(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
}