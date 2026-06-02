import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderLookup } from '../../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemLike } from '../../../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { FuelValues } from '../../../../../../net/minecraft/world/level/block/entity/FuelValues.d.ts'
export class FuelValues$Builder extends Object {
    constructor(registries: HolderLookup$Provider, enabledFeatures: FeatureFlagSet)
    // private enabledFeatures: FeatureFlagSet;
    // private items: HolderLookup<Item>;
    // private values: Object2IntSortedMap<Item>;
    add(tag: TagKey<Item>, time: number): FuelValues$Builder;
    add(itemLike: ItemLike, time: number): FuelValues$Builder;
    build(): FuelValues;
    // private putInternal(time: number, item: Item): void;
    remove(tag: TagKey<Item>): FuelValues$Builder;
}