import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Pair<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    first(): L;
    first(arg0: L): Pair<L, R>;
    key(): L;
    key(arg0: L): Pair<L, R>;
    left(): L;
    left(arg0: L): Pair<L, R>;
    right(): R;
    right(arg0: R): Pair<L, R>;
    second(): R;
    second(arg0: R): Pair<L, R>;
    value(): R;
    value(arg0: R): Pair<L, R>;
}