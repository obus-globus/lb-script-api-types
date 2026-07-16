import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export abstract class Triple<L extends unknown, M extends unknown, R extends unknown> extends Object implements Serializable, Comparable<Triple<L, M, R>> {
    static EMPTY_ARRAY: Triple<Object, Object, Object>[];
    static emptyArray(): Triple<Object, Object, Object>[];
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Triple<Object, Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Triple<Object, Object, Object>;
    constructor()
    compareTo(arg0: Triple<L, M, R>): number;
    equals(arg0: Object | null): boolean;
    getLeft(): L;
    getMiddle(): M;
    getRight(): R;
    hashCode(): number;
    toString(): string;
    toString(arg0: string): string;
}