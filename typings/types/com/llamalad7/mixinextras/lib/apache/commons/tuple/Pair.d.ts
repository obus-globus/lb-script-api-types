import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export abstract class Pair<L extends unknown, R extends unknown> extends Object implements Serializable, Comparable<Pair<L, R>>, Map$Entry<L, R> {
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    constructor()
    readonly key: L;
    readonly value: R;
    compareTo(arg0: Pair<L, R>): number;
    equals(arg0: Object | null): boolean;
    getLeft(): L;
    getRight(): R;
    hashCode(): number;
    toString(): string;
}