import type { JavaMap } from '../../../../JavaMap.d.ts'
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
    static asConverter<A extends unknown, B extends unknown>(parambimap: JavaMap<A, B>): Converter<A, B>;
    static asMap<K extends unknown, V extends unknown>(paramset: K[], paramfunction: (param0: Object) => V): JavaMap<K, V>;
    static difference<K extends unknown, V extends unknown>(paramleft: JavaMap<K, V>, paramright: JavaMap<K, V>): MapDifference<K, V>;
    static difference<K extends unknown, V extends unknown>(paramleft: JavaMap<K, V>, paramright: JavaMap<K, V>, paramvalueEquivalence: Equivalence<Object>): MapDifference<K, V>;
    static difference<K extends unknown, V extends unknown>(paramleft: JavaMap<K, V>, paramright: JavaMap<K, V>): SortedMapDifference<K, V>;
    static filterEntries<K extends unknown, V extends unknown>(paramunfiltered: JavaMap<K, V>, paramentryPredicate: (param0: Object) => boolean): JavaMap<K, V>;
    static filterKeys<K extends unknown, V extends unknown>(paramunfiltered: JavaMap<K, V>, paramkeyPredicate: (param0: Object) => boolean): JavaMap<K, V>;
    static filterValues<K extends unknown, V extends unknown>(paramunfiltered: JavaMap<K, V>, paramvaluePredicate: (param0: Object) => boolean): JavaMap<K, V>;
    static fromProperties(paramproperties: JavaMap<any, any>): JavaMap<string, string>;
    static immutableEntry<K extends unknown, V extends unknown>(paramkey: K, paramvalue: V): Map$Entry<K, V>;
    static immutableEnumMap<K extends Enum<K>, V extends unknown>(parammap: JavaMap<K, V>): JavaMap<K, V>;
    static newConcurrentMap<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static newEnumMap<K extends Enum<K>, V extends unknown>(paramtype: Class<K>): JavaMap<K, V>;
    static newEnumMap<K extends Enum<K>, V extends unknown>(parammap: JavaMap<K, V>): JavaMap<K, V>;
    static newHashMap<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static newHashMap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>): JavaMap<K, V>;
    static newHashMapWithExpectedSize<K extends unknown, V extends unknown>(paramexpectedSize: number): JavaMap<K, V>;
    static newIdentityHashMap<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static newLinkedHashMap<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static newLinkedHashMap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>): JavaMap<K, V>;
    static newLinkedHashMapWithExpectedSize<K extends unknown, V extends unknown>(paramexpectedSize: number): JavaMap<K, V>;
    static newTreeMap<C extends unknown, K extends C, V extends unknown>(paramcomparator: (param0: C, param1: C) => number): JavaMap<K, V>;
    static newTreeMap<K extends Comparable<Object>, V extends unknown>(): JavaMap<K, V>;
    static newTreeMap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>): JavaMap<K, V>;
    static subMap<K extends Comparable<Object>, V extends unknown>(parammap: JavaMap<K, V>, paramrange: Range<K>): JavaMap<K, V>;
    static synchronizedBiMap<K extends unknown, V extends unknown>(parambimap: JavaMap<K, V>): JavaMap<K, V>;
    static synchronizedNavigableMap<K extends unknown, V extends unknown>(paramnavigableMap: JavaMap<K, V>): JavaMap<K, V>;
    static toImmutableEnumMap<T extends unknown, K extends Enum<K>, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V): Collector<T, Object, JavaMap<K, V>>;
    static toImmutableEnumMap<T extends unknown, K extends Enum<K>, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V, parammergeFunction: (param0: V, param1: V) => V): Collector<T, Object, JavaMap<K, V>>;
    static toMap<K extends unknown, V extends unknown>(paramkeys: K[], paramvalueFunction: (param0: Object) => V): JavaMap<K, V>;
    static toMap<K extends unknown, V extends unknown>(paramkeys: Iterator<K>, paramvalueFunction: (param0: Object) => V): JavaMap<K, V>;
    static transformEntries<K extends unknown, V1 extends unknown, V2 extends unknown>(paramfromMap: JavaMap<K, V1>, paramtransformer: (param0: Object, param1: Object) => V2): JavaMap<K, V2>;
    static transformValues<K extends unknown, V1 extends unknown, V2 extends unknown>(paramfromMap: JavaMap<K, V1>, paramfunction: (param0: Object) => V2): JavaMap<K, V2>;
    static uniqueIndex<K extends unknown, V extends unknown>(paramvalues: V[], paramkeyFunction: (param0: Object) => K): JavaMap<K, V>;
    static uniqueIndex<K extends unknown, V extends unknown>(paramvalues: Iterator<V>, paramkeyFunction: (param0: Object) => K): JavaMap<K, V>;
    static unmodifiableBiMap<K extends unknown, V extends unknown>(parambimap: JavaMap<K, V>): JavaMap<K, V>;
    static unmodifiableNavigableMap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>): JavaMap<K, V>;
    private constructor()
}