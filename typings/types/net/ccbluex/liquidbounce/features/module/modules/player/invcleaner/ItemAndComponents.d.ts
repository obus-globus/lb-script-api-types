import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { TypedInstance } from '../../../../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { DataComponentPatch } from '../../../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { ResourceKey } from '../../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Represents the "id" of {@link ItemStack}.
 * {@link ItemStack}s with same {@link Item} and {@link DataComponentPatch} can be merged.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt:37}
 */
export class ItemAndComponents extends Record implements TypedInstance<Item> {
    constructor(item: Item, componentsPatch: DataComponentPatch)
    constructor(itemStack: ItemStack)
    // private componentsPatch: DataComponentPatch;
    /*not mapped: */ componentsPatch(): DataComponentPatch;
    // private item: Item;
    /*not mapped: */ item(): Item;
    component1(): Item;
    component2(): DataComponentPatch;
    copy(item: Item, componentsPatch: DataComponentPatch): ItemAndComponents;
    equals(other: Object | null): boolean;
    hashCode(): number;
    is<T extends Object | number | string | boolean>(rawType: T): boolean;
    is(type: Holder<T>): boolean;
    is(set: Holder<T>[]): boolean;
    is(type: ResourceKey<T>): boolean;
    is(tag: TagKey<T>): boolean;
    tags(): Stream<TagKey<T>>;
    toItemStack(count: number): ItemStack;
    toString(): string;
    typeHolder(): Holder<Item>;
}