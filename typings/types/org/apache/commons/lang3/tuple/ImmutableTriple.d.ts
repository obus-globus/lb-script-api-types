import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Triple } from '../../../../../org/apache/commons/lang3/tuple/Triple.d.ts'
export class ImmutableTriple<L extends unknown, M extends unknown, R extends unknown> extends Triple<L, M, R> {
    static EMPTY_ARRAY: ImmutableTriple<Object, Object, Object>[];
    static emptyArray<L extends unknown, M extends unknown, R extends unknown>(): ImmutableTriple<L, M, R>[];
    static emptyArray<L extends unknown, M extends unknown, R extends unknown>(): Triple<L, M, R>[];
    static nullTriple<L extends unknown, M extends unknown, R extends unknown>(): ImmutableTriple<L, M, R>;
    static of<L extends unknown, M extends unknown, R extends unknown>(paramarg0: L, paramarg1: M, paramarg2: R): ImmutableTriple<L, M, R>;
    static of<L extends unknown, M extends unknown, R extends unknown>(paramarg0: L, paramarg1: M, paramarg2: R): Triple<L, M, R>;
    static ofNonNull<L extends unknown, M extends unknown, R extends unknown>(paramarg0: L, paramarg1: M, paramarg2: R): ImmutableTriple<L, M, R>;
    static ofNonNull<L extends unknown, M extends unknown, R extends unknown>(paramarg0: L, paramarg1: M, paramarg2: R): Triple<L, M, R>;
    constructor(arg0: L, arg1: M, arg2: R)
    readonly left: L;
    readonly middle: M;
    readonly right: R;
    getLeft(): L;
    getMiddle(): M;
    getRight(): R;
}