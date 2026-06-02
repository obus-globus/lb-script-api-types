import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class ImmutablePair<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Pair<L, R> {
    static EMPTY_ARRAY: Object | null;
    static EMPTY_ARRAY: Object | null;
    static emptyArray(): Object | null;
    static emptyArray(): Object | null;
    static left(paramarg0: Object | null): Pair<Object, Object>;
    static nullPair(): ImmutablePair<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): ImmutablePair<Object, Object>;
    static of(paramarg0: Map$Entry<Object, Object>): ImmutablePair<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static of(paramarg0: Map$Entry<Object, Object>): Pair<Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null): ImmutablePair<Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static right(paramarg0: Object | null): Pair<Object, Object>;
    constructor(arg0: L, arg1: R)
    readonly left: L;
    readonly right: R;
    getLeft(): L;
    getRight(): R;
    setValue(arg0: R): R;
}