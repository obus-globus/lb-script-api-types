import type { JavaMap } from '../../../../JavaMap.d.ts'
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
    static asMap<K extends unknown, V extends unknown>(parammultimap: Multimap<K, V>): JavaMap<K, V[]>;
    static asMap<K extends unknown, V extends unknown>(parammultimap: ListMultimap<K, V>): JavaMap<K, V[]>;
    static asMap<K extends unknown, V extends unknown>(parammultimap: SetMultimap<K, V>): JavaMap<K, V[]>;
    static asMap<K extends unknown, V extends unknown>(parammultimap: SortedSetMultimap<K, V>): JavaMap<K, V[]>;
    static filterEntries<K extends unknown, V extends unknown>(paramunfiltered: Multimap<K, V>, paramentryPredicate: (param0: Object) => boolean): Multimap<K, V>;
    static filterEntries<K extends unknown, V extends unknown>(paramunfiltered: SetMultimap<K, V>, paramentryPredicate: (param0: Object) => boolean): SetMultimap<K, V>;
    static filterKeys<K extends unknown, V extends unknown>(paramunfiltered: ListMultimap<K, V>, paramkeyPredicate: (param0: Object) => boolean): ListMultimap<K, V>;
    static filterKeys<K extends unknown, V extends unknown>(paramunfiltered: Multimap<K, V>, paramkeyPredicate: (param0: Object) => boolean): Multimap<K, V>;
    static filterKeys<K extends unknown, V extends unknown>(paramunfiltered: SetMultimap<K, V>, paramkeyPredicate: (param0: Object) => boolean): SetMultimap<K, V>;
    static filterValues<K extends unknown, V extends unknown>(paramunfiltered: Multimap<K, V>, paramvaluePredicate: (param0: Object) => boolean): Multimap<K, V>;
    static filterValues<K extends unknown, V extends unknown>(paramunfiltered: SetMultimap<K, V>, paramvaluePredicate: (param0: Object) => boolean): SetMultimap<K, V>;
    static flatteningToMultimap<T extends unknown, K extends unknown, V extends unknown, M extends Multimap<K, V>>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => Stream<V>, parammultimapSupplier: () => M): Collector<T, Object, M>;
    static forMap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>): SetMultimap<K, V>;
    static index<K extends unknown, V extends unknown>(paramvalues: V[], paramkeyFunction: (param0: Object) => K): ImmutableListMultimap<K, V>;
    static index<K extends unknown, V extends unknown>(paramvalues: Iterator<V>, paramkeyFunction: (param0: Object) => K): ImmutableListMultimap<K, V>;
    static invertFrom<K extends unknown, V extends unknown, M extends Multimap<K, V>>(paramsource: Multimap<V, K>, paramdest: M): M;
    static newListMultimap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V[]>, paramfactory: () => V[]): ListMultimap<K, V>;
    static newMultimap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V[]>, paramfactory: () => V[]): Multimap<K, V>;
    static newSetMultimap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V[]>, paramfactory: () => V[]): SetMultimap<K, V>;
    static newSortedSetMultimap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V[]>, paramfactory: () => V[]): SortedSetMultimap<K, V>;
    static synchronizedListMultimap<K extends unknown, V extends unknown>(parammultimap: ListMultimap<K, V>): ListMultimap<K, V>;
    static synchronizedMultimap<K extends unknown, V extends unknown>(parammultimap: Multimap<K, V>): Multimap<K, V>;
    static synchronizedSetMultimap<K extends unknown, V extends unknown>(parammultimap: SetMultimap<K, V>): SetMultimap<K, V>;
    static synchronizedSortedSetMultimap<K extends unknown, V extends unknown>(parammultimap: SortedSetMultimap<K, V>): SortedSetMultimap<K, V>;
    static toMultimap<T extends unknown, K extends unknown, V extends unknown, M extends Multimap<K, V>>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V, parammultimapSupplier: () => M): Collector<T, Object, M>;
    static transformEntries<K extends unknown, V1 extends unknown, V2 extends unknown>(paramfromMap: ListMultimap<K, V1>, paramtransformer: (param0: Object, param1: Object) => V2): ListMultimap<K, V2>;
    static transformEntries<K extends unknown, V1 extends unknown, V2 extends unknown>(paramfromMap: Multimap<K, V1>, paramtransformer: (param0: Object, param1: Object) => V2): Multimap<K, V2>;
    static transformValues<K extends unknown, V1 extends unknown, V2 extends unknown>(paramfromMultimap: ListMultimap<K, V1>, paramfunction: (param0: Object) => V2): ListMultimap<K, V2>;
    static transformValues<K extends unknown, V1 extends unknown, V2 extends unknown>(paramfromMultimap: Multimap<K, V1>, paramfunction: (param0: Object) => V2): Multimap<K, V2>;
    static unmodifiableListMultimap<K extends unknown, V extends unknown>(paramdelegate: ImmutableListMultimap<K, V>): ListMultimap<K, V>;
    static unmodifiableListMultimap<K extends unknown, V extends unknown>(paramdelegate: ListMultimap<K, V>): ListMultimap<K, V>;
    static unmodifiableMultimap<K extends unknown, V extends unknown>(paramdelegate: ImmutableMultimap<K, V>): Multimap<K, V>;
    static unmodifiableMultimap<K extends unknown, V extends unknown>(paramdelegate: Multimap<K, V>): Multimap<K, V>;
    static unmodifiableSetMultimap<K extends unknown, V extends unknown>(paramdelegate: ImmutableSetMultimap<K, V>): SetMultimap<K, V>;
    static unmodifiableSetMultimap<K extends unknown, V extends unknown>(paramdelegate: SetMultimap<K, V>): SetMultimap<K, V>;
    static unmodifiableSortedSetMultimap<K extends unknown, V extends unknown>(paramdelegate: SortedSetMultimap<K, V>): SortedSetMultimap<K, V>;
    private constructor()
}