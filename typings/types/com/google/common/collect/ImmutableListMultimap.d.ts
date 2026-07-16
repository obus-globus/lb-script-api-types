import type { ImmutableListMultimap$Builder } from '../../../../com/google/common/collect/ImmutableListMultimap$Builder.d.ts'
import type { ImmutableMultimap } from '../../../../com/google/common/collect/ImmutableMultimap.d.ts'
import type { ImmutableMultimap$Builder } from '../../../../com/google/common/collect/ImmutableMultimap$Builder.d.ts'
import type { ListMultimap } from '../../../../com/google/common/collect/ListMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableListMultimap<K extends unknown, V extends unknown> extends ImmutableMultimap<K, V> implements ListMultimap<K, V> {
    static builder<K extends unknown, V extends unknown>(): ImmutableListMultimap$Builder<K, V>;
    static builder<K extends unknown, V extends unknown>(): ImmutableMultimap$Builder<K, V>;
    static builderWithExpectedKeys<K extends unknown, V extends unknown>(paramexpectedKeys: number): ImmutableListMultimap$Builder<K, V>;
    static builderWithExpectedKeys<K extends unknown, V extends unknown>(paramexpectedKeys: number): ImmutableMultimap$Builder<K, V>;
    static copyOf<K extends unknown, V extends unknown>(parammultimap: Multimap<K, V>): ImmutableListMultimap<K, V>;
    static copyOf<K extends unknown, V extends unknown>(paramentries: Map$Entry<K, V>[]): ImmutableListMultimap<K, V>;
    static copyOf<K extends unknown, V extends unknown>(parammultimap: Multimap<K, V>): ImmutableMultimap<K, V>;
    static copyOf<K extends unknown, V extends unknown>(paramentries: Map$Entry<K, V>[]): ImmutableMultimap<K, V>;
    static flatteningToImmutableListMultimap<T extends unknown, K extends unknown, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvaluesFunction: (param0: Object) => Stream<V>): Collector<T, Object, ImmutableListMultimap<K, V>>;
    static of<K extends unknown, V extends unknown>(): ImmutableListMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V): ImmutableListMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V): ImmutableListMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V): ImmutableListMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V): ImmutableListMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V): ImmutableListMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V): ImmutableMultimap<K, V>;
    static toImmutableListMultimap<T extends unknown, K extends unknown, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V): Collector<T, Object, ImmutableListMultimap<K, V>>;
    constructor(map: Map<K, V[]>, size: number)
    // private deserializationReplacement: ImmutableListMultimap<Object, Object>;
    // private inverse: ImmutableListMultimap<V, K>;
    get(key: K): V[];
    inverse(): ImmutableListMultimap<V, K>;
    // private invert(): ImmutableListMultimap<V, K>;
    // private readObject(stream: ObjectInputStream): void;
    // private readResolve(): Object;
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    // private writeObject(stream: ObjectOutputStream): void;
}