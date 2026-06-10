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
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Maps extends Object {
    static asConverter(parambimap: Map<Object | null, Object | null>): Converter<Object, Object>;
    static asMap(paramset: (Object | null)[], paramfunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static asMap(paramset: (Object | null)[], paramfunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static asMap(paramset: (Object | null)[], paramfunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static difference(paramleft: Map<Object | null, Object | null>, paramright: Map<Object | null, Object | null>): MapDifference<Object, Object>;
    static difference(paramleft: Map<Object | null, Object | null>, paramright: Map<Object | null, Object | null>, paramvalueEquivalence: Equivalence<Object>): MapDifference<Object, Object>;
    static difference(paramleft: Map<Object | null, Object | null>, paramright: Map<Object | null, Object | null>): SortedMapDifference<Object, Object>;
    static filterEntries(paramunfiltered: Map<Object | null, Object | null>, paramentryPredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterEntries(paramunfiltered: Map<Object | null, Object | null>, paramentryPredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterEntries(paramunfiltered: Map<Object | null, Object | null>, paramentryPredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterEntries(paramunfiltered: Map<Object | null, Object | null>, paramentryPredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterKeys(paramunfiltered: Map<Object | null, Object | null>, paramkeyPredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterKeys(paramunfiltered: Map<Object | null, Object | null>, paramkeyPredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterKeys(paramunfiltered: Map<Object | null, Object | null>, paramkeyPredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterKeys(paramunfiltered: Map<Object | null, Object | null>, paramkeyPredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterValues(paramunfiltered: Map<Object | null, Object | null>, paramvaluePredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterValues(paramunfiltered: Map<Object | null, Object | null>, paramvaluePredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterValues(paramunfiltered: Map<Object | null, Object | null>, paramvaluePredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterValues(paramunfiltered: Map<Object | null, Object | null>, paramvaluePredicate: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static fromProperties(paramproperties: Properties): { [key: string]: string };
    static immutableEntry(paramkey: Object | null, paramvalue: Object | null): Map$Entry<Object, Object>;
    static immutableEnumMap(parammap: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static newConcurrentMap(): Map<Object | null, Object | null>;
    static newEnumMap(paramtype: Class<Object>): Map<Object | null, Object | null>;
    static newEnumMap(parammap: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static newHashMap(): Map<Object | null, Object | null>;
    static newHashMap(parammap: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static newHashMapWithExpectedSize(paramexpectedSize: number): Map<Object | null, Object | null>;
    static newIdentityHashMap(): Map<Object | null, Object | null>;
    static newLinkedHashMap(): Map<Object | null, Object | null>;
    static newLinkedHashMap(parammap: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static newLinkedHashMapWithExpectedSize(paramexpectedSize: number): Map<Object | null, Object | null>;
    static newTreeMap(paramcomparator: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static newTreeMap(): Map<Object | null, Object | null>;
    static newTreeMap(parammap: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static subMap(parammap: Map<Object | null, Object | null>, paramrange: Range<Object>): Map<Object | null, Object | null>;
    static synchronizedBiMap(parambimap: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static synchronizedNavigableMap(paramnavigableMap: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toImmutableEnumMap(paramkeyFunction: (param0: Object) => Object | null, paramvalueFunction: (param0: Object) => Object | null): Collector<Object, Object, Map<Object | null, Object | null>>;
    static toImmutableEnumMap(paramkeyFunction: (param0: Object) => Object | null, paramvalueFunction: (param0: Object) => Object | null, parammergeFunction: (param0: Object | null, param1: Object | null) => Object | null): Collector<Object, Object, Map<Object | null, Object | null>>;
    static toMap(paramkeys: (Object | null)[], paramvalueFunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static toMap(paramkeys: Iterator<Object>, paramvalueFunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static transformEntries(paramfromMap: Map<Object | null, Object | null>, paramtransformer: (param0: Object, param1: Object) => Object | null): Map<Object | null, Object | null>;
    static transformEntries(paramfromMap: Map<Object | null, Object | null>, paramtransformer: (param0: Object, param1: Object) => Object | null): Map<Object | null, Object | null>;
    static transformEntries(paramfromMap: Map<Object | null, Object | null>, paramtransformer: (param0: Object, param1: Object) => Object | null): Map<Object | null, Object | null>;
    static transformValues(paramfromMap: Map<Object | null, Object | null>, paramfunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static transformValues(paramfromMap: Map<Object | null, Object | null>, paramfunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static transformValues(paramfromMap: Map<Object | null, Object | null>, paramfunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static uniqueIndex(paramvalues: (Object | null)[], paramkeyFunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static uniqueIndex(paramvalues: Iterator<Object>, paramkeyFunction: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static unmodifiableBiMap(parambimap: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static unmodifiableNavigableMap(parammap: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    private constructor()
}