import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanReferencePair<V extends Object | number | string | boolean> extends Pair<boolean, V>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): boolean;
    first(arg0: boolean): BooleanReferencePair<V>;
    firstBoolean(): boolean;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): boolean;
    key(arg0: boolean): BooleanReferencePair<V>;
    keyBoolean(): boolean;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): boolean;
    left(arg0: boolean): BooleanReferencePair<V>;
    leftBoolean(): boolean;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
}