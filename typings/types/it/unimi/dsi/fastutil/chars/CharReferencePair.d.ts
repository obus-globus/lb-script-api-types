import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharReferencePair<V extends Object | number | string | boolean> extends Pair<string, V>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): string;
    first(arg0: string): CharReferencePair<V>;
    firstChar(): string;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): string;
    key(arg0: string): CharReferencePair<V>;
    keyChar(): string;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): string;
    left(arg0: string): CharReferencePair<V>;
    leftChar(): string;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
}