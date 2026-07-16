import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Triple } from '../../../../../org/apache/commons/lang3/tuple/Triple.d.ts'
export class MutableTriple<L extends unknown, M extends unknown, R extends unknown> extends Triple<L, M, R> {
    static EMPTY_ARRAY: MutableTriple<Object, Object, Object>[];
    static emptyArray(): MutableTriple<Object, Object, Object>[];
    static emptyArray(): Triple<Object, Object, Object>[];
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): MutableTriple<Object, Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Triple<Object, Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): MutableTriple<Object, Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Triple<Object, Object, Object>;
    constructor()
    constructor(arg0: L, arg1: M, arg2: R)
    left: L;
    middle: M;
    right: R;
    getLeft(): L;
    getMiddle(): M;
    getRight(): R;
    setLeft(arg0: L): void;
    setMiddle(arg0: M): void;
    setRight(arg0: R): void;
}