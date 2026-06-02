import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentLookup$ComponentStorage } from '../../../../net/minecraft/core/component/DataComponentLookup$ComponentStorage.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
export class DataComponentLookup<T extends Object | number | string | boolean> extends Object {
    constructor(elements: Holder<T>[])
    // private cache: Map<DataComponentType<Object>, DataComponentLookup$ComponentStorage<Object, T>>;
    // private elements: Holder<T>[];
    findAll(type: DataComponentType<C>): E[];
    findAll<C extends Object | number | string | boolean>(type: DataComponentType<C>, value: C): E[];
    findMatching(type: DataComponentType<C>, predicate: (param0: C) => kotlin.Boolean): Stream<Holder<T>>;
    // private getFromCache(type: DataComponentType<C>): DataComponentLookup$ComponentStorage<C, T>;
    // private getOrCreateStorage(type: DataComponentType<C>): DataComponentLookup$ComponentStorage<C, T>;
    // private scanForComponents(type: DataComponentType<C>): DataComponentLookup$ComponentStorage<C, T>;
}