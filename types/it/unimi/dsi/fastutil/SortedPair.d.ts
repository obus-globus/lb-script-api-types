import type { Pair } from '../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export interface SortedPair<K extends Comparable<K>> extends Pair<K, K>, Object{
    contains(arg0: Object): boolean;
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
}