import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { FailableBiConsumer } from '../../../../../org/apache/commons/lang3/function/FailableBiConsumer.d.ts'
import type { FailableBiFunction } from '../../../../../org/apache/commons/lang3/function/FailableBiFunction.d.ts'
export abstract class Pair<L extends unknown, R extends unknown> extends Object implements Serializable, Comparable<Pair<L, R>>, Map$Entry<L, R> {
    static EMPTY_ARRAY: Pair<Object, Object>[];
    static emptyArray<L extends unknown, R extends unknown>(): Pair<L, R>[];
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    static of<L extends unknown, R extends unknown>(paramarg0: Map$Entry<L, R>): Pair<L, R>;
    static ofNonNull<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
    constructor()
    readonly key: L;
    readonly value: R;
    accept<E extends Throwable>(arg0: (param0: L, param1: R) => void): void;
    apply<V extends unknown, E extends Throwable>(arg0: (param0: L, param1: R) => V): V;
    compareTo(arg0: Pair<L, R>): number;
    equals(arg0: Object | null): boolean;
    getLeft(): L;
    getRight(): R;
    hashCode(): number;
    toString(): string;
    toString(arg0: string): string;
}