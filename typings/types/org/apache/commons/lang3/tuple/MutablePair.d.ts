import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class MutablePair<L extends unknown, R extends unknown> extends Pair<L, R> {
    static EMPTY_ARRAY: MutablePair<Object, Object>[];
    static emptyArray<L extends unknown, R extends unknown>(): MutablePair<L, R>[];
    static emptyArray<L extends unknown, R extends unknown>(): Pair<L, R>[];
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): MutablePair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: Map$Entry<L, R>): MutablePair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: Map$Entry<L, R>): Pair<L, R>;
    static ofNonNull<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): MutablePair<L, R>;
    static ofNonNull<L extends unknown, R extends unknown>(paramarg0: Map$Entry<L, R>): MutablePair<L, R>;
    static ofNonNull<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
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