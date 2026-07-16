import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { MapDifference } from '../../../../com/google/common/collect/MapDifference.d.ts'
import type { Maps$EntryTransformer } from '../../../../com/google/common/collect/Maps$EntryTransformer.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { SortedMapDifference } from '../../../../com/google/common/collect/SortedMapDifference.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Function as Function_2 } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Maps extends Object {
    static asConverter<A extends unknown, B extends unknown>(parambimap: Map<A, B>): Converter<A, B>;
    static asMap<K extends unknown, V extends unknown>(paramset: K[], paramfunction: (param0: Object) => V): Map<K, V>;
    static difference<K extends unknown, V extends unknown>(paramleft: Map<K, V>, paramright: Map<K, V>): MapDifference<K, V>;
    static difference<K extends unknown, V extends unknown>(paramleft: Map<K, V>, paramright: Map<K, V>, paramvalueEquivalence: Equivalence<Object>): MapDifference<K, V>;
    static difference<K extends unknown, V extends unknown>(paramleft: Map<K, V>, paramright: Map<K, V>): SortedMapDifference<K, V>;
    static filterEntries<K extends unknown, V extends unknown>(paramunfiltered: Map<K, V>, paramentryPredicate: (param0: Object) => boolean): Map<K, V>;
    static filterKeys<K extends unknown, V extends unknown>(paramunfiltered: Map<K, V>, paramkeyPredicate: (param0: Object) => boolean): Map<K, V>;
    static filterValues<K extends unknown, V extends unknown>(paramunfiltered: Map<K, V>, paramvaluePredicate: (param0: Object) => boolean): Map<K, V>;
    static fromProperties(paramproperties: { [key: string]: any }): { [key: string]: string };
    static immutableEntry<K extends unknown, V extends unknown>(paramkey: K, paramvalue: V): Map$Entry<K, V>;
    static immutableEnumMap<K extends Enum<K>, V extends unknown>(parammap: Map<K, V>): Map<K, V>;
    static newConcurrentMap<K extends unknown, V extends unknown>(): Map<K, V>;
    static newEnumMap<K extends Enum<K>, V extends unknown>(paramtype: Class<K>): Map<K, V>;
    static newEnumMap<K extends Enum<K>, V extends unknown>(parammap: Map<K, V>): Map<K, V>;
    static newHashMap<K extends unknown, V extends unknown>(): Map<K, V>;
    static newHashMap<K extends unknown, V extends unknown>(parammap: Map<K, V>): Map<K, V>;
    static newHashMapWithExpectedSize<K extends unknown, V extends unknown>(paramexpectedSize: number): Map<K, V>;
    static newIdentityHashMap<K extends unknown, V extends unknown>(): Map<K, V>;
    static newLinkedHashMap<K extends unknown, V extends unknown>(): Map<K, V>;
    static newLinkedHashMap<K extends unknown, V extends unknown>(parammap: Map<K, V>): Map<K, V>;
    static newLinkedHashMapWithExpectedSize<K extends unknown, V extends unknown>(paramexpectedSize: number): Map<K, V>;
    static newTreeMap<C extends unknown, K extends C, V extends unknown>(paramcomparator: (param0: C, param1: C) => number): Map<K, V>;
    static newTreeMap<K extends Comparable<Object>, V extends unknown>(): Map<K, V>;
    static newTreeMap<K extends unknown, V extends unknown>(parammap: Map<K, V>): Map<K, V>;
    static subMap<K extends Comparable<Object>, V extends unknown>(parammap: Map<K, V>, paramrange: Range<K>): Map<K, V>;
    static synchronizedBiMap<K extends unknown, V extends unknown>(parambimap: Map<K, V>): Map<K, V>;
    static synchronizedNavigableMap<K extends unknown, V extends unknown>(paramnavigableMap: Map<K, V>): Map<K, V>;
    static toImmutableEnumMap<T extends unknown, K extends Enum<K>, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V): Collector<T, Object, Map<K, V>>;
    static toImmutableEnumMap<T extends unknown, K extends Enum<K>, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V, parammergeFunction: (param0: V, param1: V) => V): Collector<T, Object, Map<K, V>>;
    static toMap<K extends unknown, V extends unknown>(paramkeys: K[], paramvalueFunction: (param0: Object) => V): Map<K, V>;
    static toMap<K extends unknown, V extends unknown>(paramkeys: Iterator<K>, paramvalueFunction: (param0: Object) => V): Map<K, V>;
    static transformEntries<K extends unknown, V1 extends unknown, V2 extends unknown>(paramfromMap: Map<K, V1>, paramtransformer: (param0: Object, param1: Object) => V2): Map<K, V2>;
    static transformValues<K extends unknown, V1 extends unknown, V2 extends unknown>(paramfromMap: Map<K, V1>, paramfunction: (param0: Object) => V2): Map<K, V2>;
    static uniqueIndex<K extends unknown, V extends unknown>(paramvalues: V[], paramkeyFunction: (param0: Object) => K): Map<K, V>;
    static uniqueIndex<K extends unknown, V extends unknown>(paramvalues: Iterator<V>, paramkeyFunction: (param0: Object) => K): Map<K, V>;
    static unmodifiableBiMap<K extends unknown, V extends unknown>(parambimap: Map<K, V>): Map<K, V>;
    static unmodifiableNavigableMap<K extends unknown, V extends unknown>(parammap: Map<K, V>): Map<K, V>;
    private constructor()
}