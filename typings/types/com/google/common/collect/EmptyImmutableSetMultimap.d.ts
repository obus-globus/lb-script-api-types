import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ImmutableMultimap } from '../../../../com/google/common/collect/ImmutableMultimap.d.ts'
import type { ImmutableMultimap$Builder } from '../../../../com/google/common/collect/ImmutableMultimap$Builder.d.ts'
import type { ImmutableSetMultimap } from '../../../../com/google/common/collect/ImmutableSetMultimap.d.ts'
import type { ImmutableSetMultimap$Builder } from '../../../../com/google/common/collect/ImmutableSetMultimap$Builder.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class EmptyImmutableSetMultimap extends ImmutableSetMultimap<Object, Object> {
    static builder<K extends unknown, V extends unknown>(): ImmutableMultimap$Builder<K, V>;
    static builder<K extends unknown, V extends unknown>(): ImmutableSetMultimap$Builder<K, V>;
    static builderWithExpectedKeys<K extends unknown, V extends unknown>(paramexpectedKeys: number): ImmutableMultimap$Builder<K, V>;
    static builderWithExpectedKeys<K extends unknown, V extends unknown>(paramexpectedKeys: number): ImmutableSetMultimap$Builder<K, V>;
    static copyOf<K extends unknown, V extends unknown>(parammultimap: Multimap<K, V>): ImmutableMultimap<K, V>;
    static copyOf<K extends unknown, V extends unknown>(paramentries: Map$Entry<K, V>[]): ImmutableMultimap<K, V>;
    static copyOf<K extends unknown, V extends unknown>(parammultimap: Multimap<K, V>): ImmutableSetMultimap<K, V>;
    static copyOf<K extends unknown, V extends unknown>(paramentries: Map$Entry<K, V>[]): ImmutableSetMultimap<K, V>;
    static flatteningToImmutableSetMultimap<T extends unknown, K extends unknown, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvaluesFunction: (param0: Object) => Stream<V>): Collector<T, Object, ImmutableSetMultimap<K, V>>;
    static of<K extends unknown, V extends unknown>(): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(): ImmutableSetMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V): ImmutableSetMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V): ImmutableSetMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V): ImmutableSetMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V): ImmutableSetMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V): ImmutableSetMultimap<K, V>;
    static toImmutableSetMultimap<T extends unknown, K extends unknown, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V): Collector<T, Object, ImmutableSetMultimap<K, V>>;
    private constructor()
    asMap(): JavaMap<Object, Object[]>;
    // private readResolve(): Object;
}