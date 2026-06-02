import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortObjectPair<V extends Object | number | string | boolean> extends Pair<number, V>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): ShortObjectPair<V>;
    first(arg0: number): ShortObjectPair<V>;
    firstShort(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): ShortObjectPair<V>;
    key(arg0: number): ShortObjectPair<V>;
    keyShort(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): ShortObjectPair<V>;
    left(arg0: number): ShortObjectPair<V>;
    leftShort(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
}