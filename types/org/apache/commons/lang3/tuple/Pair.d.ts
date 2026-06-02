import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { FailableBiConsumer } from '../../../../../org/apache/commons/lang3/function/FailableBiConsumer.d.ts'
import type { FailableBiFunction } from '../../../../../org/apache/commons/lang3/function/FailableBiFunction.d.ts'
export abstract class Pair<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object implements Serializable, Comparable<Pair<L, R>>, Map$Entry<L, R> {
    static EMPTY_ARRAY: Object | null;
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static emptyArray(): Object | null;
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static of(paramarg0: Map$Entry<Object, Object>): Pair<Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    constructor()
    readonly key: L;
    readonly value: R;
    accept(arg0: (param0: L, param1: R) => void): void;
    apply<V extends Object | number | string | boolean>(arg0: (param0: L, param1: R) => E): V;
    compareTo(arg0: Pair<L, R>): number;
    equals(arg0: Object | null): boolean;
    getLeft(): L;
    getRight(): R;
    hashCode(): number;
    toString(): string;
    toString(arg0: string): string;
}