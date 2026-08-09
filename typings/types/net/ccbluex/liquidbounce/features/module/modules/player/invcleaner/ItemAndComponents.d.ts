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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt:41}
 */
export class ItemAndComponents extends Record implements TypedInstance<Item> {
    constructor(item: Item, componentsPatch?: DataComponentPatch)
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
    is(rawType: Item): boolean;
    is(type: Holder<Item>): boolean;
    is(set: Holder<Item>[]): boolean;
    is(type: ResourceKey<Item>): boolean;
    is(tag: TagKey<Item>): boolean;
    tags(): Stream<TagKey<Item>>;
    toItemStack(count: number): ItemStack;
    toString(): string;
    typeHolder(): Holder<Item>;
}