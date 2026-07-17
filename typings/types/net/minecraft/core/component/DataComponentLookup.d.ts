import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentLookup$ComponentStorage } from '../../../../net/minecraft/core/component/DataComponentLookup$ComponentStorage.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
export class DataComponentLookup<T extends unknown> extends Object {
    constructor(elements: Holder<T>[])
    // private cache: JavaMap<DataComponentType<Object>, DataComponentLookup$ComponentStorage<Object, T>>;
    // private elements: Holder<T>[];
    findAll<C extends unknown>(type: DataComponentType<C>): Holder<T>[];
    findAll<C extends unknown>(type: DataComponentType<C>, value: C): Holder<T>[];
    findMatching<C extends unknown>(type: DataComponentType<C>, predicate: (param0: C) => boolean): Stream<Holder<T>>;
    // private getFromCache<C extends unknown>(type: DataComponentType<C>): DataComponentLookup$ComponentStorage<C, T>;
    // private getOrCreateStorage<C extends unknown>(type: DataComponentType<C>): DataComponentLookup$ComponentStorage<C, T>;
    // private scanForComponents<C extends unknown>(type: DataComponentType<C>): DataComponentLookup$ComponentStorage<C, T>;
}