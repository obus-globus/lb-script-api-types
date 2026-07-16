import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Triple } from '../../../../../org/apache/commons/lang3/tuple/Triple.d.ts'
export class MutableTriple<L extends unknown, M extends unknown, R extends unknown> extends Triple<L, M, R> {
    static EMPTY_ARRAY: MutableTriple<Object, Object, Object>[];
    static emptyArray<L extends unknown, M extends unknown, R extends unknown>(): MutableTriple<L, M, R>[];
    static emptyArray<L extends unknown, M extends unknown, R extends unknown>(): Triple<L, M, R>[];
    static of<L extends unknown, M extends unknown, R extends unknown>(paramarg0: L, paramarg1: M, paramarg2: R): MutableTriple<L, M, R>;
    static of<L extends unknown, M extends unknown, R extends unknown>(paramarg0: L, paramarg1: M, paramarg2: R): Triple<L, M, R>;
    static ofNonNull<L extends unknown, M extends unknown, R extends unknown>(paramarg0: L, paramarg1: M, paramarg2: R): MutableTriple<L, M, R>;
    static ofNonNull<L extends unknown, M extends unknown, R extends unknown>(paramarg0: L, paramarg1: M, paramarg2: R): Triple<L, M, R>;
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