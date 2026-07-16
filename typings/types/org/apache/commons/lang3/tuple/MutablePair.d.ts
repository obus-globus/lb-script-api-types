import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class MutablePair<L extends unknown, R extends unknown> extends Pair<L, R> {
    static EMPTY_ARRAY: MutablePair<Object, Object>[];
    static emptyArray(): MutablePair<Object, Object>[];
    static emptyArray(): Pair<Object, Object>[];
    static of(paramarg0: Object | null, paramarg1: Object | null): MutablePair<Object, Object>;
    static of(paramarg0: Map$Entry<Object, Object>): MutablePair<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static of(paramarg0: Map$Entry<Object, Object>): Pair<Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null): MutablePair<Object, Object>;
    static ofNonNull(paramarg0: Map$Entry<Object, Object>): MutablePair<Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    constructor()
    constructor(arg0: L, arg1: R)
    left: L;
    right: R;
    getLeft(): L;
    getRight(): R;
    setLeft(arg0: L): void;
    setRight(arg0: R): void;
    setValue(arg0: R): R;
}