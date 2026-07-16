import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class ImmutablePair<L extends unknown, R extends unknown> extends Pair<L, R> {
    static EMPTY_ARRAY: ImmutablePair<Object, Object>[];
    static emptyArray<L extends unknown, R extends unknown>(): ImmutablePair<L, R>[];
    static emptyArray<L extends unknown, R extends unknown>(): Pair<L, R>[];
    static left<L extends unknown, R extends unknown>(paramarg0: L): Pair<L, R>;
    static nullPair<L extends unknown, R extends unknown>(): ImmutablePair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): ImmutablePair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: Map$Entry<L, R>): ImmutablePair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: Map$Entry<L, R>): Pair<L, R>;
    static ofNonNull<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): ImmutablePair<L, R>;
    static ofNonNull<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    static right<L extends unknown, R extends unknown>(paramarg0: R): Pair<L, R>;
    constructor(arg0: L, arg1: R)
    readonly left: L;
    readonly right: R;
    getLeft(): L;
    getRight(): R;
    setValue(arg0: R): R;
}