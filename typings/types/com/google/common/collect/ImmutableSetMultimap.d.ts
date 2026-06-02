import type { ImmutableMultimap } from '../../../../com/google/common/collect/ImmutableMultimap.d.ts'
import type { ImmutableMultimap$Builder } from '../../../../com/google/common/collect/ImmutableMultimap$Builder.d.ts'
import type { ImmutableSetMultimap$Builder } from '../../../../com/google/common/collect/ImmutableSetMultimap$Builder.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ImmutableMultimap<K, V> implements SetMultimap<K, V> {
    static builder(): ImmutableMultimap$Builder<Object, Object>;
    static builder(): ImmutableSetMultimap$Builder<Object, Object>;
    static builderWithExpectedKeys(paramexpectedKeys: number): ImmutableMultimap$Builder<Object, Object>;
    static builderWithExpectedKeys(paramexpectedKeys: number): ImmutableSetMultimap$Builder<Object, Object>;
    static copyOf(parammultimap: Multimap<Object, Object>): ImmutableMultimap<Object, Object>;
    static copyOf(paramentries: (Object | null)[]): ImmutableMultimap<Object, Object>;
    static copyOf(parammultimap: Multimap<Object, Object>): ImmutableSetMultimap<Object, Object>;
    static copyOf(paramentries: (Object | null)[]): ImmutableSetMultimap<Object, Object>;
    static flatteningToImmutableSetMultimap(paramkeyFunction: (param0: Object | null) => Object | null, paramvaluesFunction: (param0: Object | null) => Object | null): Collector<Object, Object, Object>;
    static of(): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null, paramk5: Object | null, paramv5: Object | null): ImmutableMultimap<Object, Object>;
    static of(): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null, paramk5: Object | null, paramv5: Object | null): ImmutableSetMultimap<Object, Object>;
    static toImmutableSetMultimap(paramkeyFunction: (param0: Object | null) => Object | null, paramvalueFunction: (param0: Object | null) => Object | null): Collector<Object, Object, Object>;
    constructor(map: Map<K, V[]>, size: number, valueComparator: (param0: V) => kotlin.Boolean)
    // private emptySet: V[];
    // private entries: Map$Entry<K, V>[];
    // private inverse: ImmutableSetMultimap<V, K>;
    entries(): Map$Entry<K, V>[];
    get(key: K): V[];
    inverse(): ImmutableSetMultimap<V, K>;
    // private invert(): ImmutableSetMultimap<V, K>;
    // private readObject(stream: ObjectInputStream): void;
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    valueComparator(): (param0: V) => kotlin.Boolean;
    // private writeObject(stream: ObjectOutputStream): void;
}