import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { ImmutableListMultimap } from '../../../../com/google/common/collect/ImmutableListMultimap.d.ts'
import type { ImmutableMultimap } from '../../../../com/google/common/collect/ImmutableMultimap.d.ts'
import type { ImmutableSetMultimap } from '../../../../com/google/common/collect/ImmutableSetMultimap.d.ts'
import type { ListMultimap } from '../../../../com/google/common/collect/ListMultimap.d.ts'
import type { Maps$EntryTransformer } from '../../../../com/google/common/collect/Maps$EntryTransformer.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { SortedSetMultimap } from '../../../../com/google/common/collect/SortedSetMultimap.d.ts'
import type { Function as Function_2 } from '../../../../java/util/function/Function.d.ts'
import type { Supplier as Supplier_2 } from '../../../../java/util/function/Supplier.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Multimaps extends Object {
    static asMap(parammultimap: Multimap<Object, Object>): Map<Object | null, (Object | null)[]>;
    static asMap(parammultimap: ListMultimap<Object, Object>): Map<Object | null, (Object | null)[]>;
    static asMap(parammultimap: SetMultimap<Object, Object>): Map<Object | null, (Object | null)[]>;
    static asMap(parammultimap: SortedSetMultimap<Object, Object>): Map<Object | null, (Object | null)[]>;
    static filterEntries(paramunfiltered: Multimap<Object, Object>, paramentryPredicate: (param0: Object) => boolean): Multimap<Object, Object>;
    static filterEntries(paramunfiltered: SetMultimap<Object, Object>, paramentryPredicate: (param0: Object) => boolean): SetMultimap<Object, Object>;
    static filterKeys(paramunfiltered: ListMultimap<Object, Object>, paramkeyPredicate: (param0: Object) => boolean): ListMultimap<Object, Object>;
    static filterKeys(paramunfiltered: Multimap<Object, Object>, paramkeyPredicate: (param0: Object) => boolean): Multimap<Object, Object>;
    static filterKeys(paramunfiltered: SetMultimap<Object, Object>, paramkeyPredicate: (param0: Object) => boolean): SetMultimap<Object, Object>;
    static filterValues(paramunfiltered: Multimap<Object, Object>, paramvaluePredicate: (param0: Object) => boolean): Multimap<Object, Object>;
    static filterValues(paramunfiltered: SetMultimap<Object, Object>, paramvaluePredicate: (param0: Object) => boolean): SetMultimap<Object, Object>;
    static flatteningToMultimap(paramkeyFunction: (param0: Object) => Object | null, paramvalueFunction: (param0: Object) => Stream<Object>, parammultimapSupplier: () => Object | null): Collector<Object, Object, Object>;
    static forMap(parammap: Map<Object | null, Object | null>): SetMultimap<Object, Object>;
    static index(paramvalues: (Object | null)[], paramkeyFunction: (param0: Object) => boolean): ImmutableListMultimap<Object, Object>;
    static index(paramvalues: Iterator<Object>, paramkeyFunction: (param0: Object) => boolean): ImmutableListMultimap<Object, Object>;
    static invertFrom(paramsource: Multimap<Object, Object>, paramdest: Object | null): Object | null;
    static newListMultimap(parammap: Map<Object | null, (Object | null)[]>, paramfactory: () => (Object | null)[]): ListMultimap<Object, Object>;
    static newMultimap(parammap: Map<Object | null, (Object | null)[]>, paramfactory: () => (Object | null)[]): Multimap<Object, Object>;
    static newSetMultimap(parammap: Map<Object | null, (Object | null)[]>, paramfactory: () => (Object | null)[]): SetMultimap<Object, Object>;
    static newSortedSetMultimap(parammap: Map<Object | null, (Object | null)[]>, paramfactory: () => (Object | null)[]): SortedSetMultimap<Object, Object>;
    static synchronizedListMultimap(parammultimap: ListMultimap<Object, Object>): ListMultimap<Object, Object>;
    static synchronizedMultimap(parammultimap: Multimap<Object, Object>): Multimap<Object, Object>;
    static synchronizedSetMultimap(parammultimap: SetMultimap<Object, Object>): SetMultimap<Object, Object>;
    static synchronizedSortedSetMultimap(parammultimap: SortedSetMultimap<Object, Object>): SortedSetMultimap<Object, Object>;
    static toMultimap(paramkeyFunction: (param0: Object) => Object | null, paramvalueFunction: (param0: Object) => Object | null, parammultimapSupplier: () => Object | null): Collector<Object, Object, Object>;
    static transformEntries(paramfromMap: ListMultimap<Object, Object>, paramtransformer: (param0: Object, param1: Object) => Object | null): ListMultimap<Object, Object>;
    static transformEntries(paramfromMap: Multimap<Object, Object>, paramtransformer: (param0: Object, param1: Object) => Object | null): Multimap<Object, Object>;
    static transformValues(paramfromMultimap: ListMultimap<Object, Object>, paramfunction: (param0: Object) => boolean): ListMultimap<Object, Object>;
    static transformValues(paramfromMultimap: Multimap<Object, Object>, paramfunction: (param0: Object) => boolean): Multimap<Object, Object>;
    static unmodifiableListMultimap(paramdelegate: ImmutableListMultimap<Object, Object>): ListMultimap<Object, Object>;
    static unmodifiableListMultimap(paramdelegate: ListMultimap<Object, Object>): ListMultimap<Object, Object>;
    static unmodifiableMultimap(paramdelegate: ImmutableMultimap<Object, Object>): Multimap<Object, Object>;
    static unmodifiableMultimap(paramdelegate: Multimap<Object, Object>): Multimap<Object, Object>;
    static unmodifiableSetMultimap(paramdelegate: ImmutableSetMultimap<Object, Object>): SetMultimap<Object, Object>;
    static unmodifiableSetMultimap(paramdelegate: SetMultimap<Object, Object>): SetMultimap<Object, Object>;
    static unmodifiableSortedSetMultimap(paramdelegate: SortedSetMultimap<Object, Object>): SortedSetMultimap<Object, Object>;
    private constructor()
}