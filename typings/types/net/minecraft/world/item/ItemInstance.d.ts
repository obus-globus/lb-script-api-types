import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { TypedInstance } from '../../../../net/minecraft/core/TypedInstance.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
export interface ItemInstance extends Object, TypedInstance<Item>, DataComponentGetter{
    count(): number;
    getMaxStackSize(): number;
    getOrDefault<T extends unknown>(type: DataComponentType<T>, defaultValue: T): T;
    getTyped<T extends unknown>(type: DataComponentType<T>): TypedDataComponent<T>;
    is(rawType: Item): boolean;
    is(type: Holder<Item>): boolean;
    is(set: Holder<Item>[]): boolean;
    is(type: ResourceKey<Item>): boolean;
    is(tag: TagKey<Item>): boolean;
    tags(): Stream<TagKey<Item>>;
}