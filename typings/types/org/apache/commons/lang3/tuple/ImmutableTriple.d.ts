import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Triple } from '../../../../../org/apache/commons/lang3/tuple/Triple.d.ts'
export class ImmutableTriple<L extends Object | number | string | boolean, M extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Triple<L, M, R> {
    static EMPTY_ARRAY: Object | null;
    static EMPTY_ARRAY: Object | null;
    static emptyArray(): Object | null;
    static emptyArray(): Object | null;
    static nullTriple(): ImmutableTriple<Object, Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): ImmutableTriple<Object, Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Triple<Object, Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): ImmutableTriple<Object, Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Triple<Object, Object, Object>;
    constructor(arg0: L, arg1: M, arg2: R)
    readonly left: L;
    readonly middle: M;
    readonly right: R;
    getLeft(): L;
    getMiddle(): M;
    getRight(): R;
}